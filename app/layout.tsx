import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import { getStyleTokens, type StyleFamily } from "../config/style";
import "./globals.css";

const tokens = getStyleTokens((siteConfig.style as unknown) as StyleFamily);

export const metadata: Metadata = {
  title: siteConfig.brand.name,
  description: siteConfig.sections.hero.subheadline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = {
    "--site-background": tokens.colorBackground,
    "--site-text": tokens.colorText,
    "--site-accent": tokens.colorAccent,
    "--site-muted": tokens.colorMuted,
    "--site-border": tokens.colorBorder,
    "--site-nav-bg": tokens.colorNavBg,
    "--site-font-headline": tokens.fontHeadline,
    "--site-font-body": tokens.fontBody,
    "--site-border-radius": tokens.borderRadius,
    "--site-section-padding": tokens.sectionPadding,
    "--site-headline-weight": tokens.headlineWeight,
    "--site-headline-tracking": tokens.headlineTracking,
    "--site-headline-style": tokens.headlineStyle,
    "--site-body-weight": tokens.bodyWeight,
  } as React.CSSProperties;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={tokens.googleFonts} rel="stylesheet" />
      </head>
      <body style={cssVars}>
        {children}
      </body>
    </html>
  );
}
