import React, { useState } from "react";
import SEO from "../../components/seo";
import Layout from "../../components/layout";
import Avatar from "../../components/avatar";
import { DefaultButton } from "../../components/button";
import { Title } from "../../components/typography";
import {
  FieldWrapper,
  Form,
  Input,
  Label,
  Row,
  SectionTitle,
  TextArea,
} from "./style";

const Contact = ({ location: { pathname } }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const endPoint = `${process.env.REACT_APP_REQUEST_URL}`;
    const baseUrl = window.location.origin;

    await fetch(endPoint, { method: "POST", body: formData })
      .then(() => {
        window.location.replace(`${baseUrl}/success`);
      })
      // eslint-disable-next-line no-console
      .catch((e) => console.error(e.message));
  };

  return (
    <Layout location={pathname}>
      <Avatar defaultImage="/avatar.svg" hoverImage="/hover_avatar.svg" />
      <SEO
        title="Contact | Full-Stack Developer"
        description="Personal Web Developer Portfolio. I'm a Web developer with emphasis on Full-Stack and other technology like C#, Python and JavaScript"
      />
      <SectionTitle>
        <Title fontSize="1.75rem">
          Thanks for taking the time to reach out. How can I help you today?
        </Title>
      </SectionTitle>
      <Form onSubmit={handleSubmit} autoComplete="on" method="POST">
        <Row>
          <FieldWrapper>
            <Label>Your name</Label>
            <Input
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FieldWrapper>
          <FieldWrapper last>
            <Label>Your Email</Label>
            <Input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FieldWrapper>
        </Row>
        <FieldWrapper>
          <Label>Your message</Label>
          <TextArea
            name="message"
            required
            wrap="hard"
            cols="40"
            rows="10"
            spellcheck
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </FieldWrapper>

        <DefaultButton type="submit" value="Submit" minWidth="12.25rem" />
      </Form>
    </Layout>
  );
};

export default Contact;
