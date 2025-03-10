import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserComponents from "./components/UserComponents";

export const metadata: Metadata = {
  title: "DragnDrop",
  description: "Slay the beast of web development.",
};

export default function RootLayout({
  children,
  dashboard,
}: Readonly<{
  children: React.ReactNode;
  dashboard: React.ReactNode;
}>) {
  const isUser = true;

  return isUser ? (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="main-font overflow-x-hidden overflow-y-scroll">
        <Header userComponents={UserComponents()} />
        <main className="min-w-screen flex min-h-screen items-center justify-center bg-[--secondary]">
          {dashboard}
        </main>
        <Footer />
      </body>
    </html>
  ) : (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-y-scroll">
        <Header />
        <main className="min-w-screen flex min-h-screen items-center justify-center bg-[--secondary]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
