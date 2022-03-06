import { FunctionComponent } from "react";
// @ts-ignore
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import CustomNavbar from "../components/CustomNavBar";

export interface HomeProps {}

// @ts-ignore
const Styles = styled.div`
  .page {
    padding-top: 60px;
  }
  .middle {
    justify-content: center;
    display: flex;
  }
  .landingTitle {
    color: #242424;
    font-family: "Kamino-VF";
    margin: 0;
  }
  .title {
    height: 50%;
    width: 100%;
    justify-content: center;
    display: flex;
    padding-bottom: 15px;
  }

  .landingImage {
    background-color: #cfc6b9;
    display: flex;
    width: 40%;
    margin-top: -200px;
    margin-bottom: 20px;
    overflow: auto;
  }
`;

const Home: FunctionComponent<
  InferGetServerSidePropsType<typeof getServerSideProps> & HomeProps
> = (props) => {
  const isMobile = props.deviceType === "mobile";
  const firstName = isMobile ? "D" : "D A N";
  const lastName = isMobile ? "K" : "K E L L Y";
  return (
    <Styles>
      <CustomNavbar />
      <Container
        className="centre page"
        style={{
          justifyContent: isMobile ? "flex-start" : "center",
        }}
      >
        <div className="title">
          <h1
            className="landingTitle"
            style={{ fontSize: isMobile ? "68vw" : "20vw" }}
          >
            {firstName + " " + lastName}
          </h1>
        </div>
        <div
          className="landingImage grow"
          style={{
            height: isMobile ? "50%" : "60%",
            width: isMobile ? "55%" : null,
            borderRadius: isMobile ? 20 : 80,
          }}
        >
          <img width="100%" src="/images/me2.png" alt="me on couch" />
        </div>
        <div style={{ width: "100%" }}>
          <section id="about">
            <About isMobile={isMobile} />
          </section>
          <section id="work" style={{ paddingTop: "60px" }}>
            <Work id="work" isMobile={isMobile} />
          </section>
          <section id="contact">
            <Contact id="contact" isMobile={isMobile} />
          </section>
        </div>
      </Container>
    </Styles>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
};
