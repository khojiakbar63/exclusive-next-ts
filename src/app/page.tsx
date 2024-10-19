import React from "react";
import {
  Container,
  Hero,
  Today,
  Categories,
  ThisMonth,
  EnhanceBanner,
  OurProducts,
  Featured,
  AdsColumn,
  Header,
} from "@/components";

export default function Home() {
  return (
    <div className="home">
      <Header />
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
