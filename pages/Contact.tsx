import * as React from "react";
import { FunctionComponent } from "react";
// @ts-ignore
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

import HeaderProps from "../utils/HeaderProps";

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
    padding-top: 60px;
    background-color: #c7d1cf;
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  .resume {
    color: blue;
    padding: 0px;
    margin: 0px;
    height: 0px;
  }
`;

const ALink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  font-size: 14px;
`;

const Text = styled.p`
  padding: 2px;
  margin: 0px;
  font-size: 18px;
`;

const Header = styled.h1.attrs<HeaderProps>(({ isMobile }) => ({
  style: { fontSize: isMobile ? "40px" : "55px" },
}))<HeaderProps>`
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
  const { isMobile } = props;

  console.log("contact", isMobile);

  return (
    <Styles>
      <Container className="contact">
        <Header isMobile={isMobile}>CONTACT</Header>
        <div className="paragraph">
          <Text>
            Want to work with me? I'm always happy to grab a chai and have a
            chat.
          </Text>
          <div>
            <Text>
              Feel free to view my
              <Link
                href="/files/Dan-Kelly-Resume-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume"
              >
                &nbsp;resumé,&nbsp;
              </Link>
              recent work and reach out via the links below .
            </Text>
          </div>
        </div>
        <div className="contactLinks">
          <ALink href="https://github.com/dankellyeng" target="_blank">
            <img height={"60px"} src="/images/git.png" alt="Github Logo" />
          </ALink>
          <ALink
            href="https://www.linkedin.com/in/dankellyeng/"
            target="_blank"
          >
            <img height={"60px"} src="/images/linked.png" alt="LinkedIn Logo" />
          </ALink>
          <ALink href="mailto:danielkelly27@gmail.com">
            <img height={"60px"} src="/images/email.png" alt="Email Logo" />
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
