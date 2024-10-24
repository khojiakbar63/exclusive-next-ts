import React from "react";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import "./style.scss";
import { Image } from "antd";

export const StaffsCard = ({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) => {
  return (
    <div className="staffs_card">
      <div className="staffs_card--header">
        <Image className="staffs_card--image" src={image} alt={name} />
      </div>
      <div className="staffs_card--body">
        <h2 className="staffs_card--title">{name}</h2>
        <p className="staffs_card--position">{position}</p>
        <div className="staffs_card--socials">
          <a className="staffs_card--socials--item" href="#">
            <CiTwitter fontSize={24} />
          </a>
          <a className="staffs_card--socials--item" href="#">
            <CiInstagram fontSize={24} />
          </a>
          <a className="staffs_card--socials--item" href="#">
            <CiLinkedin fontSize={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
