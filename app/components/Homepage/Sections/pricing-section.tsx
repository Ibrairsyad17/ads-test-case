import React from "react";
import PricingTable from "@/app/components/Miscellaneous/pricing-table";

const PricingSection = () => {
  return (
    <section className="h-auto bg-white pb-20" id="pricing">
      <div className="lg:max-w-7xl grid lg:grid-cols-10 mx-auto justify-items-center place-items-center h-full pt-20 px-8 lg:px-0">
        <div className="lg:col-span-1 hidden lg:block lg:order-1"></div>
        <div className="grid lg:grid-cols-7 gap-4 lg:order-2 order-1 lg:col-span-9 place-content-start">
          <PricingTable />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
