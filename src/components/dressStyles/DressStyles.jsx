import React from "react";

import img1 from "@/assets/dressStyle/grid-1.png";
import img2 from "@/assets/dressStyle/grid-2.png";
import img3 from "@/assets/dressStyle/grid-3.png";
import img4 from "@/assets/dressStyle/grid-4.png";

const DressStyles = () => {
  return (
    <section className="mx-4 mt-20 py-[4.375rem] bg-[#F0F0F0] rounded-3xl">
      <div className="wrapper max-w-[45rem] lg:max-w-[90rem]">
        <h2 className="text-4xl text-center font-bold">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid lg:grid-cols-5 gap-4 mt-16">
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[18rem] col-span-3 lg:col-span-2"
          >
            <h3 className="text-4xl font-bold">Casual</h3>
          </div>
          <div
            style={{ backgroundImage: `url(${img2})` }}
            className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[18rem] col-span-3"
          >
            <h3 className="text-4xl font-bold">Formal</h3>
          </div>
          <div
            style={{ backgroundImage: `url(${img3})` }}
            className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[18rem] col-span-3"
          >
            <h3 className="text-4xl font-bold">Party</h3>
          </div>
          <div
            style={{ backgroundImage: `url(${img4})` }}
            className="bg-no-repeat bg-right-top py-7 px-9 rounded-xl bg-white min-h-[18rem]  col-span-3 lg:col-span-2"
          >
            <h3 className="text-4xl font-bold">Gym</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyles;
