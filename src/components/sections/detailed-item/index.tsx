"use client";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Row, Space } from "antd";
import { BsHeart } from "react-icons/bs";
import { MyButton } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiRecycle } from "react-icons/gi";

import "./style.scss";
import Image from "next/image";

export const DetailedItem = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="detailed_item">
      <div className="detailed_item--left">
        <div className="detailed_item--left--images">
          <div className="detailed_item--left--images--img">
            <Image
              width={121}
              height={106}
              src="/images/detail-1.svg"
              alt="img"
            />
          </div>
          <div className="detailed_item--left--images--img">
            <Image
              width={121}
              height={106}
              src="/images/detail-2.svg"
              alt="img"
            />
          </div>
          <div className="detailed_item--left--images--img">
            <Image
              width={121}
              height={106}
              src="/images/detail-3.svg"
              alt="img"
            />
          </div>
          <div className="detailed_item--left--images--img">
            <Image
              width={121}
              height={106}
              src="/images/detail-4.svg"
              alt="img"
            />
          </div>
        </div>

        <div className="detailed_item--left--main">
          <Image
            width={446}
            height={315}
            src="/images/detail-0.svg"
            alt="img"
          />
        </div>
      </div>

      <div className="detailed_item--right">
        <h2 className="detailed_item--title">Havic HV G-92 Gamepad</h2>

        <div className="detailed_item--rate">
          <div className="detailed_item--rate--stars">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Image
                width={20}
                height={20}
                style={{ width: "20px" }}
                key={index}
                src="/icons/rate-star.svg"
                alt="star"
              />
            ))}
          </div>
          <p className="detailed_item--rate--reviews">(150 Reviews)</p>
          <p className="detailed_item--rate--sold">In Stock</p>
        </div>
        <p className="detailed_item--price">$192.00</p>
        <p className="detailed_item--desc">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>

        <div className="detailed_item--line"></div>

        <div className="detailed_item--colors">
          <h3 className="detailed_item--colors--title">Colours:</h3>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}></Radio>
            <Radio value={2}></Radio>
          </Radio.Group>
        </div>

        <div className="detailed_item--size">
          <h3 className="detailed_item--size--title">Size:</h3>
          <Row justify="center">
            <Radio.Group defaultValue="xs" buttonStyle="solid">
              <Space className="detailed_item--size--buttons" size="middle">
                <Radio.Button
                  className="detailed_item--size--button"
                  value="xs"
                >
                  XS
                </Radio.Button>
                <Radio.Button className="detailed_item--size--button" value="s">
                  S
                </Radio.Button>
                <Radio.Button className="detailed_item--size--button" value="m">
                  M
                </Radio.Button>
                <Radio.Button className="detailed_item--size--button" value="l">
                  L
                </Radio.Button>
                <Radio.Button
                  className="detailed_item--size--button"
                  value="xl"
                >
                  XL
                </Radio.Button>
              </Space>
            </Radio.Group>
          </Row>
        </div>

        <div className="detailed_item--actions">
          <div className="detailed_item--actions--left">
            <div className="detailed_item--actions--counter">
              <div className="flex items-center gap-x-1.5">
                <button
                  onClick={decrement}
                  type="button"
                  className="minus_btn"
                  tabIndex={-1}
                  aria-label="Decrease"
                  data-hs-input-number-decrement=""
                  disabled={quantity <= 0} // Disable button if quantity <= 0
                >
                  <FiMinus />
                </button>
                <input
                  className="detailed_item--actions--counter--input"
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
                  className="plus_btn"
                  tabIndex={-1}
                  aria-label="Increase"
                  data-hs-input-number-increment=""
                >
                  <FiPlus />
                </button>
              </div>
            </div>
            <MyButton className="buy_now_btn">Buy Now</MyButton>
          </div>
          <button className="heart_btn">
            <BsHeart />
          </button>
        </div>

        <div className="detailed_item--delivery">
          <div className="detailed_item--delivery--item">
            <TbTruckDelivery fontSize={40} />
            <div>
              <h4 className="detailed_item--delivery--item--title">
                Free Delivery
              </h4>
              <a className="detailed_item--delivery--item--link" href="#">
                Enter your postal code for Delivery Availability
              </a>
            </div>
          </div>
          <div className="detailed_item--delivery--line"></div>
          <div className="detailed_item--delivery--item">
            <GiRecycle fontSize={40} />
            <div>
              <h4 className="detailed_item--delivery--item--title">
                Return Delivery
              </h4>
              <p className="detailed_item--delivery--item--text">
                Free 30 Days Delivery Returns.{" "}
                <a className="detailed_item--delivery--item--link" href="#">
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
