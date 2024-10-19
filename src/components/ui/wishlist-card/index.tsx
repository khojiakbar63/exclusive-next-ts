"use client";
import React from "react";
import Image from "next/image";
import { TbHttpDelete } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./style.scss";

export const WishlistCard = ({
  discount,
  title,
  image,
  price,
  sale,
}: {
  discount: number | undefined;
  title: string;
  image: string;
  price: number;
  sale: string | undefined;
}) => {
  return (
    <div className="card">
      <div className="card--header">
        <div className="card--header--wrapper">
          {discount ? (
            <div className="card--header--wrapper--discount">
              <p className="card--header--wrapper--discount--text">
                -{discount}%
              </p>
            </div>
          ) : (
            ""
          )}

          <div className="card--header--wrapper--actions">
            <button className="card--header--wrapper--actions--del">
              <RiDeleteBin6Line className="del" />
            </button>
          </div>
        </div>
        <Image
          width={190}
          height={180}
          className="card--header--image"
          src={image}
          alt={title}
        />
        <button className="card--header--add-btn">
          <HiOutlineShoppingCart fontSize={24}/>
          <p>Add to cart</p>
        </button>
      </div>
      <div className="card--body">
        <h2 className="card--body--title">{title}</h2>
        <div className="card--body--price">
          <p className="card--body--price--current">${price}</p>
          {sale ? (
            <p className="card--body--price--old">${sale ? sale : ""}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
