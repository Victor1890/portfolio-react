import React from "react";
import { Link } from "@reach/router";
import careerInfo from "../../services/careerInfo";
import Paper from "./paper";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import Avatar from "../../components/avatar";
import Image from "../../components/image";
import { TransitionButton } from "../../components/button";
import { Title, Typography } from "../../components/typography";
import {
  ImgWrapper,
  Container,
  Wrapper,
  TitleWrapper,
  ButtonWrapper,
  CenteredContainer,
  CenteredWrapper,
  Column,
  ColumnWrapper,
  PaperComponent,
  TextWrapper,
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
          <Image src="/hero.svg" alt="" />
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
        <TitleWrapper>
          <Title fontSize="1.5rem" fontWeight={800}>
            Learn more about me
          </Title>
        </TitleWrapper>
        <ColumnWrapper>
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
                href={`${process.env.REACT_APP_RESUME_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: " 0 auto" }}
              >
                <TransitionButton value="Get my resume" />
              </a>
            </ButtonWrapper>
          </Column>
        </ColumnWrapper>
      </Wrapper>
    </Container>
  </Layout>
);

export default LandingPage;
