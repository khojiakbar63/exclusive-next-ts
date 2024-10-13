import React from "react";
import { Container } from "@/components/container";
import "./style.scss";

export const Top: React.FC = () => {
  return (
    <div className="top">
      <Container>
        <div className="top--wrapper">
          <div></div>

          <div className="top--wrapper--sale">
            <p className="top--wrapper--sale__text">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <button className="top--wrapper--sale__btn">ShopNow</button>
          </div>
          <select className="select select-primary max-w-xs">
            <option>Arabic</option>
            <option>Uzbek</option>
            <option>Korean</option>
            <option>English</option>
          </select>
        </div>
      </Container>
    </div>
  );
};
