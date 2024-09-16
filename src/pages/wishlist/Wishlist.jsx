import Card from "@/components/card/Card";
import Not from "@/components/not-found/Not";
import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist?.value);
  console.log(wishlist.length);
  return (
    <div>
      {wishlist.length > 0 ? (
        <Card data={wishlist} header={"Your Wishlist"} />
      ) : (
        <Not />
      )}
    </div>
  );
};

export default Wishlist;
