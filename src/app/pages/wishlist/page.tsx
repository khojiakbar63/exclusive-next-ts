"use client";
import React, { useState } from "react";
import {
  Container,
  Header,
  TransButton,
  WishlistCard,
  WishlistJustCard,
  SectionTitle,
} from "@/components";
import { WISHLIST_PRODUCTS, WISHLIST_JUST_PRODUCTS } from "@/mocks";

import "./style.scss";

const WishList = () => {
  const [viewAll, setViewAll] = useState(false);
  const handleViewAll = () => {
    setViewAll(!viewAll);
  };
  return (
    <>
      <Header />
      <Container>
        <div className="wishlist">
          <div className="wishlist--header">
            <h1 className="wishlist--header__title">
              Wishlist <span>(4)</span>
            </h1>
            <TransButton>Move All To Bag</TransButton>
          </div>

          <div className="wishlist--products">
            {WISHLIST_PRODUCTS.map((item) => (
              <WishlistCard key={item.id} {...item} />
            ))}
          </div>

          <div className="wishlist--just--products">
            <div className="wishlist--just--products__header">
              <SectionTitle>Just For You</SectionTitle>
              <TransButton onClick={handleViewAll}>{viewAll ? "Show Less" : "View All"}</TransButton>
            </div>

            <div>
              {viewAll ? (
                <div className="wishlist--products">
                  {WISHLIST_JUST_PRODUCTS.map((item) => (
                    <WishlistJustCard key={item.id} {...item} />
                  ))}
                </div>
              ) : (
                <div className="wishlist--products">
                  {WISHLIST_JUST_PRODUCTS.slice(0, 4).map((item) => (
                    <WishlistJustCard key={item.id} {...item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
