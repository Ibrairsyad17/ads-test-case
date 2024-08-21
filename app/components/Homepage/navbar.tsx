"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavLinks from "@/app/components/Homepage/nav-links";
import { ChevronDown, Menu } from "lucide-react";

const links = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Demo", href: "/demo" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      window.scrollY > 5 ? setScrolled(true) : setScrolled(false);
    };
  });

  return (
    <div
      className={`lg:max-w-5xl sticky py-3.5 backdrop-blur w-full bg-white/30 top-0 lg:mt-10 flex flex-col lg:flex-row z-50 items-center justify-center lg:justify-between lg:rounded-xl mx-auto shadow px-8 font-semibold ${
        scrolled ? "bg-white/70 shadow-sm" : ""
      }`}
    >
      <div className="w-full mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center space-x-5">
          <Link href="/" className="flex space-x-5 justify-center items-center">
            <Image
              src="/assets/img/forwadin-logo.svg"
              alt="logo"
              width={400}
              height={400}
              className="h-auto w-32"
            />
          </Link>
        </div>
        <NavLinks />
        <Button
          asChild
          className="bg-blue-600 text-white hover:bg-blue-700 lg:inline-flex hidden"
        >
          <Link href={"/login"}>Sign In</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden inline-flex"
          onClick={() => setOpen(!open)}
        >
          <Menu className="h-8 w-auto text-blue-600" />
        </Button>
      </div>
      <nav
        className={`${open ? "flex" : "hidden"} w-full flex-col py-5 transition-all duration-300 ease-in-out lg:hidden animate-nav`}
      >
        <ul className="flex flex-col space-y-3 w-full justify-center items-center text-sm">
          {links.map((link) => (
            <li
              key={link.name}
              className="w-full hover:bg-blue-600 hover:text-white flex justify-center items-center rounded-xl py-3 transition duration-300"
            >
              {link.name === "Features" ? (
                <Link
                  href={link.href}
                  className="flex space-x-2 justify-center items-center"
                >
                  <span>Features</span>{" "}
                  <ChevronDown className="h-4 w-4 font-bold" />
                </Link>
              ) : (
                <Link href={link.href}>{link.name}</Link>
              )}
            </li>
          ))}
          <li
            className="w-full bg-blue-600 text-white flex justify-center items-center rounded-xl py-3 transition duration-300"
            onClick={() => setShow(!show)}
          >
            <Link
              href="#"
              className="flex space-x-2 justify-center items-center"
            >
              <span>Sign In</span> <ChevronDown className="h-4 w-4 font-bold" />
            </Link>
          </li>
          <li
            className={`w-full text-gray-500 hover:bg-gray-200 hover:text-gray-600 justify-center items-center rounded-xl py-3 transition duration-300 ${
              show ? "flex" : "hidden"
            }`}
          >
            <Link
              href="#"
              className="flex space-x-2 justify-center items-center"
            >
              <span>Sign In as Admin</span>
            </Link>
          </li>
          <li
            className={`w-full text-gray-500 hover:bg-gray-200 hover:text-gray-600 justify-center items-center rounded-xl py-3 transition duration-300 ${
              show ? "flex" : "hidden"
            }`}
          >
            <Link
              href="#"
              className="flex space-x-2 justify-center items-center"
            >
              <span>Sign In as Customer Service</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
