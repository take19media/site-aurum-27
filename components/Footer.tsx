import { siteConfig } from "../config/site";

export function Footer() {
  const { brand } = siteConfig;
  const { footer } = siteConfig.sections;
  return (
    <footer style={{
      padding: "60px 0",
      borderTop: "1px solid var(--color-border)",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
          marginBottom: "48px",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-headline)",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text)",
              marginBottom: "12px",
            }}>
              {brand.name}
            </p>
            <p style={{
              color: "var(--color-muted)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}>
              {footer.tagline}
            </p>
          </div>
          <div>
            <p style={{
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              marginBottom: "12px",
              fontWeight: 600,
            }}>
              Contact
            </p>
            {footer.contact.email && footer.contact.email !== "{{FOOTER_EMAIL}}" && (
              <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", marginBottom: "6px" }}>
                <a href={`mailto:${footer.contact.email}`} style={{ color: "var(--color-muted)", textDecoration: "none" }}>
                  {footer.contact.email}
                </a>
              </p>
            )}
            {footer.contact.phone && footer.contact.phone !== "{{FOOTER_PHONE}}" && (
              <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", marginBottom: "6px" }}>
                {footer.contact.phone}
              </p>
            )}
            {footer.contact.address && footer.contact.address !== "{{FOOTER_ADDRESS}}" && (
              <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                {footer.contact.address}
              </p>
            )}
          </div>
        </div>
        <div style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ color: "var(--color-muted)", fontSize: "0.8rem" }}>
            {footer.legal}
          </p>
          <p style={{ color: "var(--color-muted)", fontSize: "0.8rem" }}>
            Built with <a href="https://take19.com" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Take19</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
