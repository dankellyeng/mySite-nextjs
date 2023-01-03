import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

// @ts-ignore
import styled from "styled-components";

// @ts-ignore
const Styles = styled.div`
  .nav-container {
    position: fixed;
  }
  .navbar {
    background-color: #ffffff;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    z-index: 1;
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

  .navbar-nav .nav-link {
    color: #242424;
    font-size: 30px;
    font-family: "Kamino-VF";
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

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
      <Navbar
        className="nav-container"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Nav className="navbar">
          <Link href="/" scroll={false}>
            <a className="nav-link">HOME</a>
          </Link>
          <Link href="#about" scroll={false}>
            <a className="nav-link">ABOUT</a>
          </Link>
          <Link href="#work" scroll={false}>
            <a className="nav-link">WORK</a>
          </Link>
          <Link href="#contact" scroll={false}>
            <a className="nav-link">CONTACT</a>
          </Link>
        </Nav>
      </Navbar>
    </Styles>
  );
};

export default CustomNavbar;
