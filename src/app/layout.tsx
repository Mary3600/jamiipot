import type { Metadata } from "next";
import { Playfair_Display, Happy_Monkey, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

const happyMonkey = Happy_Monkey({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-happy-monkey",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JamiiPot · Preserving the Heritage",
  description: "GitHub for African Recipes — discover, fork, and share traditional dishes from across Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${happyMonkey.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
