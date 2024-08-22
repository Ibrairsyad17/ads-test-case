import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderLabel from "@/app/components/LoginPage/header-label";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forwardin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen w-full lg:grid-cols-12 grid bg-[#ECF2FA]">
      <HeaderLabel />
      {children}
    </section>
  );
}
