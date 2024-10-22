import React from "react";
import "./style.scss";

export const AccountAside: React.FC = () => {
  return (
    <aside className="account_aside">
      <h3 className="account_aside--title">Manage My Account</h3>
      <ul className="account_aside--list">
        <li className="account_aside--list--item">
          <a className="account_aside--list--item--link" href="#">
            My Profile
          </a>
        </li>
        <li className="account_aside--list--item">
          <a className="account_aside--list--item--link" href="#">
            Address Book
          </a>
        </li>
        <li className="account_aside--list--item">
          <a className="account_aside--list--item--link" href="#">
            My Payment Options
          </a>
        </li>
      </ul>
      <h3 className="account_aside--title">My Orders</h3>
      <ul className="account_aside--list">
        <li className="account_aside--list--item">
          <a className="account_aside--list--item--link" href="#">
            My Returns
          </a>
        </li>
        <li className="account_aside--list--item">
          <a className="account_aside--list--item--link" href="#">
            My Cancellations
          </a>
        </li>
      </ul>
      <h3 className="account_aside--title">My WishList</h3>
    </aside>
  );
};
