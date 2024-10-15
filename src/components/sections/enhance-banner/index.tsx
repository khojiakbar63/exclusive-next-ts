"use client";
import React, { useEffect, useState } from "react";
import { MyButton } from "@/components/ui/button";
import "./style.scss";

export const EnhanceBanner = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const padZero = (num: number) => (num < 10 ? `0${num}` : num);

  const days = padZero(time.getDate());
  const hours = padZero(time.getHours());
  const minutes = padZero(time.getMinutes());
  const seconds = padZero(time.getSeconds());

  return (
    <div className="enhance">
      <div className="enhance--content">
        <h3 className="enhance--content--title">Categories</h3>
        <h1 className="enhance--content--heading">
          Enhance Your Music Experience
        </h1>
        <div className="enhance--content--timer">
          <div className="enhance--content--timer--item">
            <p className="enhance--content--timer--item--number">{days}</p>
            <p className="enhance--content--timer--item--text">Days</p>
          </div>
          <div className="enhance--content--timer--item">
            <p className="enhance--content--timer--item--number">{hours}</p>
            <p className="enhance--content--timer--item--text">Hours</p>
          </div>
          <div className="enhance--content--timer--item">
            <p className="enhance--content--timer--item--number">{minutes}</p>
            <p className="enhance--content--timer--item--text">Minutes</p>
          </div>
          <div className="enhance--content--timer--item">
            <p className="enhance--content--timer--item--number">{seconds}</p>
            <p className="enhance--content--timer--item--text">Seconds</p>
          </div>
        </div>
        <MyButton className="!bg-[#00FF66] hover:!bg-[#00ff66e8] active:!bg-[#00FF66] duration-200">
          Buy Now!
        </MyButton>
      </div>
      <div className="enhance--images">
        <img
          className="enhance--images--circle"
          src="/images/lit-circle.svg"
          alt="circle"
        />
        <img
          className="enhance--images--speaker"
          src="/images/jbl-speaker.svg"
          alt="jbl"
        />
      </div>
    </div>
  );
};
