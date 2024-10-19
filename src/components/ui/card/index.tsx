"use client";
import React from "react";
import Image from "next/image";
import { BsHeart } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import "./style.scss";

export const Card = ({
  discount,
  title,
  image,
  current,
  old,
  rate,
}: {
  discount: number;
  title: string;
  image: string;
  current: number;
  old: number;
  rate: number;
}) => {
  return (
    <div className="card">
      <div className="card--header">
        <div className="card--header--wrapper">
          <div className="card--header--wrapper--discount">
            <p className="card--header--wrapper--discount--text">
              -{discount}%
            </p>
          </div>

          <div className="card--header--wrapper--actions">
            <button className="card--header--wrapper--actions--heart">
              <BsHeart />
            </button>
            <button className="card--header--wrapper--actions--eye">
              <GoEye className="eye" />
            </button>
          </div>
        </div>
        <Image width={190} height={180} className="card--header--image" src={image} alt={title} />
        <button className="card--header--add-btn">Add to cart</button>
      </div>
      <div className="card--body">
        <h2 className="card--body--title">{title}</h2>
        <div className="card--body--price">
          <p className="card--body--price--current">${current}</p>
          <p className="card--body--price--old">${old}</p>
        </div>
        <div className="card--body--rate">
          <div className="card--body--rate--icons">
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
              width={20}
              height={20}
                className="card--body--rate--icons--icon"
                src="icons/rate-star.svg"
                alt="rate"
              />
            ))}
          </div>
          <p className="card--body--rate--text">({rate})</p>
        </div>
      </div>
    </div>
  );
};
