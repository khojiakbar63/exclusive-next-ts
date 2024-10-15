"use client";
import React, { useRef, useState } from "react";
import { BigTitle, SectionTitle, ExploreCard, MyButton } from "@/components";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { EXPLORE_PRODUCTS } from "@/mocks";
import { Carousel } from "antd";
import "./style.scss";

// Custom Arrow Component
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

// Helper function to chunk products into groups (e.g., 8 items: 4 per row * 2 rows)
const chunkData = (data: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += size) {
    chunks.push(data.slice(i, size + i));
  }
  return chunks;
};

export const OurProducts = () => {
  const carouselRef = useRef<any>(null); // Ref to control Carousel
  const chunkedProducts = chunkData(EXPLORE_PRODUCTS, 8); // Chunk products into groups of 8

  const [viewAll, setViewAll] = useState(false);

  const handleViewAll = () => {
    setViewAll(!viewAll); // Toggle between view modes
  };
  return (
    <div className="our_products">
      <div className="our_products--wrapper">
        <SectionTitle size="20px">Our Products</SectionTitle>
        <div className="our_products--wrapper--content">
          <BigTitle>Explore Our Products</BigTitle>
          {!viewAll && (
            <div className="custom--arrows">
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

        {viewAll ? (
          <div className="today__all-products">
            {EXPLORE_PRODUCTS.map((item) => (
              <ExploreCard
                key={item.title} // You can use a unique key from the data
                image={item.image}
                title={item.title}
                price={item.price}
                rate={item.rate}
                badge={item.badge || ''}
                colors={item.colors || ''}
              />
            ))}
          </div>
        ) : (
          <Carousel
            ref={carouselRef}
            autoplay
            slidesToShow={1} // Only show one group (two rows) per slide
            className="our_products--wrapper--cards"
            dots={false}
          >
            {chunkedProducts.map((group, index) => (
              <div key={index} className="carousel-slide">
                <div className="carousel-row">
                  {group.slice(0, 4).map((item) => (
                    <ExploreCard
                      key={item.title} // You can use a unique key from the data
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      rate={item.rate}
                      badge={item.badge}
                      colors={item.colors}
                    />
                  ))}
                </div>
                <div className="carousel-row">
                  {group.slice(4, 8).map((item) => (
                    <ExploreCard
                      key={item.title} // You can use a unique key from the data
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      rate={item.rate}
                      badge={item.badge}
                      colors={item.colors}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        )}

        <MyButton
          className="today__wrapper__btn !mb-[60px]"
          onClick={handleViewAll}>
          {viewAll ? "Show Less" : "View All Products"}
        </MyButton>
      </div>
    </div>
  );
};
