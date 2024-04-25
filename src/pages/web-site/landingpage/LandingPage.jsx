import React from "react";
import { Link } from "react-router-dom";
import Choose from "../../../components/landing-page/Choose";
import About from "../../../components/landing-page/About";
import Slider from "../../../components/landing-page/Slider";
import Holder from "./Holder";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import FAQs from "./FAQs";

const LandingPage = () => {
  return (
    <div className="landing">
      <Holder />
      <div
        className="flex justify-center items-center flex-col w-full"
        style={{
          background:
            "linear-gradient(0deg, rgba(231,242,255,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Choose />
        <About />
        <Slider />
      </div>
      <FAQs />
      <div
        className=""
        style={{
          background:
            "linear-gradient(0deg, rgba(231,242,255,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
