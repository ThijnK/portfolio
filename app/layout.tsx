import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/nav";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/app/theme-toggle";
import SocialLinks from "@/app/social-links";
import NoiseOverlay from "@/app/noise-overlay";

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
              <div className="flex xs:flex-col items-center gap-2 my-4 xs:my-0 xs:mx-7 sm:mx-10 md:mx-12 xs:grow">
                <div className="h-px w-full bg-foreground/15 xs:w-px xs:h-full xs:left-0" />
                <SocialLinks className="flex xs:flex-col gap-2.5 w-fit" />
              </div>
              {children}
            </main>
            <ThemeToggle className="absolute right-6 sm:right-10 md:right-20" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
