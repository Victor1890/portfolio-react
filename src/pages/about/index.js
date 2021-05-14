import React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';

import projects from '../../services/projects';
import experiments from '../../services/experiments';

import SEO from '../../components/seo';
import Card from './card';
import Layout from '../../components/layout';
import ListWrapper from '../../components/list';
import { Title, Typography } from '../../components/typography';

const Container = styled.div`
  background-color: white;
  margin: 0 auto;
  min-height: 46rem;
  width: 100vw;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  max-width: 80rem;
`;

const TextWrapper = styled.h2`
  margin: 0 auto;
  max-width: 36rem;
`;

const CallToAction = styled.span`
  color: #076aeb;
  cursor: pointer;
  font-weight: 550;
`;

const Divider = styled.div`
  background-color: #e6ecf8;
  height: 1px;
  width: 100vw;
`;

// const Company = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   margin: 2rem 0rem;
//   width: 200px;
//   @media (min-width: 968px) {
//     margin: 1rem;
//   }
// `;

const About = ({ location: { pathname } }) => {
  return (
    <Layout location={pathname}>
      <SEO
        title="About | Front-End Developer"
        description="Personal Web Developer Portfolio. I'm a Web developer with emphasis on Front-End and other technology like C#, Python and JavaScript"
      />
      <Container>
        <Wrapper>
          <Title text="My Work" fontSize="1.75rem" fontWeight={700} />
          <Typography textAlign="center">
            Here a few projects i&apos;ve worked on in the past. Want to see
            more?
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <CallToAction> Contact me</CallToAction>
            </Link>
          </Typography>
          <ListWrapper maxWidth="70rem">
            {projects.map((project) => {
              console.log(project);
              return (
                <Card
                  id={project.id}
                  key={project.id}
                  image={project.image}
                  descriptions={project.description}
                  link={project.link}
                />
              );
            })}
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
      </Container>
    </Layout>
  );
};

export default About;
