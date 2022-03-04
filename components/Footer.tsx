import Link from "next/link";
// @ts-ignore
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import Layout from "./layout";

// @ts-ignore
const Styles = styled.div`
  .footer{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;

    background-color: #e5dccf;
},
`;

export default function Footer() {
  return (
    // <Layout>
    <Styles>
      {/* <Container className="footer1"> */}
      <div className="footer">
        <p>© 2022 Dan Kelly</p>
        <p>All Rights Reserved.</p>
      </div>
      {/* </Container> */}
    </Styles>
    // </Layout>
  );
}
