import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, UserCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavItemOptions = () => {
  return (
    <Accordion type="single" collapsible className="w-full border-none p-0">
      <AccordionItem value="item-1" className="border-none ">
        <AccordionTrigger>
          <Button className="w-full justify-between" variant="ghost">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Contacts
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </AccordionTrigger>
        <AccordionContent>
          <div className="ml-4 mt-2 flex flex-col gap-2">
            <Button className="justify-start" variant="ghost">
              <UserCircle className="mr-2 h-4 w-4" />
              Contacts
            </Button>
            <Button className="justify-start" variant="ghost">
              <Users className="mr-2 h-4 w-4" />
              Groups
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NavItemOptions;
