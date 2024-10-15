"use client";
import React, { useRef } from "react";
import { BigTitle, SectionTitle, CategoriesCard } from "@/components";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { CATEGORIES_CARD_DATA } from "@/mocks";
import { Carousel } from "antd";
import "./style.scss";

const CustomArrow = ({
  direction,
  onClick,
}: {
  direction: string;
  onClick: () => void;
}) => {
  return (
    <div className={`custom-arrow ${direction}`} onClick={onClick}>
      {direction === "left" ? (
        <HiArrowSmallLeft style={{ fontSize: "24px", cursor: "pointer" }} />
      ) : (
        <HiArrowSmallRight style={{ fontSize: "24px", cursor: "pointer" }} />
      )}
    </div>
  );
};

export const Categories = () => {
  const carouselRef = useRef<any>(null);
  return (
    <div className="categories">
      <div className="categories--wrapper">
        <SectionTitle size="20px">Categories</SectionTitle>
        <div className="categories--wrapper--content">
          <BigTitle>Browse By Category</BigTitle>
          <div className="categories--wrapper--content--arrows">
            <CustomArrow
              direction="left"
              onClick={() => carouselRef.current?.prev()}
            />
            <CustomArrow
              direction="right"
              onClick={() => carouselRef.current?.next()}
            />
          </div>
        </div>

        <Carousel
          ref={carouselRef}
          autoplay
          slidesToShow={6}
          className="categories--wrapper--cards"
          dots={false}
        >
          {CATEGORIES_CARD_DATA.map((item, index) => (
            <CategoriesCard key={index} image={item.image} title={item.title} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
