import React from "react";
import Image from "next/image";

const BroadcastSection = () => {
  return (
    <section className="h-auto lg:h-screen bg-[#ECF2FA] pb-10" id="broadcast">
      <div className="lg:max-w-7xl grid lg:grid-cols-10 mx-auto justify-items-center place-items-center h-full pt-20 px-8 lg:px-0">
        <div className="lg:col-span-1 hidden lg:block lg:order-1"></div>
        <div className="grid lg:grid-cols-6 gap-4 lg:order-2 order-1 lg:col-span-9">
          <div className="lg:col-span-2 flex flex-col justify-center lg:items-center space-y-8 order-2 justify-self-start">
            <h1 className="text-3xl lg:text-5xl font-bold ">
              Reach Further with Ease
            </h1>
            <p className="text-sm text-gray-900 font-semibold">
              Fowardin memberikan Anda akses cepat untuk memperluas jangkauan
              komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
              pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens
              Anda tidak pernah semudah ini.
            </p>
          </div>
          <Image
            src="/assets/img/lp-2.svg"
            alt="feature-1"
            width={1000}
            height={1000}
            className="w-auto h-72 lg:h-[30rem] lg:col-span-3 justify-self-center lg:justify-self-start order-1 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BroadcastSection;
