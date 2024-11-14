import React, { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";
import SingleProduct from "../productItem/SingleProduct";

const CartTile = ({ singleCartItem }) => {
  const { RemoveFromCart, AddItemToCart } = useContext(ShoppingCartContext);

  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              className="w-full h-full object-contain"
              src={singleCartItem?.thumbnail}
              alt={singleCartItem?.title}
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-800">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => RemoveFromCart(singleCartItem, true)}
              className="text-sm px-4 py-3 text-white bg-red-400 font-extrabold"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900">
            $
            {singleCartItem?.totalPrice
              ? singleCartItem.totalPrice.toFixed(2)
              : "0.00"}
          </h3>

          <p className="mt-2 mb-3 font-bold text-[16px]">
            Quantity:{singleCartItem?.quantity}
          </p>
          <div className="mt-3">
            <button
              disabled={singleCartItem?.quantity === 1}
              onClick={() => RemoveFromCart(singleCartItem, false)}
              className="disabled:opacity-65 border border-[#000]"
            >
              -
            </button>
            <button
              onClick={() => AddItemToCart(singleCartItem)}
              className="border border-[#000]"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border" />
    </Fragment>
  );
};

export default CartTile;
