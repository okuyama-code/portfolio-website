import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import GoTodoImg from "@/public/goTodo.png";
import discordImg from "@/public/discord.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Learning",
    hash: "#learning",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Go入門",
    description:
      "Udemy講座のGo入門】Golang基礎入門 + 各種ライブラリ + 簡単なTodoWebアプリケーション開発(Go言語)を学習しました。https://www.udemy.com/course/golang-webgosql/",
    tags: ["jQuery", "Go", "sqlite3"],
    imageUrl: GoTodoImg,
  },
  {
    title: "Discocdクローン",
    description:
      "Udemy講座の【Discordクローン開発】React/Redux/Typescript/Firebaseで作るアプリ開発実践講座を学習しました。https://www.udemy.com/course/discord-clone-udemy/ ソースコード https://github.com/okuyama-code/discord-clone",
    tags: ["React", "TypeScript", "Redux", "Tailwind", "Firebase"],
    imageUrl: discordImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Ruby on Rails",
  "Go",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Express",
  "PostgreSQL",
  "Firebase",
  "Framer Motion",
] as const;
