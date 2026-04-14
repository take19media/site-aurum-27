import { siteConfig } from "../config/site";

export function SocialProof() {
  const { social_proof } = siteConfig.sections;
  return (
    <section id="social-proof" style={{ padding: "var(--section-padding) 0", borderBottom: "1px solid var(--color-border)" }}>
      <div className="container">
        <h2 style={{
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontFamily: "var(--font-headline)",
          fontWeight: "var(--headline-weight)",
          letterSpacing: "var(--headline-tracking)",
          fontStyle: "var(--headline-style)",
          lineHeight: 1.1,
          color: "var(--color-text)",
          marginBottom: "64px",
        }}>
          {social_proof.heading}
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
        }}>
          {social_proof.items.map((item, i) => (
            <div key={i} style={{
              borderTop: "1px solid var(--color-border)",
              paddingTop: "32px",
            }}>
              <p style={{
                color: "var(--color-text)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "24px",
                fontStyle: "italic",
              }}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p style={{
                  color: "var(--color-text)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}>
                  {item.author}
                </p>
                <p style={{
                  color: "var(--color-muted)",
                  fontSize: "0.85rem",
                }}>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
