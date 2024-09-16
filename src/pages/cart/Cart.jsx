import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, decreaseQuantity } from "@/redux/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.value);
  console.log(items);

  if (!items) {
    return <p>Loading...</p>;
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Ваша корзина</h1>
        {items.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4 mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Размер: {item.size}</p>
                  <p className="text-sm text-gray-600">Цвет: {item.color}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-4">
                  ${item.price}
                </span>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 text-lg font-semibold bg-gray-200 rounded-l"
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-lg font-semibold bg-gray-200 rounded-r"
                    onClick={() => dispatch(addCart({ ...item, quantity: 1 }))}
                  >
                    +
                  </button>
                </div>
                <button
                  className="ml-4 text-red-500"
                  onClick={() => dispatch(removeCart({ id: item.id }))}
                >
                  🗑
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="w-full md:w-1/3">
        <div className="p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">Итог заказа</h2>
          <div className="flex justify-between mb-2">
            <span>Подитог</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Скидка (-20%)</span>
            <span className="text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Стоимость доставки</span>
            <span>${deliveryFee}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Итого</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Введите промокод"
            className="w-full p-2 border rounded-md mb-2"
          />
          <button className="w-full bg-black text-white py-2 rounded-md">
            Применить
          </button>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-md mt-4">
          Перейти к оплате
        </button>
      </div>
    </div>
  );
};

export default Cart;
