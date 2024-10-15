import React from "react";
import { ASIDE } from "@/mocks";
import "./style.scss";

export const Aside: React.FC = () => {
  return (
    <aside className="aside">
      <ul className="aside--list"> 
        {
          ASIDE.map((item, index) => (
            <li className="aside--list--item" key={index}>
              <span className="aside--list--item-title">{item.title}</span>
              <span className="aside--list--item-icon">{item.icon ?  item.icon : null}</span>
            </li>
          ))
          }
      </ul>
    </aside>
  );
};
 