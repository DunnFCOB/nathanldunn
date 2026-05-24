"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {/* Desktop: nav links top-right only, no logo (logo is in left sidebar) */}
      <nav className={`${styles.desktopNav} site-layout`}>
        <ul className={styles.links}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: full-width bar with logo + links */}
      <div className={`${styles.mobileNav} site-layout`}>
        <h1 className={styles.mobileLogo}>Nathan Dunn</h1>
        <ul className={styles.mobileLinks}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
