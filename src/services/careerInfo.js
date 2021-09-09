import React from "react";
import { DiWindows } from "react-icons/di";
import { BsTerminal } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";

const careerInfo = [
  {
    id: 1,
    icon: <DiWindows />,
    title: `Operative System`,
    description: `I consider myself a super curious person and when it comes to experimenting with OS and I consider all this to be a great experience.`,
    knowledgeList: `Windows, GNU/Linux: Ubuntu`,
  },
  {
    id: 2,
    icon: <GoBrowser />,
    title: "Frontend Development",
    description:
      "I consider the visual part to be important to us and I think. I am the person to create great experiences for your websites.",
    knowledgeList: "HTML5, CSS3, Sass, JavaScript, ReactJs, NextJs",
  },
  {
    id: 3,
    icon: <BsTerminal />,
    title: "Backend Develoment & Others",
    description: `A visually impressive site but without functionality, is the same as being rich and not knowing what to spend on, to avoid this, I am also a person capable of creating both visual and functional websites.`,
    knowledgeList:
      "Terminal, Git, Github, ASP.NET C#, JavaScript, TypeScript, NodeJs, ExpressJs, MongoDB, SQL Server.",
  },
];

export default careerInfo;
