import { posts } from "../../../lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <h1>Post non trovato</h1>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Contenuto dell’articolo...</p>
    </div>
  );
}
