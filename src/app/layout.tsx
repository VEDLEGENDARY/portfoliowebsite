import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
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
      className={`${inter.variable} ${syne.variable} bg-[#080808] antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#080808] text-[#f0f0f0] font-sans">
        {children}
      </body>
    </html>
  );
}
