import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
