import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "BE MAX KIDS & PUBLIC SCHOOL",
  description: "Your Child Belongs Here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900 overflow-x-hidden">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
