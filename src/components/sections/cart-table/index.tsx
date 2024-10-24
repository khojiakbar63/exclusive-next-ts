"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import "./style.scss";

export const CartTable = () => {
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="!flex !items-center !gap-x-3">
            <img className="w-[50px]" src="/images/tv.svg" alt="tv" />
            <p>LCD Monitor</p>
          </td>
          <td>$650</td>
          <td>
            <div
              className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700"
              data-hs-input-number=""
            >
              <div className="flex items-center gap-x-1.5">
                <button
                  onClick={decrement}
                  type="button"
                  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  tabIndex={-1}
                  aria-label="Decrease"
                  data-hs-input-number-decrement=""
                  disabled={quantity <= 0} // Disable button if quantity <= 0
                >
                  <FiMinus />
                </button>
                <input
                  className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
                  style={{ MozAppearance: "textfield" }}
                  type="number"
                  aria-roledescription="Number field"
                  value={quantity} // Bind the value to state
                  readOnly // Prevent manual input
                  data-hs-input-number-input=""
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  type="button"
                  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  tabIndex={-1}
                  aria-label="Increase"
                  data-hs-input-number-increment=""
                >
                  <FiPlus />
                </button>
              </div>
            </div>
          </td>
          <td>${650 * quantity}</td>
        </tr>
      </tbody>
    </table>
  );
};
