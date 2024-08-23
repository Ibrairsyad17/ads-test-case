import React from "react";
import { Button } from "@/components/ui/button";
import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/dark-mode-button";

const NavbarDashboard = () => {
  return (
    <nav className="w-full flex py-4 justify-between items-center">
      <div className="block"></div>
      <div className="flex items-center space-x-4">
        <Button size="icon" variant="outline" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>
        <ModeToggle />
        <div className="flex items-center space-x-4 bg-white rounded-full ps-6 border dark:bg-black">
          <span className="text-sm py-1.5">Alif Rizki</span>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Button size="icon" variant="outline" className="rounded-full">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
