import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import Not from "@/components/not-found/Not";
import Admin from "./admin/Admin";
import CreateProduct from "@/components/admin/createProduct/CreateProduct";
import ManageProducts from "@/components/admin/manageProduct/ManageProduct";
import CreateCategory from "@/components/admin/createCategory/CreateCategory";
import ManageCategory from "@/components/admin/manageCategory/ManageCategory";

const Pages = () => {
  return (
    <section className="font-Montserrat">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Not />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="createProducts" element={<CreateProduct />} />
          <Route path="manageProducts" element={<ManageProducts />} />
          <Route path="createCategories" element={<CreateCategory />} />
          <Route path="manageCategories" element={<ManageCategory />} />
        </Route>
      </Routes>
    </section>
  );
};

export default Pages;
