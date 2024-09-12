import Brands from "@/components/brands/Brands";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import React from "react";

const Home = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Brands />
    </section>
  );
};

export default Home;
