import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";
import "./style.scss";

export const AdsColumn = () => {
  return (
    <div className="ads_column">
      <div className="ads_column__item">
        <div className="grey_circle">
          <div className="black_circle">
            <TbTruckDelivery className="ads-icon" />
          </div>
        </div>
        <h2 className="ads_column__item-title">FREE AND FAST DELIVERY</h2>
        <p className="ads_column__item-text">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="ads_column__item">
        <div className="grey_circle">
          <div className="black_circle">
            <TfiHeadphoneAlt className="ads-icon" />
          </div>
        </div>
        <h2 className="ads_column__item-title">24/7 CUSTOMER SERVICE</h2>
        <p className="ads_column__item-text">Friendly 24/7 customer support</p>
      </div>
      <div className="ads_column__item">
        <div className="grey_circle">
          <div className="black_circle">
            <LuShieldCheck className="ads-icon" />
          </div>
        </div>
        <h2 className="ads_column__item-title">MONEY BACK GUARANTEE</h2>
        <p className="ads_column__item-text">We reurn money within 30 days</p>
      </div>
    </div>
  );
};
