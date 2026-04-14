import { siteConfig } from "../config/site";

export function Features() {
  const { features } = siteConfig.sections;
  return (
    <section id="features" style={{ padding: "var(--section-padding) 0", borderBottom: "1px solid var(--color-border)" }}>
      <div className="container">
        <div style={{ maxWidth: "600px", marginBottom: "64px" }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontFamily: "var(--font-headline)",
            fontWeight: "var(--headline-weight)",
            letterSpacing: "var(--headline-tracking)",
            fontStyle: "var(--headline-style)",
            lineHeight: 1.1,
            color: "var(--color-text)",
            marginBottom: "16px",
          }}>
            {features.heading}
          </h2>
          {features.subheading && (
            <p style={{ color: "var(--color-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              {features.subheading}
            </p>
          )}
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "48px",
        }}>
          {features.items.map((item, i) => (
            <div key={i}>
              <h3 style={{
                fontFamily: "var(--font-headline)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "12px",
                letterSpacing: "var(--headline-tracking)",
              }}>
                {item.title}
              </h3>
              <p style={{
                color: "var(--color-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
