import React from "react";
import "./style.scss";

interface SectionsTitleProps {
  children: string;
  size?: string;
}

export const BigTitle: React.FC<SectionsTitleProps> = ({ children, size }) => {
  const marginBottom = {
    marginBottom: size || "null",
  };
  return (
    <h1 style={marginBottom} className="big_title">
      {children}
    </h1>
  );
};
