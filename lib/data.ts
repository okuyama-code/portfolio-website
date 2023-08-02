import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";
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
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;


export const experiencesData = [
  {
    title: "UdemyやYoutubeのチュートリアル動画で独学",
    location: "千葉県",
    description:
      "主にShin CodeさんのyoutubeやUdemyを教材としてReact, Next.js, Typescript, Node.js, Firebaseを学習しました。DiscordクローンやSNSクローンをハンズオンで学習しました。",
    icon: React.createElement(LuGraduationCap),
    date: "2023/3 - 2023/5",
  },
  {
    title: "海外のYoutubeを教材として独学",
    location: "千葉県",
    description:
      "Next.js13, Typescript, FirebaseなどでtwiiterクローンやLinkedinクローンを写経しました。",
    icon: React.createElement(LuGraduationCap),
    date: "2023/5 - 2023/7",
  },
  {
    title: "モダンな自社開発企業への転職を意識しGolang, Ruby on Railsを基礎から独学",
    location: "千葉県",
    description:
      "UdemyのGolangチュートリアルやprogateのRuby on Rails、書籍ではLinux標準教科書、プロになるためのWeb技術入門、GitHub実践入門、キタミ式イラストIT塾基本情報技術者、スッキリわかるSQL入門などを学習しています。",
    icon: React.createElement(BiLogoGoLang),
    date: "2023/7 - 現在",
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
