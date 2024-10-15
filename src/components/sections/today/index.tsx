"use client";
import React, { useState, useRef } from "react";
import { Carousel } from "antd";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { BigTitle, SectionTitle, Deadline, Card, MyButton } from "@/components";
import { TODAY_PRODUCTS } from "@/mocks";
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

export const Today: React.FC = () => {
  const carouselRef = useRef<any>(null); 
  const [viewAll, setViewAll] = useState(false); 

  const handleViewAll = () => {
    setViewAll(!viewAll); // Toggle between view modes
  };

  return (
    <div className="today">
      <SectionTitle size="13px">Today's</SectionTitle>
      <div className="today__content">
        <div className="today__content__left">
          <BigTitle>Flash Sales</BigTitle>
          <Deadline />
        </div>
        {!viewAll && (
          <div className="today__arrows">
            <CustomArrow
              direction="left"
              onClick={() => carouselRef.current?.prev()}
            />
            <CustomArrow
              direction="right"
              onClick={() => carouselRef.current?.next()}
            />
          </div>
        )}
      </div>

      <div className="today__wrapper">
        {viewAll ? (
          <div className="today__all-products">
            {TODAY_PRODUCTS.map((item) => (
              <Card
                key={item.id}
                discount={item.discount}
                title={item.title}
                image={item.image}
                current={item.current_price}
                old={item.old_price}
                rate={item.rate}
              />
            ))}
          </div>
        ) : (
          // Render the carousel when viewAll is false
          <Carousel
            ref={carouselRef}
            autoplay
            slidesToShow={4}
            className="today__wrapper__products"
          >
            {TODAY_PRODUCTS.map((item) => (
              <Card
                key={item.id}
                discount={item.discount}
                title={item.title}
                image={item.image}
                current={item.current_price}
                old={item.old_price}
                rate={item.rate}
              />
            ))}
          </Carousel>
        )}

        <MyButton className="today__wrapper__btn !mb-[60px]" onClick={handleViewAll}>
          {viewAll ? "Show Less" : "View All Products"}
        </MyButton>
      </div>
    </div>
  );
};
