import { siteConfig } from "../config/site";

export function Hero() {
  const { hero } = siteConfig.sections;
  return (
    <section id="hero" style={{ padding: "var(--section-padding) 0", borderBottom: "1px solid var(--color-border)" }}>
      <div className="container">
        {hero.image && (
          <img
            src={hero.image}
            alt={hero.headline}
            style={{
              width: "100%",
              maxHeight: "70vh",
              objectFit: "cover",
              marginBottom: "60px",
              borderRadius: "var(--border-radius)",
            }}
          />
        )}
        <div style={{ maxWidth: "800px" }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontFamily: "var(--font-headline)",
            fontWeight: "var(--headline-weight)",
            letterSpacing: "var(--headline-tracking)",
            fontStyle: "var(--headline-style)",
            lineHeight: 1.05,
            color: "var(--color-text)",
            marginBottom: "24px",
          }}>
            {hero.headline}
          </h1>
          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: "var(--color-muted)",
            marginBottom: "16px",
            lineHeight: 1.6,
            fontWeight: "var(--body-weight)",
          }}>
            {hero.subheadline}
          </p>
          {hero.body && (
            <p style={{
              fontSize: "1rem",
              color: "var(--color-muted)",
              marginBottom: "40px",
              lineHeight: 1.8,
            }}>
              {hero.body}
            </p>
          )}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "40px" }}>
            <a href="#contact" style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "var(--color-accent)",
              color: "var(--color-background)",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 500,
              borderRadius: "var(--border-radius)",
            }}>
              {hero.cta_primary}
            </a>
            {hero.cta_secondary && (
              <a href="#about" style={{
                display: "inline-block",
                padding: "14px 32px",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                textDecoration: "none",
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 500,
                borderRadius: "var(--border-radius)",
              }}>
                {hero.cta_secondary}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
