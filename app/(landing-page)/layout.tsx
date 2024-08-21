import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Homepage/navbar";
import SidebarContents from "@/app/components/Homepage/sidebar-contents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forwadin",
};

const sections = [
  { id: "get-started", title: "Get Started" },
  { id: "broadcast", title: "Broadcast" },
  { id: "campaign", title: "Campaign" },
  { id: "auto-reply", title: "Auto Reply" },
  { id: "opportunity", title: "Opportunity" },
  { id: "faq", title: "FAQ" },
  { id: "contact-us", title: "Contact Us" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SidebarContents sections={sections} />
      <Navbar />
      {children}
    </main>
  );
}
