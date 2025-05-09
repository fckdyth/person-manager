import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Person Manager",
  description: "Simple web application for managing a list of people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="max-w-3xl mx-auto text-slate-800">
          <header className="p-6 border-b flex items-center justify-between bg-blue-500 rounded-bl-lg rounded-br-lg">
              <Link className="text-2xl font-bold text-white" href={'/'}>Person Manager</Link>
              <Link className="bg-slate-100 grid place-items-center py-2 px-4 rounded-full font-bold shadow-md" href={'/create'}>Add New</Link>
          </header>
          <main className="p-4 text-lg">
            {children}
          </main>
      </div>
      </body>
    </html>
  );
}
