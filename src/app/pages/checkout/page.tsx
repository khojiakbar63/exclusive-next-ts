"use client";
import React from "react";
import { Breadcrumb } from "antd";
import {
  Container,
  Header,
  CheckoutForm,
  PlaceOrder
} from "@/components";
import {} from "@/mocks";
import "./style.scss";

const Checkout = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="checkout">
          <Breadcrumb
            className="!mb-[80px]"
            items={[
              {
                title: "Account",
              },
              {
                title: "My Account",
              },
              {
                title: "Product",
              },
              {
                title: "View Cart",
              },
              {
                title: "CheckOut",
              },
            ]}
          />



            <div className="checkout--content">
                <CheckoutForm />
                <PlaceOrder />
            </div>

         
            </div>
      </Container>
    </>
  );
};

export default Checkout;
