import Link from "next/link";

function Header() {
  return (
    <header>
      <h3>Header</h3>
      <Link href="/about">About</Link>
    </header>
  );
}

export default Header;
