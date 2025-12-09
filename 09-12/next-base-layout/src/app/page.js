import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Benvenuto!</h1>
      <nav>
        <Link href="/blog">Blog</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/docs/guida/installazione">Docs</Link>
      </nav>
    </div>
  );
}
