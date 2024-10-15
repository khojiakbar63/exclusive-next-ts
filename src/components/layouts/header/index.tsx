"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Button, Input } from "antd";
import Link from "next/link";
import { Container } from "@/components/container";
import { RiSearchLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";

import "./style.scss";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Container>
        <nav className="header__nav">
          <Link href={"/"}>
            <p className="header__nav_logo">Exclusive</p>
          </Link>

          <ul className="header__nav__links">
            <li className="header__nav__links--item">
              <Link
                className={`header__nav__links--item-link ${
                  pathname === "/" ? "active" : ""
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="header__nav__links--item">
              <Link
                className={`header__nav__links--item-link ${
                  pathname === "/pages/contact" ? "active" : ""
                }`}
                href="/pages/contact"
              >
                Contact
              </Link>
            </li>
            <li className="header__nav__links--item">
              <Link
                className={`header__nav__links--item-link ${
                  pathname === "/pages/about" ? "active" : ""
                }`}
                href="/pages/about"
              >
                About
              </Link>
            </li>
            <li className="header__nav__links--item">
              <Link
                className={`header__nav__links--item-link ${
                  pathname === "/pages/sign-up" ? "active" : ""
                }`}
                href="/pages/sign-up"
              >
                Sign Up
              </Link>
            </li>
          </ul>

          <div className="header__nav__actions">
            <Input
              style={{ width: "243px", fontSize: "12px" }}
              className="header__nav__actions--search"
              size="large"
              placeholder="What are you looking for?"
              suffix={<RiSearchLine style={{ fontSize: "24px" }} />}
            />
            <div className="header__nav__actions--btns">
              <Button
                style={{ border: "none", fontSize: "24px" }}
                shape="circle"
                icon={<BsHeart />}
              />
              <Button
                style={{ border: "none", fontSize: "24px" }}
                shape="circle"
                icon={<HiOutlineShoppingCart />}
              />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
