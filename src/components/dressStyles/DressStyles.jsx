import React from "react";

import img1 from "@/assets/dressStyle/grid-1.png";
import img2 from "@/assets/dressStyle/grid-2.png";
import img3 from "@/assets/dressStyle/grid-3.png";
import img4 from "@/assets/dressStyle/grid-4.png";

const DressStyles = () => {
  return (
    <section className="wrapper m-4 py-[4.375rem] bg-[#F0F0F0] rounded-3xl">
      <h2 className="text-4xl text-center font-bold">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-[3fr_6fr]">
        <div>
          <h3>Casual</h3>
        </div>
      </div>
    </section>
  );
};

export default DressStyles;
