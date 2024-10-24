import React from "react";
import { TbPhone } from "react-icons/tb";

import "./style.scss";

export const ContactUs = () => {
  return (
    <div className="contact_us">
      <div className="contact_us--top">
        <div className="contact_us--header">
          <div className="contact_us--header--wrapper">
            <div className="contact_us--header--wrapper--red">
              <TbPhone className="contact_us--header--wrapper--red--icon" />
            </div>
            <h3 className="contact_us--header--wrapper--title">Call To Us</h3>
          </div>
        </div>
        <p className="contact_us--description">
          We are available 24/7, 7 days a week.
        </p>
        <span className="contact_us--address">
          Phone: <a href="tel:+8801611112222">+8801611112222</a>
        </span>
      </div>
      <div className="contact_us--bottom">
        <div className="contact_us--header">
          <div className="contact_us--header--wrapper">
            <div className="contact_us--header--wrapper--red">
              <TbPhone className="contact_us--header--wrapper--red--icon" />
            </div>
            <h3 className="contact_us--header--wrapper--title">Write To US</h3>
          </div>
        </div>
        <p className="contact_us--description !w-[240px]">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <span className="contact_us--address !mb-[16px]">
          Emails:{" "}
          <a href="mailto:customer@exclusive.com">customer@exclusive.com</a>
        </span>
        <br />
        <span className="contact_us--address">
          Emails:{" "}
          <a href="mailto:support@exclusive.com">support@exclusive.com</a>
        </span>
      </div>
    </div>
  );
};
