import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/nav";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/theme-toggle";
import SocialLinks from "@/app/social-links";
import NoiseOverlay from "@/components/noise-overlay";

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
        <NoiseOverlay />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex flex-col xs:flex-row xs:w-fit min-h-screen p-6 sm:p-10 md:p-20 text-sm sm:text-[15.4px] leading-6 font-sans ">
            <Nav />
            <main className="relative flex flex-col xs:flex-row h-fit max-w-2xl">
              <SocialLinks className="my-4 xs:my-0 xs:mx-7 sm:mx-10 md:mx-12" />
              <div className="relative h-fit">{children}</div>
            </main>
            <ThemeToggle className="absolute right-6 sm:right-10 md:right-20" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
