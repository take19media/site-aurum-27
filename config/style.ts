export type StyleFamily = "precision" | "editorial" | "product_ui" | "streetwear" | "craft" | "luxury";

export const styleTokens: Record<StyleFamily, {
  fontHeadline: string;
  fontBody: string;
  googleFonts: string;
  colorBackground: string;
  colorText: string;
  colorAccent: string;
  colorMuted: string;
  colorBorder: string;
  colorNavBg: string;
  borderRadius: string;
  sectionPadding: string;
  headlineWeight: string;
  headlineTracking: string;
  headlineStyle: string;
  bodyWeight: string;
  navStyle: string;
}> = {
  precision: {
    fontHeadline: "'Inter', -apple-system, sans-serif",
    fontBody: "'Inter', -apple-system, sans-serif",
    googleFonts: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap",
    colorBackground: "#ffffff",
    colorText: "#1a1a1a",
    colorAccent: "#1a1a1a",
    colorMuted: "#555555",
    colorBorder: "rgba(0,0,0,0.06)",
    colorNavBg: "rgba(255,255,255,0.95)",
    borderRadius: "0px",
    sectionPadding: "120px",
    headlineWeight: "700",
    headlineTracking: "-0.03em",
    headlineStyle: "normal",
    bodyWeight: "300",
    navStyle: "light",
  },
  editorial: {
    fontHeadline: "'Playfair Display', Georgia, serif",
    fontBody: "'Inter', sans-serif",
    googleFonts: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400&display=swap",
    colorBackground: "#fafaf8",
    colorText: "#1a1a1a",
    colorAccent: "#1a1a1a",
    colorMuted: "#4a4a4a",
    colorBorder: "#e8e4de",
    colorNavBg: "rgba(250,250,248,0.95)",
    borderRadius: "0px",
    sectionPadding: "100px",
    headlineWeight: "400",
    headlineTracking: "-0.01em",
    headlineStyle: "italic",
    bodyWeight: "300",
    navStyle: "light",
  },
  product_ui: {
    fontHeadline: "'Inter', sans-serif",
    fontBody: "'Inter', sans-serif",
    googleFonts: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    colorBackground: "#0a0a0a",
    colorText: "#e2e8f0",
    colorAccent: "#6366f1",
    colorMuted: "#94a3b8",
    colorBorder: "rgba(255,255,255,0.06)",
    colorNavBg: "rgba(10,10,10,0.9)",
    borderRadius: "8px",
    sectionPadding: "80px",
    headlineWeight: "700",
    headlineTracking: "-0.025em",
    headlineStyle: "normal",
    bodyWeight: "400",
    navStyle: "dark",
  },
  streetwear: {
    fontHeadline: "'Anton', Impact, sans-serif",
    fontBody: "'Inter', sans-serif",
    googleFonts: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700&display=swap",
    colorBackground: "#000000",
    colorText: "#ffffff",
    colorAccent: "#ffffff",
    colorMuted: "#aaaaaa",
    colorBorder: "#111111",
    colorNavBg: "#000000",
    borderRadius: "0px",
    sectionPadding: "60px",
    headlineWeight: "400",
    headlineTracking: "0.02em",
    headlineStyle: "normal",
    bodyWeight: "400",
    navStyle: "dark",
  },
  craft: {
    fontHeadline: "'Lora', Georgia, serif",
    fontBody: "'Source Sans 3', sans-serif",
    googleFonts: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Source+Sans+3:wght@300;400;600&display=swap",
    colorBackground: "#f5f0e8",
    colorText: "#2c2416",
    colorAccent: "#8b6914",
    colorMuted: "#5a4f3e",
    colorBorder: "#ddd6c8",
    colorNavBg: "rgba(245,240,232,0.96)",
    borderRadius: "4px",
    sectionPadding: "80px",
    headlineWeight: "400",
    headlineTracking: "0.01em",
    headlineStyle: "normal",
    bodyWeight: "300",
    navStyle: "light",
  },
  luxury: {
    fontHeadline: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    googleFonts: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap",
    colorBackground: "#0c0c0c",
    colorText: "#e8e0d0",
    colorAccent: "#c9a96e",
    colorMuted: "#9a8f80",
    colorBorder: "rgba(201,169,110,0.1)",
    colorNavBg: "rgba(12,12,12,0.97)",
    borderRadius: "0px",
    sectionPadding: "140px",
    headlineWeight: "300",
    headlineTracking: "0.06em",
    headlineStyle: "normal",
    bodyWeight: "300",
    navStyle: "dark",
  },
};

export function getStyleTokens(family: StyleFamily) {
  return styleTokens[family] ?? styleTokens.precision;
}
