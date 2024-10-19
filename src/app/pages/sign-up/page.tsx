import React from "react";
import { Container, MyButton, Header } from "@/components";
import "./style.scss";

const SignUp = () => {
  return (
    <>
      <Header display="none"/>
      <div className="sign_up_page">
        <Container>
          <div className="sign_up_page--wrapper">
            <img
              className="sign_up_page--wrapper--img"
              src="/images/login.svg"
              alt=""
            />
          </div>

          <div className="!flex !gap-[129px] !items-center">
            <div className="!w-[1304px] !h-[781px]">kkk</div>

            <div className="form_wrapper">
              <h2 className="form_wrapper--title">Create an account</h2>

              <p className="form_wrapper--text">Enter your details below</p>

              <form className="form_wrapper--form" action="#">
                <input
                  className="form_wrapper--input"
                  type="text"
                  placeholder="Name"
                />
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
              <MyButton className="!w-full">Create Account</MyButton>
              <MyButton className="google-btn">
                <img src="/icons/google-icon.svg" alt="s" />
                <p>Sign up with Google</p>
              </MyButton>
              <MyButton className="already-btn">
                <p>Already have account?</p>
                <a href="/pages/log-in">Log in</a>
              </MyButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default SignUp;
