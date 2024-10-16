import React from "react";
import { VscSend } from "react-icons/vsc";
import { Container } from "@/components/container";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer--lists">
          <ul>
            <li className="footer--logo">Exclusive</li>
            <button className="footer--heading">Subscribe</button>
            <li className="footer--item">
              <a className="footer--link" href="#">
                Get 10% off your first order
              </a>
            </li>
            <label className="footer--label" htmlFor="email">
              <input
                className="footer--input"
                placeholder="Enter your email"
                type="text"
                id="email"
              />
              <VscSend className="footer--label--send_icon" fontSize={24} />
            </label>
          </ul>

          <ul>
            <li className="footer--heading">Support</li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </a>
            </li>
            <li className="footer--item">
              <a className="footer--link" href="#">
                exclusive@gmail.com
              </a>
            </li>
            <li className="footer--item">
              <a className="footer--link" href="#">
                +88015-88888-9999
              </a>
            </li>
          </ul>

          <ul>
            <li className="footer--heading">Account</li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                My Account
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                Login / Register
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                Cart
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                Wishlist
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                Shop
              </a>
            </li>
          </ul>

          <ul>
            <li className="footer--heading">Quick Link</li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                Terms Of Use
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                FAQ
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <ul>
            <li className="footer--heading">Download App</li>

            <li className="footer--save_title">
              Save $3 with App New User Only
            </li>

            <li className="footer--flex">
              <img src="/icons/qr.svg" alt="qr" />

              <div className="footer--btns">
                <button className="footer--btns--btn">
                  <img src="/icons/google-play.svg" alt="app-store" />
                </button>
                <button className="footer--btns--btn">
                  <img src="/icons/app-store.svg" alt="app-store" />
                </button>
              </div>
            </li>

            <li>
              <div className="footer--socials">
                <a className="footer--socials-item" href="#">
                  <img src="/icons/f.svg" alt="facebook" />
                </a>
                <a className="footer--socials-item" href="#">
                  <img src="/icons/t.svg" alt="twitter" />
                </a>
                <a className="footer--socials-item" href="#">
                  <img src="/icons/insta.svg" alt="insta" />
                </a>
                <a className="footer--socials-item" href="#">
                  <img src="/icons/ln.svg" alt="ln" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
