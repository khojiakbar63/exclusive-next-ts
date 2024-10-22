import React from "react";
import { Breadcrumb } from "antd";
import { Container, AccountAside,  EditProfileForm, Header} from "@/components";
import "./style.scss";

const Account = () => {
  return (
    <>
    <Header/>
    <div className="account">
      <Container>
        <div className="account--header">
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
              {
                title: "My Account",
              },
            ]}
          />

          <h4 className="account--header--title">
            Welcome! <span>Md Rimel</span>
          </h4>
        </div>
        <div className="account--body">
          <AccountAside />

          <EditProfileForm />
        </div>
      </Container>
    </div>
    </>
  )
}

export default Account;
