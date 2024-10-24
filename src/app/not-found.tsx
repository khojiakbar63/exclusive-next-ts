import { Container, Header, MyButton } from "@/components";
import { Breadcrumb } from "antd";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="not_found">
        <Container>
          <Breadcrumb
            className="!mb-[140px]"
            items={[
              {
                title: "Home",
              },
              {
                title: "404 Error",
              },
            ]}
          />
          <div className="not_found--wrapper">
            <h1 className="not_found--title">404 Not Found</h1>
            <p className="not_found--description">
              Your visited page not found. You may go home page.
            </p>
            <a href="/">
              <MyButton>Back to home page</MyButton>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
