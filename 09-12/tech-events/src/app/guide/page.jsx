import Link from "next/link";
import { guides, getChildGuides } from "../../lib/guides";

export const metadata = {
  title: "Guide",
  description: "Documentazione interna e guide tecniche.",
};

export default function GuidesIndexPage() {
  // Guide di primo livello (path con un solo elemento)
  const rootGuides = guides.filter((guide) => guide.path.length === 1);

  return (
    <main>
      <Link href="/">← Torna alla Home</Link>

      <h1>📚 Guide & Documentazione</h1>
      <p>Esplora la documentazione interna e le guide tecniche.</p>

      <section>
        <h2>Categorie</h2>
        <ul>
          {rootGuides.map((guide) => {
            const children = getChildGuides(guide.path);
            return (
              <li key={guide.path.join("/")}>
                <Link href={`/guide/${guide.path.join("/")}`}>
                  <strong>{guide.title}</strong>
                </Link>
                <p>{guide.description}</p>
                {children.length > 0 && <small>{children.length} sottosezioni</small>}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
