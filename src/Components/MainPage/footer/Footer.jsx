import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <footer className="footer footer-horizontal footer-center bg-[#244d3f] text-primary-content p-10">
        <aside className="space-y-2">
          <h1 className="text-5xl text-white font-bold">Keepkeeper</h1>
          <p className="lg:text-nowrap text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend,and
            nurture the relationships that matter most
          </p>
          <p className="text-xl font-semibold text-white">Social Links</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="text-2xl text-black bg-white p-2 rounded-full">
              <TbBrandInstagramFilled />
            </a>
            <a className="text-2xl text-black bg-white p-2 rounded-full">
              <FaSquareFacebook />
            </a>
            <a className="text-2xl text-black bg-white p-2 rounded-full">
              <RiTwitterXFill />
            </a >
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal px-30 border-t border-gray-600 bg-[#244d3f] text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p className="text-gray-300"> © {new Date().getFullYear()} - All right reserved .</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a className="text-gray-300">Privacy Policy</a>
          <a className="text-gray-300">Terms of Service</a>
          <a className="text-gray-300">Cookies</a>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
