import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/nav";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col xs:flex-row min-h-screen p-6 sm:p-10 md:p-16 text-sm sm:text-[15.4px] font-[family-name:var(--font-geist-sans)]">
          <Nav />
          <main className="relative w-full mt-6 xs:mt-0 pt-6 xs:pt-0 xs:ml-6 sm:ml-10 md:ml-12 xs:pl-6 sm:pl-10 md:pl-12 border-foreground/30 h-fit max-w-2xl">
            <div className="absolute w-full top-0 h-px bg-foreground/30 xs:w-px xs:h-full xs:left-0" />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
