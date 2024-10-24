import React from "react";
import "./style.scss";

export const AboutIndicator = ({
  icon:Icon,
  number,
  text,
}: {
  icon: React.ElementType;
  number: number;
  text: string;
}) => {
  return (
    <div className="about_indicator">
      <div className="about_indicator--grey">
        <div className="about_indicator--black">
          <Icon className="about_indicator--icon" />
        </div>
      </div>
      <h2 className="about_indicator--number">{number}</h2>
      <p className="about_indicator--text">{text}</p>
    </div>
  );
};
