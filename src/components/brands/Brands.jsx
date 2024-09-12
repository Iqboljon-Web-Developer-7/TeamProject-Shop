import React from "react";
import "./Brands.scss";
import brands1 from "../../assets/brands1.svg";
import brands2 from "../../assets/brands2.svg";
import brands3 from "../../assets/brands3.png";
import brands4 from "../../assets/brands4.svg";
import brands5 from "../../assets/brands5.svg";

const Brands = () => {
  return (
    <div className="bg-black overflow-hidden dark:border py-5 mt-1">
      <div className="flex w-[200%] animate-scroll">
        <div className="flex justify-around items-center py-8 space-x-8 w-[50%]">
          <img src={brands1} className="w-[200px] h-8" alt="Brand 1" />
          <img src={brands2} className="w-[200px] h-8" alt="Brand 2" />
          <img src={brands3} className="w-[200px] h-8" alt="Brand 3" />
          <img src={brands4} className="w-[200px] h-8" alt="Brand 4" />
          <img src={brands5} className="w-[200px] h-8" alt="Brand 5" />
        </div>
        <div className="flex justify-around items-center space-x-8 w-[50%]">
          <img src={brands1} className="w-[200px] h-8" alt="Brand 1" />
          <img src={brands2} className="w-[200px] h-8" alt="Brand 2" />
          <img src={brands3} className="w-[200px] h-8" alt="Brand 3" />
          <img src={brands4} className="w-[200px] h-8" alt="Brand 4" />
          <img src={brands5} className="w-[200px] h-8" alt="Brand 5" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
