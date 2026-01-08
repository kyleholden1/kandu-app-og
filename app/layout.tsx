import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kandu Enhanced - Parenting Support",
  description: "Evidence-based strategies for toddler challenges",
  manifest: "/manifest.json",
  themeColor: "#14b8a6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={nunito.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
