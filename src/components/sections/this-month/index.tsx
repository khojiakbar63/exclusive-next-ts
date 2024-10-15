"use client";
import React, { useState, useRef } from "react";
import { Carousel } from "antd";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { BigTitle, SectionTitle, Deadline, Card, MyButton } from "@/components";
import { THIS_MONTH_PRODUCTS } from "@/mocks";
import "./style.scss";

export const ThisMonth: React.FC = () => {
  const carouselRef = useRef<any>(null); // Ref to control Carousel
  const [viewAll, setViewAll] = useState(false); // State to toggle view

  const handleViewAll = () => {
    setViewAll(!viewAll); // Toggle between view modes
  };

  return (
    <div className="this_month">
      <SectionTitle size="13px">This Month</SectionTitle>
      <div className="this_month__content">
        <BigTitle>Best Selling Products</BigTitle>
        <MyButton className="today__wrapper__btn" onClick={handleViewAll}>
          {viewAll ? "Show Less" : "View All"}
        </MyButton>
      </div>

      <div className="this_month__wrapper">
        {viewAll ? (
          // Render all products in a grid or list when viewAll is true
          <div className="this_month__all-products">
            {THIS_MONTH_PRODUCTS.map((item) => (
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
            className="this_month__wrapper__products"
          >
            {THIS_MONTH_PRODUCTS.map((item) => (
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
      </div>
    </div>
  );
};
