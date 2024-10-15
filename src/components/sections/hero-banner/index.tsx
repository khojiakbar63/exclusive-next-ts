import React from "react";
import { Carousel } from "antd";
import { Banner } from "@/components";
import { BANNER_DATA } from "@/mocks";
import "./style.scss";

export const HeroBanner: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className="hero_banner">
      <Carousel arrows className="hero_banner--carousel" autoplay>
        {BANNER_DATA.map((item, i) => (
          <Banner key={i} percent={item.percent} version={item.version} />
        ))}
      </Carousel>
    </div>
  );
};
