import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosStar } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Comments() {
  return (
    <div className="wrapper py-10 max-w-[95rem] dark:text-black">
      <div className="info my-4">
        <h2 className="text-5xl font-extrabold">OUR HAPPY CUSTOMERS</h2>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper hidden"
      >
        <SwiperSlide className="border flex flex-col gap-3 p-5 rounded-lg item-1">
          <div className="stars flex gap-2 text-yellow-500 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <h3 className="flex items-center gap-2 text-xl">
            Sarah M. <FaCheckCircle />
          </h3>
          <p className="text-sm">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </SwiperSlide>
        <SwiperSlide className="border flex flex-col gap-3 p-5 rounded-lg item-2">
          <div className="stars flex gap-2 text-yellow-500 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <h3 className="flex items-center gap-2 text-xl">
            John D. <FaCheckCircle />
          </h3>
          <p className="text-sm">
            "Great shopping experience! The delivery was quick, and the products
            were of top quality. Will definitely shop again."
          </p>
        </SwiperSlide>
        <SwiperSlide className="border flex flex-col gap-3 p-5 rounded-lg item-3">
          <div className="stars flex gap-2 text-yellow-500 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <h3 className="flex items-center gap-2 text-xl">
            Emily R. <FaCheckCircle />
          </h3>
          <p className="text-sm">
            "Shop.co is my go-to for trendy and affordable fashion. I always get
            compliments when I wear their outfits!"
          </p>
        </SwiperSlide>
        <SwiperSlide className="border flex flex-col gap-3 p-5 rounded-lg item-4">
          <div className="stars flex gap-2 text-yellow-500 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <h3 className="flex items-center gap-2 text-xl">
            Mark L. <FaCheckCircle />
          </h3>
          <p className="text-sm">
            "The customer service was exceptional. They resolved my issue with
            ease and professionalism. Highly recommended!"
          </p>
        </SwiperSlide>
        <SwiperSlide className="border flex flex-col gap-3 p-5 rounded-lg item-5">
          <div className="stars flex gap-2 text-yellow-500 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <h3 className="flex items-center gap-2 text-xl">
            Lisa T. <FaCheckCircle />
          </h3>
          <p className="text-sm">
            "I love the variety Shop.co offers. They have everything from basics
            to statement pieces. Will definitely recommend to my friends."
          </p>
        </SwiperSlide>
        <SwiperSlide className="border flex flex-col gap-3 p-5 rounded-lg item-6">
          <div className="stars flex gap-2 text-yellow-500 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <h3 className="flex items-center gap-2 text-xl">
            Michael B. <FaCheckCircle />
          </h3>
          <p className="text-sm">
            "Quality clothing at a great price! I’ve been shopping here for
            months and have never been disappointed."
          </p>
        </SwiperSlide>
        <SwiperSlide className="border flex flex-col gap-3 p-5 rounded-lg item-7">
          <div className="stars flex gap-2 text-yellow-500 text-xl">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <h3 className="flex items-center gap-2 text-xl">
            Jessica H. <FaCheckCircle />
          </h3>
          <p className="text-sm">
            "Amazing selection of styles, and the sizes are perfect. I feel
            confident every time I wear something from Shop.co."
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
