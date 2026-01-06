import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kandu",
  description: "Parenting Support",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gray-50 min-h-screen pb-24`}>
        <main className="max-w-md mx-auto min-h-screen bg-gray-50 shadow-2xl relative overflow-y-auto border-x border-gray-100">
           {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
