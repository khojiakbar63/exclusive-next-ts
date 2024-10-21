"use client";
import React, { useState } from "react";
import { Input, Radio } from "antd";
import { MyButton } from "../button";
import "./style.scss";

export const PlaceOrder = () => {
  const [value, setValue] = useState(null); // State to track the selected radio button

  const onChange = (e: any) => {
    setValue(e.target.value); // Update the selected value when the user selects a radio option
  };
  return (
    <div className="place_order">
      <div className="place_order--content">
        <div className="place_order--content--item">
          <div className="place_order--content--item--img">
            <img width={49} src="/images/playstation.svg" alt="playstation" />
            <h4>H1 Gamepad</h4>
          </div>
          <p>$650</p>
        </div>
        <div className="place_order--content--item">
          <div className="place_order--content--item--img">
            <img width={49} src="/images/tv.svg" alt="tv" />
            <h4>LCD Monitor</h4>
          </div>
          <p>$1100</p>
        </div>

        <div className="place_order--content--total">
          <h4 className="place_order--content--total--item">
            <span>Subtotal:</span>
            <span>$1750</span>
          </h4>
          <h4 className="place_order--content--total--item">
            <span>Shipping:</span>
            <span>Free</span>
          </h4>
          <h4 className="place_order--content--total--item">
            <span>Total:</span>
            <span>$1750</span>
          </h4>
        </div>
        <div className="place_order--content--bank">
          <Radio.Group onChange={onChange} value={value}>
            <div className="place_order--content--bank--wrapper">
              <div className="place_order--content--bank--wrapper--item">
                <Radio value="bank" id="payment">
                  Bank
                </Radio>
                <div className="place_order--content--bank--images">
                  <img src="/images/bkash.svg" alt="bank" />
                  <img src="/images/visa.svg" alt="bank" />
                  <img src="/images/mastercard.svg" alt="bank" />
                  <img src="/images/hind.svg" alt="bank" />
                </div>
              </div>

              <div className="place_order--content--bank--wrapper--item">
                <Radio
                  value="cod"
                  id="payment"
                  style={{ backgroundColor: "#fff" }}
                >
                  Cash on Delivery
                </Radio>
              </div>
            </div>
          </Radio.Group>
        </div>
      </div>
      <div className="place_order--actions">
        <div className="!w-[527px] !flex !justify-between !items-center my-8">
          <Input className="place_order--input" placeholder="Coupon Code" />
          <MyButton>Apply Coupon</MyButton>
        </div>
        <MyButton>Place Order</MyButton>
      </div>
    </div>
  );
};
