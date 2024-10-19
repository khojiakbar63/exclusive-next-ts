"use client";
import React from "react";
import { Breadcrumb, Input } from "antd";
import {
  Container,
  Header,
  CartTable,
  TransButton,
  MyButton,
} from "@/components";
import {} from "@/mocks";
import "./style.scss";

const Cart = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="cart">
          <Breadcrumb
            className="!mb-[80px]"
            items={[
              {
                title: "Home",
              },
              {
                title: "Cart",
              },
            ]}
          />

          <CartTable />

          <div className="!flex !justify-between !items-center !mb-[80px]">
            <TransButton>Return To Shop</TransButton>
            <TransButton>Update Cart</TransButton>
          </div>

          <div className="!flex !justify-between !items-start">
            <div className="!w-[527px] !flex !justify-between !items-center">
              <Input className="cart--input" placeholder="Coupon Code" />
              <MyButton>Apply Coupon</MyButton>
            </div>

            <div className="cart--card">
              <h3 className="cart--card__title">Cart Total</h3>
              <div className="cart--card__content">
                <div className="cart--card__content__item">
                  <h4 className="cart--card__content__item--title">Subtotal:</h4>
                  <h4 className="cart--card__content__item--title">$1750</h4>
                </div>
                <div className="cart--card__content__item">
                  <h4 className="cart--card__content__item--title">Shipping:</h4>
                  <h4 className="cart--card__content__item--title">Free</h4>
                </div>
                <div className="cart--card__content__item">
                  <h4 className="cart--card__content__item--title">Total:</h4>
                  <h4 className="cart--card__content__item--title">$1750</h4>
                </div>
              </div>
              <MyButton className="!ml-[89px]">Procees to checkout</MyButton>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
