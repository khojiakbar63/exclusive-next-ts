"use client";
import React from "react";
import Image from "next/image";
import { TbHttpDelete } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./style.scss";

const BadgeNew = () => {
  return (
    <div className="badge--new">
      <p className="badge--new--text">New</p>
    </div>
  );
};

export const WishlistJustCard = ({
  discount,
  title,
  image,
  price,
  sale,
  badge,
  rate
}: {
  discount: number | undefined;
  title: string;
  image: string;
  price: number;
  sale: string | undefined;
  badge: string | undefined;
  rate: number 
}) => {
  return (
    <div className="card">
      <div className="card--header">
        <div className="card--header--wrapper">
          {discount ? (
            <div className="card--header--wrapper--discount">
              <p className="card--header--wrapper--discount--text">
                {discount && `-${discount}%`}
              </p>
            </div>
          ) : badge ? (
            <BadgeNew />
          ) : (
            ""
          )}

          <div className="card--header--wrapper--actions">
            <button className="card--header--wrapper--actions--eye">
              <MdOutlineRemoveRedEye className="eye" />
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
          <HiOutlineShoppingCart fontSize={24} />
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
        <div className="card--body--rate">
            {
              [1,2,3,4,5].map((item)=> (
                <img src="/icons/rate-star.svg" alt="star" />
                ))
            }
          <div className="card--body--rate--text">{rate}</div>
        </div>
      </div>
    </div>
  );
};
