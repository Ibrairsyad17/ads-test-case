"use client";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/Miscellaneous/tabs-features";

const TabsOpportunities = () => {
  return (
    <Tabs defaultValue="business" className="w-full">
      <TabsList>
        <TabsTrigger value="business">Bisnis dan Pemasaran</TabsTrigger>
        <TabsTrigger value="commercial">Komersial dan Penjualan</TabsTrigger>
        <TabsTrigger value="organization">Organisasi Sosial</TabsTrigger>
      </TabsList>
      <TabsContent value="business">
        Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi,
        pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar
        secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan
        dan menyampaikan pesan iklan dengan waktu yang tepat kepada target
        audiens yang sesuai.
      </TabsContent>
      <TabsContent value="commercial">
        Dengan fitur broadcast, pelaku bisnis dapat memberi tahu pelanggan
        tentang penawaran khusus, diskon, atau acara penjualan dengan cepat.
        Fitur campaign dapat membantu mengatur kampanye penjualan yang lebih
        terarah dan efektif.
      </TabsContent>
      <TabsContent value="organization">
        Organisasi non-profit dapat menggunakan fitur broadcast untuk
        menginformasikan para donatur tentang proyek, acara komunitas, atau
        inisiatif sosial yang sedang berlangsung. Fitur campaign bisa membantu
        dalam mengingatkan tentang acara atau program yang akan datang.
      </TabsContent>
    </Tabs>
  );
};

export default TabsOpportunities;
