import React from "react";
import Image from "next/image";
import LoginForm from "@/app/components/LoginPage/login-form";

interface LoginContentProps {
  children?: React.ReactNode;
}

const LoginContent = ({ children }: LoginContentProps) => {
  return (
    <div className="lg:col-span-12">
      <div className="lg:w-9/12 mx-auto flex items-center justify-between lg:space-x-20">
        <div className="hidden lg:flex flex-col space-y-5 justify-start items-center w-7/12">
          <Image
            src="/assets/img/lp-1.svg"
            alt="feature-1"
            width={1000}
            height={1000}
            className="w-auto h-80"
          />
          <h1 className="text-3xl font-bold">
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="text-xs text-gray-900 font-semibold">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default LoginContent;
