import React from "react";
import { MyButton } from "@/components/ui/button";
import "./style.scss";

export const ContactForm = () => {
  return (
    <div className="contact_form">
      <div className="contact_form--inputs">
        <input
          className="contact_form--input"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="contact_form--input"
          type="text"
          placeholder="Your Email"
        />
        <input
          className="contact_form--input"
          type="text"
          placeholder="Your Phone"
        />
      </div>
      <textarea
        className="contact_form--textarea"
        placeholder="Your Massage"
        name=""
        id=""
        cols={30}
        rows={10}
      ></textarea>
      <MyButton>Send Massage</MyButton>
    </div>
  );
};
