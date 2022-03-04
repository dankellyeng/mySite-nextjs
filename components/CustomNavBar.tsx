import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import Link from 'next/link';

// @ts-ignore
import styled from "styled-components";

// @ts-ignore
const Styles = styled.div`
  .navbar {
    /* background-color: #272e31; */
    /* background-color: pink; */
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
  }

  .navbar-collapse {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
  }

  .navbar-toggler-icon {
    color: #ffffff;
  }

  /* .navbar-brand, */
  .navbar-nav .nav-link {
    color: #242424;
    font-size: 30px;
    font-family: "Kamino-VF";
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0; */

    &:hover {
      color: #262b29;
    }

    .logo.navbar-brand {
      font-size: 1.8em !important;
    }
  }

  .logo.navbar-brand {
    font-size: 2.1em !important;
    font-family: "Megrim", cursive;
    transform: rotate(-11deg);
  }

  .mr-3,
  .mx-3 {
    margin-right: 0rem !important;
  }
`;

const CustomNavbar = () => {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        {/* <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          // className=".navbar-toggler-icon"
        /> */}
        <Navbar.Collapse>
          <Nav className="navbar">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/About">ABOUT</Nav.Link>
            <Nav.Link href="/Work">WORK</Nav.Link>
            <Nav.Link href="/Contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default CustomNavbar;
