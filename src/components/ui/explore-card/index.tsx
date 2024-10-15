"use client";
import React from "react";
import { BsHeart } from "react-icons/bs";
import type { RadioChangeEvent } from "antd";
import { GoEye } from "react-icons/go";
import "./style.scss";

const onChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};

export const ExploreCard = ({
  title,
  image,
  price,
  rate, 
  badge,
  colors,
}: {
  title: string;
  image: string;
  price: number;
  rate: number;
  badge: string;
  colors: string;
}) => {
  return (
    <div className="card">
      <div className="card--header">
        <div className="card--header--wrapper">
          {badge ? (
            <div className="card--header--wrapper--badge">
              <p className="card--header--wrapper--badge--text">{badge}</p>
            </div>
          ) : null}

          <div className="card--header--wrapper--actions">
            <button className="card--header--wrapper--actions--heart">
              <BsHeart />
            </button>
            <button className="card--header--wrapper--actions--eye">
              <GoEye className="eye" />
            </button>
          </div>
        </div>
        <img className="card--header--image" src={image} alt={title} />
        <button className="card--header--add-btn">Add to cart</button>
      </div>
      <div className="card--body">
        <h2 className="card--body--title">{title}</h2>
        <div className="card--body--price">
          <p className="card--body--price--current">${price}</p>
          <div className="card--body--rate">
            <div className="card--body--rate--icons">
              {[1, 2, 3, 4, 5].map((item) => (
                <img
                  className="card--body--rate--icons--icon"
                  src="icons/rate-star.svg"
                  alt="rate"
                />
              ))}
            </div>
            <p className="card--body--rate--text">({rate})</p>
          </div>
        </div>
       {
       colors ?  <img src={colors} alt="colors" /> : null}
      </div>
    </div>
  );
};
 