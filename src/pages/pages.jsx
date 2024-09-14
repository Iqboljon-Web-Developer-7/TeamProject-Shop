import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import Not from "@/components/not-found/Not";
import Admin from "./admin/Admin";

const Pages = () => {
  return (
    <section className="font-Montserrat">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Not />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </section>
  );
};

export default Pages;
