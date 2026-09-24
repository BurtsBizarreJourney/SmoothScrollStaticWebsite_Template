import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Starter — scroll effects (GSAP + Lenis + Framer Motion)",
  description:
    "Starter de Next.js con smooth-scroll, secuencia pinneada por scroll y transiciones animadas, listo para reemplazar con tu contenido.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${manrope.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
