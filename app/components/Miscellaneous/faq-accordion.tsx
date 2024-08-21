"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./custom-accordion";

const FaqAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full lg:w-8/12 lg:col-span-6"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Apa itu Forwardin?</AccordionTrigger>
        <AccordionContent>
          <p className="lg:w-[550px] w-[300px]">
            Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp
            yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor
            dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan
            berbagai fitur canggih seperti auto-reply, fitur broadcast,
            manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak
            Google.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Apakah Forwardin Cocok Untuk Saya?</AccordionTrigger>
        <AccordionContent>
          <p className="lg:w-[550px] w-[300px]">
            FowardIn is a powerful communication management tool that simplifies
            message forwarding, enhances contact management, and streamlines
            campaign scheduling for businesses of all sizes.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Apakah Forwardin perlu di-install ke komputer?
        </AccordionTrigger>
        <AccordionContent>
          <p className="lg:w-[550px] w-[300px]">
            FowardIn is a powerful communication management tool that simplifies
            message forwarding, enhances contact management, and streamlines
            campaign scheduling for businesses of all sizes.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
