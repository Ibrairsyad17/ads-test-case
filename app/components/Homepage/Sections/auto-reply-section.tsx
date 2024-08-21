import React from "react";
import Image from "next/image";

const AutoReplySection = () => {
  return (
    <section className="h-auto lg:h-screen bg-[#ECF2FA] pb-10" id="auto-reply">
      <div className="lg:max-w-7xl grid lg:grid-cols-10 mx-auto justify-items-center place-items-center h-full pt-20 px-8 lg:px-0">
        <div className="lg:col-span-1 hidden lg:block lg:order-1"></div>
        <div className="grid lg:grid-cols-6 gap-4 lg:order-2 order-1 lg:col-span-9">
          <div className="lg:col-span-2 flex flex-col justify-center lg:items-center space-y-6 order-2 justify-self-start">
            <h1 className="text-3xl lg:text-4xl font-bold ">
              Respond Faster with the Convenience of Auto Reply
            </h1>
            <p className="text-xs text-gray-900 font-semibold">
              Fowardin mempermudah Anda untuk memberikan respon cepat kepada
              pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto
              Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon
              otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat
              dengan Fowardin.
            </p>
          </div>
          <Image
            src="/assets/img/lp-4.svg"
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

export default AutoReplySection;
