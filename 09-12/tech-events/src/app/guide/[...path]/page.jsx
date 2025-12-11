import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "../../../lib/guides";

// Genera i path statici
export function generateStaticParams() {
  return guides.map((guide) => ({
    path: guide.path,
  }));
}

// /guide/a/b/c
export default async function GuidePage({ params }) {
  const { path } = await params;

  // Converte l'array in stringa per confronto semplice
  const pathString = path.join("/");

  // Trova la guida che corrisponde al path
  const guide = guides.find((g) => g.path.length === path.length && g.path.join("/") === pathString);

  if (!guide) {
    notFound();
  }

  // Trova le guide figlie (iniziano con lo stesso path + 1 livello)
  const childGuides = guides.filter((g) => g.path.length === path.length + 1 && g.path.join("/").startsWith(pathString));

  return (
    <main>
      <p>
        <code>/guide/{path.join("/")}</code>
      </p>

      <h1>{guide.title}</h1>
      <p>{guide.description}</p>
      <p>{guide.content}</p>

      {childGuides.length > 0 && (
        <section>
          <h2>Sottosezioni</h2>
          <ul>
            {childGuides.map((child) => (
              <li key={child.path.join("/")}>
                <Link href={`/guide/${child.path.join("/")}`}>{child.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link href="/guide">← Torna alle Guide</Link>
    </main>
  );
}
