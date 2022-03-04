import React, { useState } from "react";
import Link from "next/link";
// @ts-ignore
import styled from "styled-components";
import { Container } from "react-bootstrap";

// @ts-ignore
const Styles = styled.div`
  .about {
    /* background-color: green; */
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  .paragraph {
    width: 85%;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
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

const Text = styled.p`
  display: flex;
  flex-direction: row;
  /* padding-left: 20px; */
  padding: 2px;
  /* padding-right: 20px; */
  margin: 0px;
  font-size: 18px;
`;

export default function About() {
  const [active, setActive] = useState("education");

  // function toggleActive(item: String) {
  //   console.log({ item });
  //   if (item === "education") {
  //     setActive("education");
  //   } else if (item === "skills") {
  //     setActive("skills");
  //   } else if (item === "profile") {
  //     setActive("profile");
  //   }
  // }

  return (
    // <Layout>
    <Styles>
      <Container className="about">
        <Header>ABOUT</Header>
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
    // </Layout>
  );
}

// const styles: any = {
//   customAccordiaA: {
//     backgroundColor: "transparent",
//     width: "100%",
//     padding: 0,
//   },

//   accordianItem: {
//     backgroundColor: "transparent",
//   },

//   activeHeader: {
//     boxShadow: "inset 0 -14rem 0 0 #3fa2dd",
//     width: "100%",
//   },

//   accordianBody: {
//     display: "flex",
//     justifyContent: "center",
//   },

//   paragraph: {
//     marginLeft: "60px",
//     marginRight: "60px",
//   },

//   inactiveHeader: {
//     boxShadow: "inset 0 -0.2rem 0 0 #3fa2dd",
//     transition: "boxShadow 0.4s",
//     width: "100%",
//   },
// };
