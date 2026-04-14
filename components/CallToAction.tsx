import { siteConfig } from "../config/site";

export function CallToAction() {
  const { cta } = siteConfig.sections;
  return (
    <section id="contact" style={{ padding: "var(--section-padding) 0", borderBottom: "1px solid var(--color-border)" }}>
      <div className="container">
        <div style={{ maxWidth: "640px" }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontFamily: "var(--font-headline)",
            fontWeight: "var(--headline-weight)",
            letterSpacing: "var(--headline-tracking)",
            fontStyle: "var(--headline-style)",
            lineHeight: 1.1,
            color: "var(--color-text)",
            marginBottom: "20px",
          }}>
            {cta.heading}
          </h2>
          <p style={{
            color: "var(--color-muted)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}>
            {cta.body}
          </p>
          <a href={`mailto:${siteConfig.sections.footer.contact.email}`} style={{
            display: "inline-block",
            padding: "16px 40px",
            background: "var(--color-accent)",
            color: "var(--color-background)",
            textDecoration: "none",
            fontSize: "13px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 500,
            borderRadius: "var(--border-radius)",
          }}>
            {cta.button}
          </a>
          {cta.subtext && cta.subtext !== "{{CTA_SUBTEXT}}" && (
            <p style={{
              color: "var(--color-muted)",
              fontSize: "0.85rem",
              marginTop: "16px",
            }}>
              {cta.subtext}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
