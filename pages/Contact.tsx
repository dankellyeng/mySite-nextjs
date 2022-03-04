import Link from "next/link";
// @ts-ignore
import styled from "styled-components";
import { Container } from "react-bootstrap";
import * as React from "react";
import { FunctionComponent } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { LinkedIn } from "../components/LinkedIn";

export interface ContactProps {}

// @ts-ignore
const Styles = styled.div`
  .contact {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    /* background-color: green; */
  }
  .contactLinks {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  .paragraph {
    width: 85%;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
`;

const Title = styled.a`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* padding-left: 20px; */
  padding: 0px;
  margin: 0px;
  padding-right: 20px;
  font-family: "Lato", sans-serif;
  color: black;
`;

const ALink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  padding: 0px 20px 0px 20px;
  font-size: 14px;
`;

const Text = styled.p`
  display: flex;
  flex-direction: row;
  /* padding-left: 20px; */
  padding: 2px;
  /* padding-right: 20px; */
  margin: 0px;
  font-size: 18px;
`;

const Header = styled.h1`
  display: flex;
  flex-direction: row;
  padding-left: 40px;
  margin: 0px;
  font-family: "Kamino-VF";
  font-size: 55px;
  color: #242424;
  align-self: flex-start;
`;

const Contact: FunctionComponent<
  InferGetServerSidePropsType<typeof getServerSideProps> & ContactProps
> = (props) => {
  const isMobile = props.deviceType === "mobile";

  console.log("contact", isMobile);

  return (
    <Styles>
      <Container className="contact">
        <Header>CONTACT</Header>
        <div className="paragraph">
          <Text>
            Want to work with me? I'm always happy to grab a chai and have a
            chat.
          </Text>
          <Text>
            Feel free to view my recent work and reach out via the links below .
          </Text>
        </div>
        <div className="contactLinks">
          <ALink href="https://github.com/dankellyeng">
            <img
              height={"60px"}
              // className="mr-3"
              src="/images/git.png"
              alt="Github Logo"
            />
          </ALink>
          <ALink href="https://www.linkedin.com/in/dankellyeng/">
            <img
              height={"60px"}
              // width={"60px"}
              // className="mr-3"
              src="/images/linked.png"
              alt="LinkedIn Logo"
            />
          </ALink>
          <ALink href="mailto:danielkelly27@gmail.com">
            <img
              height={"60px"}
              // className="mr-3"
              src="/images/email.png"
              alt="Email Logo"
            />
          </ALink>
        </div>
      </Container>
    </Styles>
  );
};

export default Contact;

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
