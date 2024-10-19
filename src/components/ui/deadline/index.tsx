"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";

export const Deadline = () => {
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
    <div className="time">
      <div className="time__item">
        <div className="text">Days</div>
        <div className="number">{days}</div>
      </div>
      <Image
        width={4}
        height={20}
        style={{ marginTop: "18px" }}
        src="/icons/Semiclone.svg"
        alt="semi-clone"
      />
      <div className="time__item">
        <div className="text">Hours</div>
        <div className="number">{hours}</div>
      </div>
      <Image
        width={4}
        height={20}
        style={{ marginTop: "18px" }}
        src="/icons/Semiclone.svg"
        alt="semi-clone"
      />
      <div className="time__item">
        <div className="text">Minutes</div>
        <div className="number">{minutes}</div>
      </div>
      <Image
        width={4}
        height={20}
        style={{ marginTop: "18px" }}
        src="/icons/Semiclone.svg"
        alt="semi-clone"
      />
      <div className="time__item">
        <div className="text">Seconds</div>
        <div className="number">{seconds}</div>
      </div>
    </div>
  );
};
