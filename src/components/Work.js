import React, { useState } from "react";
import { motion } from "framer-motion";
import "./work.css";

const projects = [
  {
    title: "Hello Dear",
    headerQuote:"A mobile app that enhances senior well-being.",
    subTitle: "About",
    description:
      "In my final semester, several classmates and I were paired with a client to design and develop a mobile application. My role was the UX Designer and Front End Developer.",
      moreText:
      "Our client had a vision to introduce a senior-focused mobile application that would solve senior loneliness. You can find an article about Hello Dear below.",
    imageSrc: "hello-dear.png",
    githubLink: "https://www.algonquincollege.com/college-blog/ac-students-tackle-senior-isolation-and-loneliness-with-mobile-application/",
  },
  {
    title: "Music Playlist",    
    headerQuote:"A simple MP3 personalized playlist.",
    subTitle: "About",
    description:
      "The Music Playlist is a fully functional HTML5 music player that allows users to play and control a playlist of MP3 files. It features a mobile-first design, complete with CSS animations, and is powered by JavaScript controls. ",
      moreText:"The playlist can be accessed through a user-friendly interface. Click the link below to view the playlist.",
    imageSrc: "music.png",
    githubLink: "https://nasra-playlist.netlify.app/",
  },
  // Add more projects as needed
];

function Project({ title, headerQuote, subTitle, description, moreText, imageSrc, githubLink }) {
  return (
    <div className="selection-project-wrapper">
      <div className="selection-project-text">
        <h2 className="selection-project-title">{title}</h2>
        <h2 className="selection-project-headerQuote">{headerQuote}</h2>
        <h2 className="selection-project-subTitle">{subTitle}</h2>
        <p className="selection-project-description">{description}</p>
        <p className="selection-project-moreText">{moreText}</p>
        <h5 className="github-link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            View More
          </a>
        </h5>
      </div>
      <div className="selection-project-image">
        <img className="selection-project-image" src={imageSrc} alt={title} />
      </div>
    </div>
  );
}

function CustomPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 1;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="selection-projects">
        {currentProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            headerQuote={project.headerQuote}
            subTitle={project.subTitle}
            description={project.description}
            moreText={project.moreText}
            imageSrc={project.imageSrc}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-item ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default CustomPagination;
