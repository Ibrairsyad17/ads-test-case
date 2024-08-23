import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronDown,
  MessageSquare,
  UserCircle,
  LayoutGrid,
  Send,
  MessageCircle,
  Megaphone,
  RefreshCcw,
  HeadphonesIcon,
  BarChart2,
  Code,
  Settings,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NavItemOptions from "@/app/components/Dashboard/nav-item-options";

const Sidebar = () => {
  return (
    <div className="fixed top-0 start-0 bottom-0 hidden lg:flex h-screen w-64 flex-col bg-white dark:bg-black">
      <div className="flex h-14 items-center justify-center px-4 pt-3">
        <Link href="/" className="flex space-x-5 justify-center items-center">
          <Image
            src="/assets/img/forwardin-logo-blue.svg"
            alt="logo"
            width={400}
            height={400}
            className="h-auto w-40"
          />
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-4">
          <Button
            className="justify-start bg-blue-600 text-white"
            variant="ghost"
          >
            <LayoutGrid className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button className="justify-start" variant="ghost">
            <UserCircle className="mr-2 h-4 w-4" />
            Device
          </Button>
          <NavItemOptions />
          <div>
            <Button className="w-full justify-between" variant="ghost">
              <div className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message List
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <Button className="justify-start" variant="ghost">
            <Send className="mr-2 h-4 w-4" />
            Messenger
          </Button>
          <Button className="justify-start" variant="ghost">
            <MessageCircle className="mr-2 h-4 w-4" />
            Incoming Chat
          </Button>
          <Button className="justify-start" variant="ghost">
            <MessageCircle className="mr-2 h-4 w-4" />
            Outgoing Chat
          </Button>
          <div className="mt-4 border-t pt-4">
            <h3 className="mb-2 px-2 text-sm font-semibold">Tools</h3>
            <div className="flex flex-col gap-2">
              <Button className="justify-start" variant="ghost">
                <Megaphone className="mr-2 h-4 w-4" />
                Campaign
              </Button>
              <Button className="justify-start" variant="ghost">
                <RefreshCcw className="mr-2 h-4 w-4" />
                Auto Reply
              </Button>
              <Button className="justify-start" variant="ghost">
                <HeadphonesIcon className="mr-2 h-4 w-4" />
                Customer Service
              </Button>
              <Button className="justify-start" variant="ghost">
                <BarChart2 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
              <Button className="justify-start" variant="ghost">
                <Code className="mr-2 h-4 w-4" />
                Forwardin API
              </Button>
            </div>
          </div>
          <div className="mt-4 border-t pt-4">
            <h3 className="mb-2 px-2 text-sm font-semibold">Others</h3>
            <Button className="justify-start" variant="ghost">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;
