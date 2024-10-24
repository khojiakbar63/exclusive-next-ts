"use client";
import { Card, Container, DetailedItem, Header, SectionTitle } from "@/components";
import { Breadcrumb, Carousel } from "antd";
import React, { useRef } from "react";
import { THIS_MONTH_PRODUCTS } from "@/mocks";
import "./style.scss";

const DetailsCard = () => {
  const carouselRef = useRef<any>(null);
  return (
    <>
      <Header />

      <div className="details">
        <Container>
          <Breadcrumb
            className="!mb-[80px]"
            items={[
              {
                title: "Account",
              },
              {
                title: "Gaming",
              },
              {
                title: "Havic HV G-92 Gamepad",
              },
            ]}
          />

            <DetailedItem/>

          <SectionTitle>Related Item</SectionTitle>

          <Carousel
            ref={carouselRef}
            autoplay
            slidesToShow={4}
            className="details--wrapper--products"
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
        </Container>
      </div>
    </>
  );
};

export default DetailsCard;
