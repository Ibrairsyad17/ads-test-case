import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  return (
    <section
      className="h-auto lg:h-screen bg-[url('/assets/img/main-bg.svg')] bg-cover pb-10"
      id="get-started"
    >
      <div className="lg:max-w-7xl grid lg:grid-cols-8 mx-auto justify-items-center place-items-center h-full pt-28 px-8 lg:px-0">
        <div className="lg:col-span-1 hidden lg:block lg:order-1"></div>
        <div className="lg:col-span-3 flex flex-col space-y-8 lg:order-2 order-2">
          <h1 className="text-3xl lg:text-5xl font-bold ">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="text-sm text-gray-900 font-semibold">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </p>
          <Button className="w-[200px]">
            Daftar Sekarang <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
        <Image
          src="/assets/img/lp-1.svg"
          alt="feature-1"
          width={1000}
          height={1000}
          className="w-auto h-72 lg:h-[32rem] lg:col-span-4 justify-self-center lg:justify-self-end lg:order-3 order-1"
        />
      </div>
    </section>
  );
};

export default GetStarted;
