import React from "react";
// @ts-ignore
import styled from "styled-components";
// import "../App.css";
import { Row, Col } from "react-bootstrap";
import { GitHub } from "./GitHub";
import { LinkedIn } from "./LinkedIn";

// @ts-ignore
const Styles = styled.div`
  .logos {
    border-radius: 5px;
  }

  .row {
    justify-content: center;
  }

  .table td {
    border: none !important;
    outline: none !important;
    padding-top: 2px;
  }

  .progress-bar {
    background-color: #3fa2dd;
  }

  .profiles {
    padding-top: 50px;
    padding-bottom: 15px;
  }

  .uni {
    color: #ffffff;
    font-family: "Alegreya", serif;
    text-align: center;
  }

  .paragraph {
    justify-content: center;
    padding-top: 50px;
  }

  .row {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Profiles = () => {
  return (
    <Styles>
      <div className="paragraph">
        <Row className="profiles">
          <Col>
            <GitHub />
          </Col>
          <Col>
            <LinkedIn />
          </Col>
        </Row>
      </div>
    </Styles>
  );
};
