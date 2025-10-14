import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "@/app/nav";
import SocialLinks from "@/app/social-links";
import NoiseOverlay from "@/components/noise-overlay";
import ThemeToggle from "@/components/theme-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thijn Kroon",
  description:
    "Thijn Kroon's personal website, showcasing projects, skills and experience.",
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NoiseOverlay />
          <div className="relative flex min-h-screen xs:w-fit xs:flex-row flex-col p-6 font-sans text-sm leading-6 sm:p-10 sm:text-[15.4px] md:p-20">
            <Nav />
            <main className="relative flex h-fit max-w-2xl xs:flex-row flex-col">
              <SocialLinks className="xs:mx-7 my-4 xs:my-0 sm:mx-10 md:mx-12" />
              <div className="relative h-fit">{children}</div>
            </main>
            <ThemeToggle className="absolute right-6 xs:translate-y-0.5 transform sm:right-10 md:right-20" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
