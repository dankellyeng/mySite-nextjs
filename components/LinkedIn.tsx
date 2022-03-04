import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
// import "../App.css";
import { Container, Card } from "react-bootstrap";

// @ts-ignore
const Styles = styled.div`
  .cardTitle {
    color: black;
  }

  .image {
    border-radius: 50%;
    width: 50%;
    margin: -50px;
    border: 3px solid white;
  }

  .card {
    align-items: center;
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    background-color: green;
    /* border: 2px solid black; */
    border-radius: 10% 10% 0% 0%;
  }
`;

//https://api.github.com/users/dankellyeng

export const LinkedIn = () => {
  const [userName, setUserName] = useState();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  axios.get(`https://api.github.com/users/dankellyeng`).then((res) => {
    const userName = res.data.login;
    const image = res.data.avatar_url;
    const url = res.data.html_url;
    setUserName(userName);
    setImage(image);
    setUrl(url);
  });

  return (
    <Styles>
      <Container>
        <Card>
          <Card.Img
            className="image"
            variant="top"
            src="https://personal-porfolio-dan-kelly.s3-ap-southeast-2.amazonaws.com/dan.jpeg"
          />
          <Card.Body>
            <Card.Title className="title cardTitle">LinkedIn</Card.Title>
            <Card.Subtitle className="title">{userName}</Card.Subtitle>

            <Card.Text></Card.Text>
            <Card.Link href="https://www.linkedin.com/in/dankellyeng/">
              View LinkedIn
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </Styles>
  );
};
