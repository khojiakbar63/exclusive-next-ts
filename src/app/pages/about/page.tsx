"use client";
import React, { useRef ,useState} from "react";
import { ABOUT_INDICATOR, STAFFS } from "@/mocks";
import { Carousel } from "antd";
import {
  AboutStory,
  AdsColumn,
  Container,
  Header,
  AboutIndicator,
  StaffsCard,
} from "@/components";
import { Breadcrumb } from "antd";
import "./style.scss";

const About: React.FC = () => {
  const carouselRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0); 
  const handleSlideChange = (currentSlide: number) => {
    setActiveSlide(currentSlide); // Update active slide on change
  };

  // Custom function to go to a specific slide
  const goToSlide = (index: number) => {
    carouselRef.current.goTo(index);
  };
  return (
    <>
      <Header />

      <div className="about">
        <Container>
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
              {
                title: "About",
              },
            ]}
          />
          <AboutStory />

          <div className="indicator--wrapper">
            {ABOUT_INDICATOR.map((item) => (
              <AboutIndicator key={item.id} {...item} />
            ))}
          </div>

          <Carousel
            dots={true}
            ref={carouselRef}
            autoplay
            slidesToShow={3}
            className="staffs--wrapper"
          >
            {STAFFS.map((item) => (
              <StaffsCard key={item.id} {...item} />
            ))}
            
          </Carousel>

          <AdsColumn />
        </Container>
      </div>
    </>
  );
};

export default About;
