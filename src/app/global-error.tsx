"use client";

import Link from "next/link";
import { THEME } from "@/data/theme";

interface GlobalErrorProps {
  readonly error?: Error & { digest?: string };
  readonly reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          backgroundColor: THEME.colors.safBeyaz,
          color: THEME.colors.antrasit,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div style={{ width: "2.5rem", height: "2px", backgroundColor: THEME.colors.serviYesili, marginBottom: "2rem" }} />
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.4, marginBottom: "1rem" }}>
          Critical Error
        </p>
        <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem", lineHeight: 1.2 }}>
          Page Failed to Load
        </h1>
        <p style={{ fontSize: "1rem", opacity: 0.6, maxWidth: "24rem", marginBottom: "2.5rem", lineHeight: 1.6 }}>
          An unexpected error occurred. Please refresh the page.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: THEME.colors.serviYesili,
              color: THEME.colors.safBeyaz,
              border: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
          <Link href="/" style={{ padding: "0.75rem 2rem", border: "1px solid rgba(44,51,51,0.2)", color: THEME.colors.antrasit, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>
            Home
          </Link>
        </div>
      </body>
    </html>
  );
}
