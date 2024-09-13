import React from "react";
import brands1 from "../../assets/brands1.svg";
import brands2 from "../../assets/brands2.svg";
import brands3 from "../../assets/brands3.png";
import brands4 from "../../assets/brands4.svg";
import brands5 from "../../assets/brands5.svg";

const Brands = () => {
  return (
    <div className="bg-black py-8 mt-1 overflow-hidden">
      <div className="relative flex items-center">
        <div className="absolute inset-0 flex animate-scroll space-x-4">
          <div className="flex items-center space-x-4 gap-10 min-w-max">
            <img
              src={brands1}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 1"
            />
            <img
              src={brands2}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 2"
            />
            <img
              src={brands3}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 3"
            />
            <img
              src={brands4}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 4"
            />
            <img
              src={brands5}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 5"
            />
          </div>
          <div className="flex items-center space-x-4 min-w-max">
            <img
              src={brands1}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 1"
            />
            <img
              src={brands2}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 2"
            />
            <img
              src={brands3}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 3"
            />
            <img
              src={brands4}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 4"
            />
            <img
              src={brands5}
              className="w-24 md:w-32 lg:w-40 h-auto"
              alt="Brand 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
