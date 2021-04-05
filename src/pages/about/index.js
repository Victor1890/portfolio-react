import React, { useState } from 'react';
import { Link } from '@reach/router';
import { motion } from 'framer-motion';

import projects from '../../services/projects';
import experiments from '../../services/experiments';

import SEO from '../../components/seo';
import Card from './card';
import Layout from '../../components/layout';
import ListWrapper from '../../components/list';
import { Title, Typography } from '../../components/typography';

import {
  CallToAction,
  Container,
  Divider,
  TextWrapper,
  Wrapper,
} from '../../styles/stylesAbout';

import ModalPortal from '../../components/modal/index';

const About = ({ location: { pathname } }) => {
  const [showModal, setShowModal] = useState(false);

  const handlClick = () => {
    setShowModal(true);
  };

  const handlClose = () => {
    setShowModal(false);
  };

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
            {projects.map((project) => (
              <motion.div
                id={project.id}
                whileHover={{
                  position: 'relative',
                  zIndex: 1,
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Card
                  onActive={handlClick}
                  image={project.image}
                  descriptions={project.description}
                  link={project.link}
                />
                {showModal && (
                  <ModalPortal
                    title={project.title}
                    onClose={handlClose}
                    descriptions={project.description}
                    link={project.link.href}
                  />
                )}
              </motion.div>
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
              <div key={experiment.id}>
                <Card
                  image={experiment.image}
                  descriptions={experiment.description}
                  link={experiment.link}
                />
              </div>
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
