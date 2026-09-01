/**
 * Brand color and font tokens — single TypeScript source.
 *
 * Tailwind classes (bg-servi-yesili, etc.) are sourced from globals.css @theme.
 * manifest.ts, JsonLd.tsx, and in-file TS/TSX color needs read from this file.
 *
 * Keep in sync with globals.css @theme when changing colors.
 */
export const THEME = {
  colors: {
    serviYesili: "#7a9a5c",
    antrasit: "#2c3333",
    safBeyaz: "#ffffff",
  },
  font: {
    serif: "Playfair Display, Georgia, 'Times New Roman', serif",
    sans: "Inter, system-ui, -apple-system, sans-serif",
  },
} as const;

export type ThemeConfig = typeof THEME;
