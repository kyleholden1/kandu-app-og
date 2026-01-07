import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kandu - Parenting Support",
  description: "In the moment authoritative parenting support",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <main className="max-w-md mx-auto min-h-screen bg-white relative flex flex-col">
           <div className="flex-1">{children}</div>
           <BottomNav />
        </main>
      </body>
    </html>
  );
}
