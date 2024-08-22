import React from "react";
import navbar from "@/app/components/Homepage/navbar";
import Image from "next/image";
import Link from "next/link";

const HeaderLabel = () => {
  return (
    <header className="lg:col-span-12">
      <div className="lg:w-9/12 mx-auto flex items-center justify-center lg:justify-start h-16">
        <Link href="/" className="flex space-x-5 justify-center items-center">
          <Image
            src="/assets/img/forwadin-logo.svg"
            alt="logo"
            width={400}
            height={400}
            className="h-auto w-32"
          />
        </Link>
      </div>
    </header>
  );
};

export default HeaderLabel;
