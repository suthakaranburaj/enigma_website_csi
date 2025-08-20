import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Enigma 4.0",
//   description: "The ultimate hackathon experience",
// };

import { SEO } from "./seo";

export const metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords.join(", "),
  authors: [{ name: SEO.author }],
  openGraph: SEO.openGraph,
  twitter: SEO.twitter,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo_loki.PNG" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.ico" />
        <link rel="manifest" href="/logo_loki.PNG" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Enigma 4.0 - Hackathon" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
