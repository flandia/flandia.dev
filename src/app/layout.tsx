import type { Metadata } from "next";
import { Inter, Chiron_Hei_HK, LXGW_WenKai_TC } from "next/font/google";

import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "",
  description: "",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={cn(inter.className)}>
      <body>{children}</body>
    </html>
  );
}
