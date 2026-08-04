import type { Metadata } from "next";
import { Tiny5 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TransitionOverlay from "./components/TransitionOverlay";
import IntroScreen from "./components/IntroScreen";
import InteractiveDotGrid from "./components/InteractiveDotGrid";
import { ThemeProvider } from "./components/ThemeProvider";

const tiny5 = Tiny5({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tiny5",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Iqbal - Junior Developer",
  description: "Portfolio website of Mohammad Iqbal, a junior developer specializing in Next.js, Laravel, and Java",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${tiny5.variable}`}>
      <body className="h-screen w-screen flex flex-col antialiased overflow-hidden bg-canvas text-ink transition-colors duration-300">
        <ThemeProvider>
          <InteractiveDotGrid />
          <IntroScreen />
          <Header />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          <Footer />
          <TransitionOverlay />
        </ThemeProvider>
      </body>
    </html>
  );
}
