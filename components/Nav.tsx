"use client";
import Link from "next/link";
import { siteConfig } from "../config/site";

export function Nav() {
  const { brand, nav } = siteConfig;
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--color-nav-bg)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
    }}>
      <Link href="/" style={{
        fontFamily: "var(--font-headline)",
        fontWeight: 700,
        fontSize: "14px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--color-text)",
        textDecoration: "none",
      }}>
        {brand.name}
      </Link>
      <div style={{ display: "flex", gap: "0", alignItems: "center" }}>
        {nav.links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontSize: "12px",
            letterSpacing: "0.04em",
            color: "var(--color-muted)",
            textDecoration: "none",
            padding: "0 16px",
            textTransform: "uppercase",
          }}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
