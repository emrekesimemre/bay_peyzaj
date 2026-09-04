import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { THEME } from "@/data/theme";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: `${SITE.tagline.tr} | ${SITE.tagline.en}`,
    start_url: "/",
    display: "standalone",
    theme_color: THEME.colors.serviYesili,
    background_color: THEME.colors.safBeyaz,
    icons: [
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: SITE.logo.mark,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
