import React, { useState } from "react";
import "./work.css";

function Work() {
  const [showLearning, setShowLearning] = useState(false);

  const featuredProjects = [
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
      subTitle: "Web Design / Development",
      imageSrc: "music-player.png",
      githubLink: "https://nasra-playlist.netlify.app/",
    },
    {
      title: "Personal Goals",
      headerQuote: "A simple React app for creating a list of goals.",
      subTitle: "Front End / React Development",
      imageSrc: "react-goals.png",
      githubLink: "https://october-goals.netlify.app/",
    },
  ];

  const learningProjects = [
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
  ];

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <div className="selection-project-wrapper" key={index}>
        <div className="selection-project-text">
          <h3 className="selection-project-title">{project.title}</h3>
          <p className="selection-project-subTitle">{project.subTitle}</p>
          <p className="selection-project-headerQuote">{project.headerQuote}</p>
          <a
            href={project.githubLink}
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
        <div className="selection-project-image">
          <img src={project.imageSrc} alt={project.title} />
        </div>
      </div>
    ));

  return (
    <div className="selection-projects">
      <h2 className="selection-projects-header-text">Featured Work</h2>
      {renderProjects(featuredProjects)}

      <div className="github-section">
        <button
          className="github-link"
          onClick={() => setShowLearning(!showLearning)}
        >
          {showLearning ? "Hide Learning Projects ▲" : "Show Learning Projects ▼"}
        </button>
      </div>

      {showLearning && (
  <div className="learning-projects-section">
    <h2 className="selection-projects-header-text">Learning Projects</h2>
    <div className="learning-projects-container">
  {learningProjects.map((project, index) => (
    <div className="learning-project-card" key={index}>
      <img src={project.imageSrc} alt={project.title} />
      <div className="learning-project-text">
        <h3>{project.title}</h3>
        <p>{project.headerQuote}</p>
        <p>{project.subTitle}</p>
        <a
          href={project.githubLink}
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </div>
    </div>
  ))}
</div>

  </div>
)}

    </div>
  );
}

export default Work;
