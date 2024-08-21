import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Homepage/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forwadin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
    </main>
  );
}
