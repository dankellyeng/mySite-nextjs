import Link from "next/link";
// @ts-ignore
import styled from "styled-components";
import { Container } from "react-bootstrap";
import * as React from "react";
import { FunctionComponent } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
export interface WorkProps {}

// @ts-ignore
const Styles = styled.div`
  .work {
    width: 100%;
    /* background-color: green; */
  }
  .timeline {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    /* align-items: center; */
    /* background-color: orange; */
  }
  .work-card {
    /* background-color: #fffff3; */
    /* height: 140px;
    width: 300px; */
    /* border: 1px dashed black; */
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
  }
  .card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* padding-left: 20px; */
    padding-right: 20px;
  }
  .header-text {
    font-size: 20px;
  }
  .card-text {
    font-size: 16px;
  }
  .dot {
    height: 10px;
    width: 10px;
    background-color: #000;
    border-radius: 50%;
    /* display: inline-block; */
    display: flex;
    align-content: center;
    margin-right: 20px;
    /* flex-direction: row; */
    /* justify-content: space-between; */
  }

  .hover-image {
    background-color: #cfc6b9;
    display: flex;
    width: 20%;
    /* margin-top: -200px; */
    overflow: auto;
    position: absolute;
    align-self: flex-end;
    left: 75%;
    border-radius: 20%;
  }

  a > div {
    display: none;
  }
  a:hover > div {
    display: block;
  }

  /* a:hover {
    text-decoration: underline;
  } */
  hr.solid {
    border-top: 2px solid #000;
    /* padding-right: 20px; */
    width: 100%;
  }
`;

const Header = styled.h1`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  font-family: "Kamino-VF";
  font-size: 55px;
  color: #242424;
`;

const Title = styled.a`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* padding-left: 20px; */
  padding: 0px;
  margin: 0px;
  /* padding-right: 20px; */
  font-family: "Prosto One";
  /* font-weight: 700; */
  color: #242424;
`;

const ALink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  padding-top: 0px;
  font-size: 14px;
`;

const Text = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding-left: 20px; */
  padding: 0px;
  /* padding-right: 20px; */
  margin: 0px;
  font-size: 14px;
`;

const Work: FunctionComponent<
  InferGetServerSidePropsType<typeof getServerSideProps> & WorkProps
> = (props) => {
  const isMobile = props.deviceType === "mobile";

  console.log("work", isMobile);

  let projects = [
    {
      title: "Master of IT",
      desc: "Two year masters degree with a focus on web and app development",
      year: "2020",
      company: "RMIT University",
      companyLink:
        "https://www.rmit.edu.au/content/dam/rmit/rmit-images/arg/RMIT%20University%20List%20of%20Graduates%202020%20(1).pdf",
      image: "/images/Me.png",
    },
    {
      title: "Creative Coding",
      desc: "Mini course that teaches generative artwork using JavaScript",
      year: "2022",
      company: "Domestika",
      companyLink:
        "https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript",
      image: "/images/Me2.png",
    },
    {
      title: "Redcat",
      desc: "Full time position as a front-end React and React-Native developer",
      year: "2018 - current",
      company: "Redcat Pty Ltd",
      companyLink: "https://www.redcat.com.au/",
      image: "/images/itMe.png",
    },
  ];

  return (
    <Styles>
      <Container className="timeline">
        {/* <h1>Work</h1> */}
        <div className="timeline">
          <Header>WORK</Header>

          {projects.map((project, index) => {
            return (
              <>
                <WorkCard
                  key={index}
                  title={project.title}
                  desc={project.desc}
                  year={project.year}
                  company={project.company}
                  companyLink={project.companyLink}
                  image={project.image}
                  isMobile={isMobile}
                />
                {index !== projects.length - 1 && <hr className="solid" />}
              </>
            );
          })}
        </div>
      </Container>
    </Styles>
  );
};

export default Work;

const WorkCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
  image,
  isMobile,
}) => {
  return (
    // <div>
    <Container className="work-card">
      <span className="dot"></span>

      <Title
        href={companyLink}
        target="_blank"
        className="card-header"
        style={{ fontSize: isMobile ? "25px" : "35px" }}
      >
        {title.toUpperCase()}
        <div>
          <img className="hover-image" src={image} />
        </div>
      </Title>
      {/* <Title href={companyLink}>{year.toUpperCase()}</Title> */}

      {/* <ALink href={companyLink} className="">
        {company}
      </ALink> */}
      {/* <Text className="card-text">{desc}</Text> */}
    </Container>
  );
};

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
