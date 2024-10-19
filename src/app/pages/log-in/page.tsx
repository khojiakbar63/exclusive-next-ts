import React from "react";
import { Container, MyButton, Header } from "@/components";
import "./style.scss";

const LogIn = () => {
  return (
    <>
      <Header display="none"/>
    <div className="sign_up_page">
      <Container>
        <div className="sign_up_page--wrapper">
          <img
            className="sign_up_page--wrapper--img"
            src="/images/login.svg"
            alt="login"
          />
        </div>

        <div className="!flex !gap-[129px] !items-center">
          <div className="!w-[1314px] !h-[781px]"></div>

          <div className="form_wrapper">
            <h2 className="form_wrapper--title">Create an account</h2>

            <p className="form_wrapper--text">Enter your details below</p>

            <form className="form_wrapper--form" action="#">
              <input
                className="form_wrapper--input"
                type="text"
                placeholder="Email or Phone Number"
              />
              <input
                className="form_wrapper--input"
                type="text"
                placeholder="Password"
              />
            </form>
            <div className="!flex !justify-between !items-center">
              <MyButton className="">Log In</MyButton>
              <a href="#" className="forgot_password">Forget Password?</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};
export default LogIn;
