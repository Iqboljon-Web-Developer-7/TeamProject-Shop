import { useGetProductQuery } from "@/redux/api/category-api";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Card = () => {
  const { data, error, isLoading } = useGetProductQuery({ limit: 10 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto container gap-6 p-4">
      {data?.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl w-72"
        >
          <div className="relative">
            <img
              src={product.url[0]}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition">
              <AiOutlineHeart size={24} />
            </button>
          </div>
          <div className="p-3">
            <h3 className="text-md font-semibold text-gray-800">
              {product.title}
            </h3>
            <div className="flex items-center">
              <div className="text-yellow-500 flex items-center">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                {product.rating}/5
              </span>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-lg font-bold text-gray-900">
                ${product.price}
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
              {product.oldPrice && (
                <span className="text-sm text-red-500 ml-2">
                  -
                  {Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) *
                      100
                  )}
                  %
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="flex items-center text-gray-700 hover:text-blue-500 transition">
                <AiOutlineShoppingCart size={20} className="mr-1" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
