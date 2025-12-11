import Link from "next/link";

export default function GuideCard({ guide }) {
  const href = `/guide/${guide.path.join("/")}`;

  return (
    <article className="guide-card">
      <Link href={href}>
        <h3>{guide.title}</h3>
      </Link>
      <p>{guide.description}</p>
      <Link href={href}>Leggi →</Link>
    </article>
  );
}
