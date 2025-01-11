import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import {TravelProvider} from "@/contexts/TravelContext";

const geistSans = Geist({
  variable: "--font-geist-sans", subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Dashboard", description: "Track your travel experiences around the world",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (<html lang="en">
  <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  >
  <TravelProvider>
    {children}
  </TravelProvider>
  </body>
  </html>);
}
