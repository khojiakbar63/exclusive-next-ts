import React from "react";
import { Container, Hero, Today,  Categories, ThisMonth, EnhanceBanner, OurProducts, Featured, AdsColumn } from "@/components";

export default function Home() {
  return (
    <div className="home">
      <Container>
        <Hero />
        <Today />
        <Categories />
        <ThisMonth />
        <EnhanceBanner />
        <OurProducts />
        <Featured />
        <AdsColumn />
      </Container>
    </div>
  );
}
