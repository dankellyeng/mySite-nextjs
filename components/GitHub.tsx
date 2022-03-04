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
  }
`;

//https://api.github.com/users/dankellyeng

export const GitHub = () => {
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
        <Card style={{ width: "18rem" }}>
          <Card.Img className="image" variant="top" src={image} />
          <Card.Body>
            <Card.Title className="title cardTitle">GitHub</Card.Title>
            <Card.Subtitle className="title mb-2 text-muted">
              {userName}
            </Card.Subtitle>

            <Card.Text></Card.Text>
            <Card.Link href={url}>View GitHub</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </Styles>
  );
};
