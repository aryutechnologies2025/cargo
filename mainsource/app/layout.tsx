import type { Metadata } from "next";
import { Open_Sans, Karla,Raleway,Noto_Serif_Georgian } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Cargo Lord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${openSans.variable} ${karla.variable} ${raleway.variable} ${georgian.variable} antialiased font-open-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
