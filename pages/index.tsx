import { FunctionComponent } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

// @ts-ignore
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
export interface HomeProps {}

// import { isMobile } from "react-device-detect";

import Layout from "../components/layout";

// @ts-ignore
const Styles = styled.div`
  /* .centre {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    display: flex;
    flex-direction: column;
  } */
  .middle {
    justify-content: center;
    display: flex;
  }
  .landingTitle {
    /* padding-top: 10px; */
    color: #242424;
    font-family: "Kamino-VF";
    margin: 0;
    /* background-color: green; */
  }
  .title {
    height: 50%;
    width: 100%;
    justify-content: center;
    display: flex;
    /* background-color: green; */

    /* background-color: pink; */
    /* border: 2px solid aliceblue; */
  }

  .landingImage {
    background-color: #cfc6b9;
    display: flex;
    width: 40%;
    margin-top: -200px;
    overflow: auto;
  }
`;

const Home: FunctionComponent<
  InferGetServerSidePropsType<typeof getServerSideProps> & HomeProps
> = (props) => {
  const isMobile = props.deviceType === "mobile";

  console.log("home", isMobile);

  const firstName = isMobile ? "D" : "D A N";
  const lastName = isMobile ? "K" : "K E L L Y";
  return (
    // <Layout>
    <Styles>
      <Container
        className="centre"
        style={{
          justifyContent: isMobile ? "flex-start" : "center",
          // backgroundColor: "pink",
        }}
      >
        <div className="title">
          <h1
            className="landingTitle"
            style={{ fontSize: isMobile ? "75vw" : "20vw" }}
          >
            {firstName + " " + lastName}
          </h1>
          {/* <h1 className="landingTitle">DAN KELLY</h1> */}
        </div>
        <div
          className="landingImage grow"
          style={{
            height: isMobile ? "50%" : "60%",
            width: isMobile ? "50%" : null,
            borderRadius: isMobile ? 20 : 80,
          }}
        >
          <img width="100%" src="/images/me2.png" alt="me on couch" />
        </div>
        <div style={{ width: "100%" }}>
          <About />
          <Work />
          <Contact />
        </div>
      </Container>
    </Styles>
    // </Layout>
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
