import React from "react";
import "./style.scss";

export const AboutStory: React.FC = () => {
  return (
    <div className="about_story">
      <div className="about_story--content">
        <h2 className="about_story--content--title">Our Story</h2>
        <div className="about_story--content--text">
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported <br /> by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>

      <img src="/images/bg-pink.avif" alt="img" />
    </div>
  );
};
