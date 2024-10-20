import React from "react";
import { Aside, HeroBanner } from "@/components";
import "./style.scss";

export const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Aside />
      <HeroBanner />
    </div>
  );
};
