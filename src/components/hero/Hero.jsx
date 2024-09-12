import React from "react";
import "./Hero.scss";
import rasm from "../../assets/hero.jpg";
const Hero = () => {
  return (
    <div className="hero bg-[#F2F0F1] flex flex-wrap justify-between pt-20 mt-[-90px] container mx-auto px-5 dark:text-white dark:bg-black">
      <div>
        <p className="hero__title text-5xl w-[420px] font-[900]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>
        <p className="hero__text  mt-4 w-[450px] text-[14px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black text-white px-[50px] py-[10px] text-xl rounded-[60px] mt-5 hero__btn dark:text-black dark:bg-white">
          Shop Now
        </button>

        <div className="flex flex-wrap gap-5 mt-4">
          <div>
            <p className="text-2xl font-[600]">200+</p>
            <p className="text-[14px] font-[400]">International Brands</p>
          </div>

          <div>
            <p className="text-2xl font-[600]">2,000+</p>
            <p className="text-[14px] font-[400]">High-Quality Products</p>
          </div>

          <div>
            <p className="text-2xl font-[600]">30,000+</p>
            <p className="text-[14px] font-[400]">Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="w-[40%] mt-[-80px] ccc">
        <img className="rounded-[30px]" src={rasm} alt="foto" />
      </div>
    </div>
  );
};

export default Hero;
