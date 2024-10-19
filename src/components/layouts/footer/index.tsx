import React from "react";
import { VscSend } from "react-icons/vsc";
import { Container } from "@/components/container";
import "./style.scss";
import Image from "next/image";

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
              <a className="footer--link" href="/pages/log-in">
                Login / Register
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="/pages/cart">
                Cart
              </a>
            </li>
            <li className="footer--item  !w-[175px]">
              <a className="footer--link" href="/pages/wishlist">
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
              <Image src="/icons/qr.svg" width={76} height={76} alt="qr" />

              <div className="footer--btns">
                <button className="footer--btns--btn">
                  <Image src="/icons/google-play.svg" width={104} height={30} alt="app-store" />
                </button>
                <button className="footer--btns--btn">
                  <Image src="/icons/app-store.svg" width={104} height={30} alt="app-store" />
                </button>
              </div>
            </li>
  
            <li>
              <div className="footer--socials">
                <a className="footer--socials-item" href="#">
                  <Image src="/icons/f.svg" width={24} height={24} alt="facebook" />
                </a>
                <a className="footer--socials-item" href="#">
                  <Image src="/icons/t.svg" width={24} height={24} alt="twitter" />
                </a>
                <a className="footer--socials-item" href="#">
                  <Image src="/icons/insta.svg" width={24} height={24} alt="insta" />
                </a>
                <a className="footer--socials-item" href="#">
                  <Image src="/icons/ln.svg" width={24} height={24} alt="ln" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
