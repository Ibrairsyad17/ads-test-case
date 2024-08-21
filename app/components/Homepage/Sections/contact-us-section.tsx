import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactUsSection = () => {
  return (
    <div
      className="h-screen lg:col-span-6 w-full flex justify-center items-center"
      id="contact-us"
    >
      <div className="grid lg:grid-cols-6 gap-6">
        <div className="lg:col-span-3 flex flex-col space-y-6">
          <Link href="/" className="flex space-x-5 justify-start items-start">
            <Image
              src="/assets/img/forwardin-logo-white.svg"
              alt="logo"
              width={400}
              height={400}
              className="h-auto w-52"
            />
          </Link>
          <p className="text-white text-xs">
            Fowardin is your ultimate communication management solution. We
            empower businesses of all sizes with efficient message forwarding,
            streamlined contact management, and powerful campaign scheduling.
            Our mission is to simplify your communication processes, helping you
            engage with your audience effectively and effortlessly. Join us in
            transforming your communication game today!
          </p>
        </div>
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <h1 className="text-white text-bold">Contact Us</h1>
          <p className="text-white text-xs">
            Join our mailing list to receive updates, exclusive content, and
            early access to upcoming events. By signing up, you become an
            integral part of our community, spreading the message of compassion
            and making a difference.
          </p>
          <p className="text-white text-xs">
            Email: info@fowarin <br />
            Phone: +1 (123) 456-7890
          </p>
        </div>
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <h1 className="text-white text-bold">Lets Talk</h1>
          <p className="text-white text-xs">
            <Link href="facebook.com">Facebook</Link> <br />
            <Link href="instagram.com">Instagram</Link> <br />
            <Link href="x.com">Twitter</Link> <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
