import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "DragnDrop",
  description: "Slay the beast and create a website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll">
        <header className="min-h-[20vh]">
          <Header />
        </header>
        {children}
        <footer className="min-h-[30vh]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
