import React from "react";
import Image from "next/image";
import TabsOpportunities from "@/app/components/Miscellaneous/tabs-opportunities";

const OpportunitySection = () => {
  return (
    <section className="h-auto lg:h-screen bg-white pb-20" id="opportunity">
      <div className="lg:max-w-7xl grid lg:grid-cols-10 mx-auto justify-items-center place-items-center h-full pt-20 px-8 lg:px-0">
        <div className="lg:col-span-1 hidden lg:block lg:order-1"></div>
        <div className="grid lg:grid-cols-7 gap-4 lg:order-2 order-1 lg:col-span-9">
          <div className="lg:col-span-7 flex justify-start items-start">
            <h1 className="text-3xl lg:text-4xl text-center text-blue-500 font-semibold lg:w-10/12 px-3">
              {`"One Step Closer to More Effective and Connected Communication!"`}
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center lg:items-center space-y-6 order-2 justify-self-start">
            <TabsOpportunities />
          </div>
          <Image
            src="/assets/img/lp-5.svg"
            alt="feature-1"
            width={1000}
            height={1000}
            className="w-auto h-72 lg:col-span-2 justify-self-center lg:justify-self-start order-1 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
