import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import FaqAccordion from "@/app/components/Miscellaneous/faq-accordion";
import ContactUsSection from "@/app/components/Homepage/Sections/contact-us-section";
import FooterSection from "@/app/components/Homepage/Sections/footer-section";

const FaqFooterSection = () => {
  return (
    <section
      className="h-auto bg-[url('/assets/img/main-bg-footer.svg')] bg-cover pb-10"
      id="faq"
    >
      <div className="lg:max-w-7xl grid lg:grid-cols-10 mx-auto justify-items-center place-items-center h-full pt-20 px-8 lg:px-0">
        <div className="lg:col-span-1 hidden lg:block lg:order-1"></div>
        <div className="grid lg:grid-cols-7 gap-y-10 lg:order-2 order-1 lg:col-span-9 justify-items-center place-items-center">
          <div className="lg:col-span-6 flex flex-col w-full justify-center items-center space-y-6 h-screen">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl lg:text-4xl text-center text-white font-semibold px-3 pb-16">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="lg:col-span-6 grid grid-cols-12 gap-3 w-full lg:w-8/12">
              <Input type="text" className="col-span-11" />
              <Button size="icon" className="bg-transparent">
                <Search className="text-white h-7 w-7" />
              </Button>
            </div>
            <FaqAccordion />
          </div>

          <ContactUsSection />
          <FooterSection />
        </div>
      </div>
    </section>
  );
};

export default FaqFooterSection;
