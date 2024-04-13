import React from "react";
import { facebkIcon, instagramIcon, linkedinIcon, schoolbaseLogo, utubeIcon, xhandleIcon } from "../../../assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly py-10 bg-[#3D5EE1] text-white font-manrope px-5 md:px-0 relative z-10">
        <div className="flex flex-col gap-5 md:w-[25%] w-[unset]">
          <div className="flex items-center gap-2">
            <img src={schoolbaseLogo} alt="" className="w-[50px]" />
            <p className="text-[24px] text-[black] font-work-sans font-extrabold opacity-[50%]">
              SCHOOLBASE
            </p>
          </div>
          <p className="font-semibold leading-8 opacity-[50%]">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-[27px]">Quick links</p>
          <div className="flex flex-col gap-3 opacity-[50%]">
            <p>Why us</p>
            <p>About us</p>
            <p>Testimonials</p>
            <p>Blogs</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-[27px]">Resources</p>
          <div className="flex flex-col gap-3 opacity-[50%]">
            <p>Support</p>
            <p>Privacy policy</p>
            <p>Terms&Conditions</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-[27px]">Social media</p>
          <div className="flex gap-5 items-center">
            <img src={facebkIcon} alt="" />
            <img src={xhandleIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={utubeIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
