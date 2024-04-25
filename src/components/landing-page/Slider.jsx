import React, { useState } from "react";
import {
  BlkLine,
  SlideImgFour,
  SlideImgOne,
  SlideImgThree,
  SlideImgTwo,
  Star,
} from "../../assets";

const slides = [
  <div key={1} className="flex flex-col">
    <div className="flex justify-between">
      <div className="  ">
        <img src={SlideImgOne} alt="slide" className="relative" />
        <div
          className="relative px-5 py-3 rounded-lg left-12 bottom-[130px]  bg-white w-[348px] "
          style={{ boxShadow: " 1px 1px 52px 5px rgba(192,192,253,0.75);" }}
        >
          <p className=" text-xs ">
            Thank you so much for your help. It's exactly what I've been looking
            for. You won't regret it. It really saves me time and effort.
            Skilline is exactly what our business has been lacking."
          </p>
          <div className="flex justify-between p-4 rounded-lg">
            <h1 className=" font-semibold">Roseline Olasoji</h1>
            <div className="flex flex-col">
              <img src={Star} alt="Ratings" />
              <p className="text-xs font-semibold">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={SlideImgTwo} alt="slide" />
        <div
          className="relative px-5 py-3 rounded-lg left-12 bottom-[130px]  bg-white w-[348px] "
          style={{ boxShadow: " 1px 1px 52px 5px rgba(192,192,253,0.75);" }}
        >
          <p className=" text-xs ">
            Thank you so much for your help. It's exactly what I've been looking
            for. You won't regret it. It really saves me time and effort.
            Skilline is exactly what our business has been lacking."
          </p>
          <div className="flex justify-between p-4 rounded-lg">
            <h1 className=" font-semibold">Oreoluwa Ajayi</h1>
            <div className="flex flex-col">
              <img src={Star} alt="Ratings" />
              <p className="text-xs font-semibold">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between">
      <div>
        <img src={SlideImgThree} alt="Avatar" />
        <div className="relative px-5 py-3 rounded-lg left-12 bottom-[130px]  bg-white w-[348px] ">
          <p className=" text-xs ">
            Thank you so much for your help. It's exactly what I've been looking
            for. You won't regret it. It really saves me time and effort.
            Skilline is exactly what our business has been lacking."
          </p>
          <div className="flex justify-between p-4 rounded-lg">
            <h1 className=" font-semibold">Roseline Olasoji</h1>
            <div className="flex flex-col">
              <img src={Star} alt="Ratings" />
              <p className="text-xs font-semibold">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={SlideImgFour} alt="Avatar" />
        <div
          className="relative px-5 py-3 rounded-lg left-12 bottom-[100px]  bg-white w-[348px] shadow-lg "
          s
          style={{
            boxShadow: "box-shadow: 1px 1px 52px 5px rgba(192,192,253,0.75);",
          }}
        >
          <p className=" text-xs ">
            Thank you so much for your help. It's exactly what I've been looking
            for. You won't regret it. It really saves me time and effort.
            Skilline is exactly what our business has been lacking."
          </p>
          <div className="flex justify-between p-4 rounded-lg">
            <h1 className=" font-semibold">Roseline Olasoji</h1>
            <div className="flex flex-col">
              <img src={Star} alt="Ratings" />
              <p className="text-xs font-semibold">12 reviews at Yelp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,
  <div key={2}>Slide 2</div>,
  <div key={3}>Slide 3</div>,
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hidden lgss:flex flex-col items-center justify-center w-full mt-10">
      <div className="flex mt-40 flex-col mb-10 items-center justify-center w-full">
        <div className="flex justify-center items-center">
          <img src={BlkLine} alt="black line" />
          <h1 className="mx-4 ">Read Our Student Comments</h1>
          <img src={BlkLine} alt="black line" />
        </div>
        <p className="font-semibold text-3xl">Our Reviews</p>
      </div>
      <div className="w-4/5">{slides[currentSlide]}</div>
    </div>
  );
};

export default Slider;
