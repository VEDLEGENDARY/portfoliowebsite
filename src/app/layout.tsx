import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ved Patel — Software Engineer",
  description:
    "CS sophomore at UTD building fintech APIs, AI/ML pipelines, and award-winning software. Portfolio of Ved Patel.",
  openGraph: {
    title: "Ved Patel — Software Engineer",
    description:
      "CS sophomore at UTD building fintech APIs, AI/ML pipelines, and award-winning software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} antialiased scroll-smooth`}
      style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans bg-[var(--color-background)] text-[var(--color-foreground)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
