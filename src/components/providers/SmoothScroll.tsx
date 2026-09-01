"use client";

import { ReactLenis } from "lenis/react";
import ScrollRestorer from "./ScrollRestorer";

export default function SmoothScroll({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      <ScrollRestorer />
      {children}
    </ReactLenis>
  );
}
