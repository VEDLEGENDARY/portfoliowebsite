import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/providers/lenis-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ved Patel — Software Engineer",
  description:
    "Software engineer building AI systems, computer vision pipelines, and production fintech APIs. MLH winner. TSA National #1.",
  openGraph: {
    title: "Ved Patel — Software Engineer",
    description:
      "AI systems, computer vision, and production fintech APIs — shipped to real users.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#080808",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} antialiased`}
      style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans bg-[var(--color-background)] text-[var(--color-foreground)]">
        <LenisProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
