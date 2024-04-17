import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BlkLine, Star, smallGirl } from "../../../assets";

const NewsLetter = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="flex justify-center items-center font-manrope pb-14">
        <div className="flex flex-col md:flex-row md:w-[70%] w-full m-auto items-center justify-center gap-5 md:gap-0">
          <div className="flex flex-col relative left-10 md:left-0">
            <img src={smallGirl} alt="" className="w-[270px] md:w-[unset]" />
            <div className="flex flex-col gap-5 bg-white rounded-xl p-2 relative bottom-[7em] -mb-[5em] right-[22.5%] ">
              <p className="font-bold text-[28px]">We’ve got news</p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[24px]">See Now</p>
                <div className="flex flex-col items-center">
                  <img src={Star} alt="" />
                  <p className="font-semibold text-[10px]">
                    Information at once
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos='fade-left' className="flex flex-col items-center gap-5 md:gap-2 ">
            <div className="flex items-center gap-2">
              <img src={BlkLine} alt="" />
              <p className="font-normal text-[20px] opacity-[70%]">
                Get Answers Now
              </p>
              <img src={BlkLine} alt="" />
            </div>
            <p className="font-semibold text-[24px] lgss:text-[36px] text-[#1A2434]">
              Subscribe to our Newsletter
            </p>
            <div className="flex font-normal text-[20px] justify-cente text-center w-[90%] md:w-[52%]">
              <p>
                Join the world largest online learning platform. The the first
                to hear the news.
              </p>
            </div>
            <form className="flex flex-col w-[70%] m-auto gap-6 items-center md:items-start py-4">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="flex px-2 md:rounded-2xl rounded-full w-full py-3 outline-none bg-white border-[1px] shadow-2xl"
              />
              <button
                type="submit"
                className="flex justify-center items-center text-white bg-primary rounded-full px-5 py-2 relative  -mb-14 md:bottom-0 left-5 md:left-0"
              >
                Explore our space
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
