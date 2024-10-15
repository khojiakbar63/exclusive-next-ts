import React from "react";
import "./style.scss";



interface SectionsTitleProps {
  children: string;
  size?: string; // Optional prop
}

export const SectionTitle: React.FC<SectionsTitleProps> = ({ children, size } ) => {
  
  const marginBottom = {
    marginBottom: size || 'null',
  }
  return (
    <div style={marginBottom} className="section_title">
      <div className="section_title--left_box"></div>
      <h3 className="section_title--title">{children}</h3>
    </div>
  );
};
    