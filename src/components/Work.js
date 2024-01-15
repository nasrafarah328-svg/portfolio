import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import "./work.css";
const projects = [
  {
    title: "Hello Dear",
    headerQuote: "An app for enhancing the well-being of seniors.",
    subTitle: "Mobile App",
    imageSrc: "hello-dear.png",
    githubLink:
      "https://www.figma.com/proto/JQCaCuDKcv5mTXX3xUV88r/Hexagon-Files?page-id=1045%3A7062&type=design&node-id=1451-18794&viewport=1099%2C175%2C0.04&t=qslwdkFDBvHCj0AZ-1&scaling=min-zoom&starting-point-node-id=1451%3A18822&mode=design",
  },

  {
    title: "Music Playlist",
    headerQuote: "A simple web MP3 personalized playlist.",
    subTitle: "Web Design / Development ",
    imageSrc: "music-player.png",
    githubLink: "https://nasra-playlist.netlify.app/",
  },
  {
    title: "CareSpace",
    headerQuote: "Senior Care App UX Case Study.",
    subTitle: "UX / UI Design",
    imageSrc: "carespace.png",
    githubLink:
      "https://drive.google.com/drive/folders/16tBxBqwtovb-g7hPP73U_c2EOQAS349C?usp=sharing",
  },

  {
    title: "Fresh Mart",
    headerQuote: "My First Case Study: Grocery Store Checkout.",
    subTitle: "UX / UI Design",
    imageSrc: "fresh-mart.png",
    githubLink:
      "https://drive.google.com/drive/folders/16llj9yx8bKDZOyiLl-Q9PPRgPJnEKerV?usp=drive_link",
  },

  {
    title: "Personal Goals",
    headerQuote: "A simple React app for creating a list of goals.",
    subTitle: "Front End / React Development",
    imageSrc: "react-goals.png",
    githubLink: "https://october-goals.netlify.app/",
  },
];

function Project({ title, headerQuote, subTitle, imageSrc, githubLink }) {
  return (
    <div className="selection-project-wrapper">
      <div className="selection-project-text">
        <h2 className="selection-project-title">{title}</h2>
        <h4 className="selection-project-subTitle">{subTitle}</h4>
        <h2 className="selection-project-headerQuote">{headerQuote}</h2>

        <h3 className="github-link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <span className="github-text">View Project</span> <BsArrowUpRight />
          </a>
        </h3>
      </div>
      <div className="selection-project-image">
        <img className="selection-project-image" src={imageSrc} alt={title} />
      </div>
    </div>
  );
}

function CustomPagination() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="selection-projects">
        <div className="columns">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              subTitle={project.subTitle}
              headerQuote={project.headerQuote}
              imageSrc={project.imageSrc}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CustomPagination;
