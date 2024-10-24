import type { Metadata } from "next";
import { Footer, Top, Bottom } from "@/components";
import "./globals.scss";

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
      <body className={`antialiased`}>
        <Top />
        <div className="">{children}</div>
        <Footer />
        <Bottom />
      </body>
    </html>
  );
}
