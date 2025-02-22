import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DragnDrop",
  description: "Slay the beast of creating a website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
