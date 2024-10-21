"use client";
import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import "./style.scss";

export const CheckoutForm: React.FC = () => {
  const [checked, setChecked] = useState(false);

  // UseEffect to set the correct initial state after the component mounts
  useEffect(() => {
    const savedChecked = localStorage.getItem("checkedState") === "true";
    setChecked(savedChecked); // Setting initial state from localStorage
  }, []);

  const onChange = (e: any) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    localStorage.setItem("checkedState", isChecked); // Persist checked state
  };
  return (
    <div className="checkout_form">
      <h2 className="checkout_form--title">Billing Details</h2>
      <form className="checkout_form--form" action="#">
        <div className="checkout_form--item">
          <label className="checkout_form--label" htmlFor="name">
            First Name<span>*</span>
          </label>
          <input className="checkout_form--input" type="text" />
        </div>

        <div className="checkout_form--item">
          <label className="checkout_form--label" htmlFor="name">
            Company Name
          </label>
          <input className="checkout_form--input" type="text" />
        </div>

        <div className="checkout_form--item">
          <label className="checkout_form--label" htmlFor="name">
            Street Address<span>*</span>
          </label>
          <input className="checkout_form--input" type="text" />
        </div>
        <div className="checkout_form--item">
          <label className="checkout_form--label" htmlFor="name">
            Apartment, floor, etc. (optional)
          </label>
          <input className="checkout_form--input" type="text" />
        </div>
        <div className="checkout_form--item">
          <label className="checkout_form--label" htmlFor="name">
            Town/City<span>*</span>
          </label>
          <input className="checkout_form--input" type="text" />
        </div>
        <div className="checkout_form--item">
          <label className="checkout_form--label" htmlFor="name">
            Phone Number<span>*</span>
          </label>
          <input className="checkout_form--input" type="text" />
        </div>
        <div className="checkout_form--item">
          <label className="checkout_form--label" htmlFor="name">
            Email Address<span>*</span>
          </label>
          <input className="checkout_form--input" type="text" />
        </div>
        <div>
          <Checkbox
            checked={checked}
            className={checked ? "custom-checkbox checked" : "custom-checkbox"}
            onChange={onChange}
          >
            <span className="checkbox-text">
              Save this information for faster check-out next time
            </span>
          </Checkbox>
        </div>
      </form>
    </div>
  );
};
