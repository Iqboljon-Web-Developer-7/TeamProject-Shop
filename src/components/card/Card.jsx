import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { addCart } from "@/redux/cartSlice";

const Card = ({ data, error, isLoading, header }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = data?.length || 0;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  const wishlist = useSelector((state) => state.wishlist?.value || []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const slicedData = data?.slice(startIndex, startIndex + itemsPerPage);

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);

  return (
    <div className="flex flex-col p-4">
      <div className="container mx-auto my-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {header}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto container gap-6 mb-6">
        {slicedData?.map((product) => (
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
              <button
                onClick={() => dispatch(toggleWishlist(product))}
                className={`absolute top-2 right-2 transition ${
                  isInWishlist(product.id) ? "text-red-500" : "text-gray-600"
                } hover:text-red-500`}
              >
                {isInWishlist(product.id) ? (
                  <AiFillHeart size={24} />
                ) : (
                  <AiOutlineHeart size={24} />
                )}
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
                  {product.oldPrice ? (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ${product.oldPrice}
                    </span>
                  ) : null}
                </div>
                {product.oldPrice ? (
                  <span className="text-sm text-red-500 ml-2">
                    -
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100
                    )}
                    %
                  </span>
                ) : null}
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => dispatch(addCart({ ...product, quantity: 1 }))}
                  className="flex items-center text-gray-700 hover:text-blue-500 transition"
                >
                  <AiOutlineShoppingCart size={20} className="mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-auto">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={totalItems}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Card;
