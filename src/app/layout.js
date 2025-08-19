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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
