import React, { useState } from "react";
// @ts-ignore
import styled from "styled-components";
import { Container } from "react-bootstrap";
import HeaderProps from "../utils/HeaderProps";

// @ts-ignore
const Styles = styled.div`
  .about {
    background-color: #ded0bd;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  .paragraph {
    width: 85%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
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

const Text = styled.p`
  display: flex;
  flex-direction: row;
  padding: 2px;
  padding-bottom: 7px;
  margin: 0px;
  font-size: 18px;
`;

export default function About(props) {
  const [active, setActive] = useState("education");
  const { isMobile } = props;

  return (
    <Styles>
      <Container className="about">
        <Header isMobile={isMobile}>ABOUT</Header>
        <div className="paragraph">
          <Text>
            I have been a web developer for almost two years and I really love
            it.
          </Text>
          <Text>
            I really enjoy design and want to make great websites that are on
            trend.
          </Text>
          <Text>
            I want to work with the latest tech to make sites that are
            responsive and accessible.
          </Text>
          <Text>
            My goal is to make work that I am proud of and recognised for.
          </Text>
        </div>
      </Container>
    </Styles>
  );
}
