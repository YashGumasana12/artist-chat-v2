import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VerticalNavbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="absolute parent min:h-screen w-screen flex "  />
          
          <div className="absolute child w-full h-full flex">
            <VerticalNavbar />
            <div className="flex-grow bg-white">
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
