"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Button, Input } from "antd";
import Link from "next/link";
import { Container } from "@/components/container";
import { RiSearchLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";
import { BsBox2 } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import "./style.scss";
 
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="#">Manage My Account</Link>,
    icon: <FaRegUser color="#fff" className="logout-icon" />,
  },
  {
    key: "2",
    label: <Link href="#">My Order</Link>,
    icon: <BsBox2 color="#fff" className="logout-icon" />,
  },
  {
    key: "3",
    label: <Link href="#">My Cancellations</Link>,
    icon: <MdOutlineCancel color="#fff" className="logout-icon" />,
  },
  {
    key: "4",
    label: <Link href="#">My Reviews</Link>,
    icon: <FaRegStar color="#fff" className="logout-icon" />,
  },
  {
    key: "5",
    label: <Link href="/pages/log-in">Logout</Link>,
    icon: <BiLogOut color="#fff" className="logout-icon" />,
  },
];

export const Header = ({ display }: { display?: string }) => {
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
                style={{ border: "none", fontSize: "24px", display: display }}
                shape="circle"
                icon={<BsHeart />}
                className="header-btn"
              />
              <Button
                style={{ border: "none", fontSize: "24px", display: display }}
                shape="circle"
                icon={<HiOutlineShoppingCart />}
                className="header-btn"
              />

              <Dropdown
                overlayStyle={{display: display}}
                placement="bottomRight"
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ["1"],
                }}
                trigger={["click"]}
                overlayClassName="custom-dropdown-panel"
              >
                <Typography.Link>
                  <Space>
                    <Button
                      style={{
                        border: "none",
                        fontSize: "24px",
                        display: display,
                      }}
                      shape="circle"
                      icon={<FiUser />}
                      className="header-btn"
                    />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
