import type { Metadata } from "next";
import { Header, Footer, Top, Bottom } from "@/components";
import "./globals.css";



export const metadata: Metadata = {
  title: "Exclusive",
  description: "E-commerce website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Top />
        {/* <Header /> */}
        {children}
        <Footer />
        <Bottom />
      </body>
    </html>
  );
}
