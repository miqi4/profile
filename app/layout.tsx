import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TransitionOverlay from "./components/TransitionOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Iqbal - Backend Developer",
  description: "Portfolio website of Mohammad Iqbal, a backend developer specializing in Next.js, Laravel, and Java",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${sora.variable}`}>
      <body className="h-screen w-screen flex flex-col antialiased overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
        <Footer />
        <TransitionOverlay />
      </body>
    </html>
  );
}
