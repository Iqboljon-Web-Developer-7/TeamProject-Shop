import React, { useState } from "react";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "@/redux/api/product-api";
import { Button } from "antd";
import { CircularProgress, TextField } from "@mui/material";
import UniModal from "@/components/modal/Modal";
import UniForm from "@/components/form/Form";

const ManageProducts = () => {
  const { data, isLoading, error } = useGetProductQuery();
  const [deleteProduct, { isLoading: deleteLoading }] =
    useDeleteProductMutation();

  if (isLoading)
    return (
      <div className="flex flex-wrap justify-center mx-auto container gap-6 mb-6">
        {new Array(10).fill().map((_, idx) => (
          <div
            key={idx}
            role="status"
            className="max-w-sm flex-grow p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4">
              <svg
                className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
    );
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div className="flex flex-col  p-4">
      <h1 className="text-4xl md:text-5xl my-4 font-bold text-gray-900 mb-4">
        Popular Products
      </h1>

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
            <div className="flex items-center justify-between p-3 pb-0">
              <h3 className="text-md font-semibold text-gray-800">
                {product.title}
              </h3>
              <h3>${product.price}</h3>
            </div>
            <div className="btns p-4 flex justify-between">
              <Button onClick={() => deleteProduct(product.id)}>
                {deleteLoading ? (
                  <CircularProgress
                    style={{ width: "1.22rem", height: "1.22rem" }}
                  />
                ) : (
                  "Delete"
                )}
              </Button>
              <UniModal
                title={"Edit"}
                className={
                  "bg-sky-transparent flex items-center justify-center flex-col gap-4"
                }
                product={product}
              ></UniModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
