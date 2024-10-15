import React from "react";
import { Container } from "@/components/container";
import "./style.scss";

export const Top: React.FC = () => {
  return (
    <div className="top">
      <Container>
        <div className="top--wrapper">
          <div className="top--wrapper--empty"></div>

          <div className="top--wrapper--sale">
            <p className="top--wrapper--sale__text">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <button className="top--wrapper--sale__btn">ShopNow</button>
          </div>

          <select className="select select-primary max-w-xs">
            <option value="arab">Arabic</option>
            <option value="uzbek">Uzbek</option>
            <option value="korean">Korean</option>
            <option value="english">English</option>
          </select>
        </div>
      </Container>
    </div>
  );
};
