import React from "react";
import { Link } from "@reach/router";

import projects from "../../services/projects";
import experiments from "../../services/experiments";

import SEO from "../../components/seo";
import Card from "./card";
import Layout from "../../components/layout";
import ListWrapper from "../../components/list";
import { Title, Typography } from "../../components/typography";
import {
  CallToAction,
  Container,
  Wrapper,
  Divider,
  TextWrapper,
} from "./style";

const About = ({ location: { pathname } }) => {
  return (
    <Layout location={pathname}>
      <SEO
        title="About | Full-Stack Developer"
        description="Personal Web Developer Portfolio. I'm a Web developer with emphasis on Full-Stack and other technology like C#, Python and JavaScript"
      />
      <Container>
        <Wrapper>
          <Title text="My Work" fontSize="1.75rem" fontWeight={700} />
          <Typography textAlign="center">
            Here a few projects i&apos;ve worked on in the past. Want to see
            more?
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <CallToAction> Contact me</CallToAction>
            </Link>
          </Typography>
          <ListWrapper maxWidth="70rem">
            {projects.map((project) => (
              <Card
                id={project.id}
                key={project.id}
                image={project.image}
                descriptions={project.description}
                link={project.link}
              />
            ))}
          </ListWrapper>
        </Wrapper>
        <Divider />
        <Wrapper>
          <TextWrapper>
            <Title text="My Experiments" fontSize="1.75rem" fontWeight={700} />
            {/* <Typography fontSize="1.75rem" fontWeight={700} textAlign="center">
              I&apos;m proud to have collaborated with some awesome companies:
            </Typography> */}
          </TextWrapper>
          <ListWrapper maxWidth="70rem" justifyContent="space-evenly">
            {experiments.map((experiment) => (
              <Card
                id={experiment.id}
                key={experiment.id}
                image={experiment.image}
                descriptions={experiment.description}
                link={experiment.link}
              />
            ))}
            {/* {companies.map((company) => (
              <Company key={company.id}>
                <Image alt={company.name} src={company.logo} maxHeight="7rem" />
              </Company>
            ))} */}
          </ListWrapper>
        </Wrapper>
        <Divider />
      </Container>
    </Layout>
  );
};

export default About;
