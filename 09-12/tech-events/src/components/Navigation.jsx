"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Eventi" },
  { href: "/guide", label: "Guide" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <ul>
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <li key={link.href}>
              <Link href={link.href} className={isActive ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
