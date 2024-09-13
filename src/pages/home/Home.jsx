import Brands from "@/components/brands/Brands";
import DressStyles from "@/components/dressStyles/DressStyles";
import Hero from "@/components/hero/Hero";
import { useGetProductQuery } from "@/redux/api/category-api";
import React from "react";

const Home = () => {
  const { data, error, isLoading } = useGetProductQuery({ limit: 10 });

  return (
    <>
      <Hero />
      <Brands />
      <DressStyles />
    </>
  );
};

export default Home;
