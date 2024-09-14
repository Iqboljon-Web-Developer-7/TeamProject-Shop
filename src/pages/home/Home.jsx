import Brands from "@/components/brands/Brands";
import Card from "@/components/card/Card";
import Comments from "@/components/comments/Comments";
import DressStyles from "@/components/dressStyles/DressStyles";
import Hero from "@/components/hero/Hero";
import { useGetProductQuery } from "@/redux/api/product-api";
import React from "react";

const Home = () => {
  const { data, error, isLoading } = useGetProductQuery({ limit: 10 });

  return (
    <>
      <Hero />
      <Brands />
      <Card data={data} error={error} isLoading={isLoading} />
      <DressStyles />
      <Comments />
    </>
  );
};

export default Home;
