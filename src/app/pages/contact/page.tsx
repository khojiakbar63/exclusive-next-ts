import React from "react";
import "./style.scss";
import { ContactForm, ContactUs, Container, Header } from "@/components";
import { Breadcrumb } from "antd";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <Container>
          <Breadcrumb
          className="!mb-[80px]"
            items={[
              {
                title: "Home",
              },
              {
                title: "About",
              },
            ]}
          />

          <div className="contact--wrapper">
            <ContactUs />
            <ContactForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
