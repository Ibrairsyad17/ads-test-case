import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="py-4 lg:col-span-6 flex justify-center items-center space-x-3.5">
      <span className="text-white">Powered By</span>{" "}
      <Link href="/" className="flex space-x-5 justify-start items-start">
        <Image
          src="/assets/img/forwardin-logo-white.svg"
          alt="logo"
          width={400}
          height={400}
          className="h-auto w-40"
        />
      </Link>
    </footer>
  );
};

export default FooterSection;
