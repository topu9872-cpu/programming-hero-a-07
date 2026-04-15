import React from "react";
import { FiPlus } from "react-icons/fi";

const Banner = () => {
  return (
    <div className=" min-h-lg pt-16 text-center ">
      <div className="hero-content ">
        <div className="w-full ">
          <h1 className="text-5xl lg:text-nowrap font-bold">
            Friends to keep close in your life
          </h1>
          <p className="py-6">
            Your personal shelf of meningful connections, Browse, tend and
            nurture the <br /> relationships that matter nost.
          </p>
          <button className="btn bg-[#244d3f] text-white">
            <FiPlus /> Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
