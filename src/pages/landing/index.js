import { Link } from "@reach/router";
import React from "react";
import Avatar from "../../components/avatar";
import Image from "../../components/image";
import Layout from "../../components/layout";
import ListWrapper from "../../components/list";
import SEO from "../../components/seo";
import { Title, Typography } from "../../components/typography";
import careerInfo from "../../services/careerInfo";
import Experiments from "../../services/experiments";
import projects from "../../services/projects";
import works from "../../services/works";
import Card from "../about/card";
import { CallToAction, Divider } from "../about/style";
import Paper from "./paper";
import {
  CenteredContainer,
  CenteredWrapper, Container, ImgWrapper, PaperComponent,
  TextWrapper, TitleWrapper, Wrapper
} from "./style";

const titleText = "< Hello World />";

const LandingPage = ({ location: { pathname } }) => (
  <Layout location={pathname}>
    <SEO
      title="Victor Rosario | Full-Stack Developer"
      description="Personal Web Developer Portfolio. I'm a Web developer with emphasis on Full-Stack and other technology like C#, Python and JavaScript"
    />
    <Container>
      <Wrapper>
        <TitleWrapper>
          <Title fontSize="2.2rem" fontWeight={800}>
            {titleText}
          </Title>
        </TitleWrapper>
        <Typography textAlign="center">
          I&apos;m a Web Developer, passionate about what I do, and always
          learning something new.
        </Typography>
        <Avatar defaultImage="/avatar.svg" hoverImage="/hover_avatar.svg" />
        <ImgWrapper>
          <Image src="/hero.svg" alt="Victor Rosario Hero" height="100%" width="80%" />
        </ImgWrapper>
      </Wrapper>
    </Container>

    <CenteredContainer variantBackground>
      <CenteredWrapper>
        <Title color="white" fontSize="2rem" fontWeight={700}>
          Hi, I&apos;m Victor. Pleasure to meet you.
        </Title>
        <Typography color="white" textAlign="center">
          I started my journey as a developer in 2018. I have a special interest
          in frontend and backend development, where it has worked most of my
          projects and increases my skills. A fan of learning and interacting
          with new technologies, these are the skills that I have learned and
          improved during this fantastic journey.
        </Typography>
      </CenteredWrapper>
    </CenteredContainer>

    <Container>
      <Wrapper>
        <PaperComponent>
          {careerInfo.map((data, index) => (
            <Paper
              key={data.id}
              icon={data.icon}
              columnTitle={data.title}
              description={data.description}
              knowledgeList={data.knowledgeList}
              lastColumn={careerInfo.length === index + 1}
            />
          ))}
        </PaperComponent>
        {/* <TitleWrapper>
          <Title fontSize="1.5rem" fontWeight={800}>
            Learn more about me
          </Title>
        </TitleWrapper> */}
        {/* <ColumnWrapper>
          <Column>
            <TextWrapper>
              <Typography textAlign="center">
                Check some of the projects and companies i&apos;ve been involved
                with.
              </Typography>
            </TextWrapper>
            <ButtonWrapper>
              <Link to="/about" style={{ margin: "0 auto" }}>
                <TransitionButton value="Check More" />
              </Link>
            </ButtonWrapper>
          </Column>
          <Column lastColumn>
            <TextWrapper>
              <Typography textAlign="center">
                Or download a summary of my work.
              </Typography>
            </TextWrapper>
            <ButtonWrapper>
              <a
                href={`${config.urlResume}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: " 0 auto" }}
              >
                <TransitionButton value="Get my resume" />
              </a>
            </ButtonWrapper>
          </Column>
        </ColumnWrapper> */}
      </Wrapper>

      <Divider />

      <Wrapper style={{ paddingTop: "5%", }}>
        <Title text="My Works" fontSize="1.75rem" fontWeight={700} />
        <Typography textAlign="center">
          Here a few projects i&apos;ve worked on in the past. Want to see
          more?
          <Link to="/contact" style={{ textDecoration: "none", padding: "0 0 0 1%" }}>
            <CallToAction>Contact me</CallToAction>
          </Link>
        </Typography>
        <ListWrapper maxWidth="70rem">
          {works.map((work) => (
            <Card
              id={work.id}
              key={work.id}
              image={work.image}
              descriptions={work.description}
              link={work.link}
            />
          ))}
        </ListWrapper>
      </Wrapper>
      <Divider />
      <Wrapper>
        <Title text="My Projects" fontSize="1.75rem" fontWeight={700} />
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
          {Experiments.map((experiment) => (
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

export default LandingPage;
