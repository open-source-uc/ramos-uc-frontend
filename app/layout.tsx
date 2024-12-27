import localFont from "next/font/local";

import type { Metadata } from "next";

import "./globals.css";
import MainHeader from "./header/MainHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ramos Uc</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-light-2 antialiased dark:bg-dark-4`}>
        <div className="h-dvh w-full flex-col justify-center">
          <MainHeader />

          {children}
        </div>
      </body>
    </html>
  );
}
