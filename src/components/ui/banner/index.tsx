import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import "./style.scss";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "344px",
  color: "#fff",
  lineHeight: "344px",
  textAlign: "center",
};

export const Banner = ({
  percent,
  version,
}: {
  percent: number;
  version: number;
}) => {
  return (
    <div className="first" style={contentStyle}>
      <div className="first--content">
        <div className="first--content--header">
          <img
            width={"40px"}
            height={"49px"}
            src="/icons/apple-icon-white.svg"
            alt="Iphone 14"
          />
          <p className="first--content--header-title">
            iPhone {version} Series
          </p>
        </div>
        <h1 className="first--content-main_title">
          Up to {percent}% off Voucher
        </h1>
        <button className="first--content--btn">
          <span>Shop Now</span>
          <HiArrowSmallRight id="r-arrow" fontSize={24} />
        </button>
      </div>
      <img
        className="first--image"
        src="/images/hero_banner_iphone.png"
        alt="iphone14"
      />
    </div>
  );
};
