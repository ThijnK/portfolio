import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/nav";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/app/theme-toggle";
import SocialLinks from "@/app/social-links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col xs:flex-row min-h-screen p-6 sm:p-10 md:p-20 text-sm sm:text-[15.4px] leading-6 font-[family-name:var(--font-geist-sans)]">
            <Nav />
            <main className="relative flex flex-col xs:flex-row h-fit max-w-2xl">
              <div className="flex xs:flex-col items-center gap-2 my-4 xs:my-0 xs:mx-7 sm:mx-10 md:mx-12 xs:grow">
                <div className="h-px w-full bg-foreground/15 xs:w-px xs:h-full xs:left-0" />
                <SocialLinks className="flex xs:flex-col gap-2.5 w-fit" />
              </div>
              {/* <div className="absolute w-full top-0 h-px bg-foreground/15 xs:w-px xs:h-full xs:left-0"></div> */}
              {children}
            </main>
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
