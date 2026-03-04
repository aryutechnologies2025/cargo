import type { Metadata } from "next";
import {
  Open_Sans,
  Karla,
  Raleway,
  Noto_Serif_Georgian,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const georgian = Noto_Serif_Georgian({
  variable: "--font-georgian",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify the weights you need
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cargo Lord",
  description: "Fast and reliable cargo tracking service.",
  openGraph: {
    title: "Cargo Lord",
    description: "Fast and reliable cargo tracking service.",
    url: "https://cargo.aryuprojects.com/",
    siteName: "Cargo Lord",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Cargo Lord - Logistics Service",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${karla.variable} ${raleway.variable} ${georgian.variable} ${poppins.variable} antialiased font-poppins`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}