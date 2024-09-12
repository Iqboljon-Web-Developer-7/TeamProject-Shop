import Brands from "@/components/brands/Brands";
import Card from "@/components/card/Card";
import Comments from "@/components/comments/Comments";
import DressStyles from "@/components/dressStyles/DressStyles";
import Hero from "@/components/hero/Hero";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Card />
      <DressStyles />
      <Comments />
    </>
  );
};

export default Home;
