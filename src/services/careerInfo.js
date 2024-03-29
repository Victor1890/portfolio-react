import React from 'react';
import { DiWindows } from "react-icons/di";
import { BsTerminal } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";

const careerInfo = [
  {
    id: 1,
    icon: <DiWindows />,
    title: "Operative System",
    description:
      "I consider myself a super curious person and when it comes to experimenting with OS and I consider all this to be a great experience.",
    knowledgeList: "Windows, GNU/Linux"
  },
  {
    id: 2,
    icon: <GoBrowser />,
    title: "Frontend Development",
    description:
      'I consider the visual part to be important to us and I think. I am the person to create great experiences for your websites.',
    knowledgeList: "HTML5, CSS3, JavaScript, Sass, React.JS, Next.JS, WordPress"
  },
  {
    id: 3,
    icon: <BsTerminal />,
    title: "Backend Develoment & Others",
    description:
      "A visually impressive site but without functionality, is the same as being rich and not knowing what to spend on, to avoid this, I am also a person capable of creating both visual and functional websites.",
    knowledgeList:
      'Git, JavaScript, TypeScript, Node.JS, PL/SQL, PostgreSQL, TypeORM, Sequelize, Docker, etc'
  }
];

export default careerInfo;
