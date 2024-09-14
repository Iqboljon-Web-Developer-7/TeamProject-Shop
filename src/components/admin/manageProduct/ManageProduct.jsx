import React, { useState } from "react";
import { useGetProductQuery } from "@/redux/api/product-api";
import { Button } from "antd";

const ManageProducts = () => {
  const { data, isLoading, error } = useGetProductQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = data?.length || 0;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div className="flex flex-col  p-4">
      <div className="container mx-auto my-8 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Popular Products
        </h1>
      </div>

      <div className="flex flex-wrap justify-center mx-auto container gap-6 mb-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-white max-w-96 flex-grow rounded-lg shadow-md overflow-hidden duration-300 transform hover:-translate-y-1 hover:shadow-xl w-72"
          >
            <div className="relative">
              <img
                src={product.url[0]}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="btns p-4 flex justify-between">
              <Button>Delete</Button>
              <Button>Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
