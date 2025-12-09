import Link from "next/link";

const articoli = [
  { slug: "primo-post", titolo: "Il mio primo post" },
  { slug: "guida-nextjs", titolo: "Guida completa a Next.js" },
  { slug: "styling-in-nextjs", titolo: "Styling in Next.js" },
  { slug: "routing-dinamico", titolo: "Routing dinamico in Next.js" },
  { slug: "server-components", titolo: "Server Components: cosa sono e come usarli" },
  { slug: "data-fetching", titolo: "Data Fetching in Next.js 14" },
  { slug: "api-routes", titolo: "Creare API Routes con Next.js" },
  { slug: "ottimizzazione-immagini", titolo: "Ottimizzazione delle immagini con next/image" },
  { slug: "middleware-nextjs", titolo: "Middleware in Next.js" },
  { slug: "deploy-vercel", titolo: "Deploy su Vercel: guida passo passo" },
];

export default function BlogHome() {
  return (
    <div>
      {articoli.map((a) => (
        <Link key={a.slug} href={`/blog/${a.slug}`}>
          {a.titolo}
        </Link>
      ))}
    </div>
  );
}
