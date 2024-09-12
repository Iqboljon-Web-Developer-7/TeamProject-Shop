import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import Not from "@/components/not-found/Not";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        <Route path="*" element={<Not/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
