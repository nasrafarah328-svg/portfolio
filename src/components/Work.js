import React, { useState } from "react";
import { motion } from "framer-motion";
import "./work.css";
const projects = [
  {
    title: "Hello Dear",
    headerQuote: "An app for enhancing the well-being of seniors on iOS and Android, built using React Native.",
    subTitle: "About",
    description:
      "Throughout my role as a UX/Front End Developer, I applied a range of technical skills to drive successful outcomes. I implemented accessibility best practices, ensuring a seamless experience for senior users. By actively incorporating client feedback into design iterations, I delivered tailored solutions that met their specific needs",
    nextDescription:"Collaborating with a cross-functional team, I created wireframes and prototypes using tools like Figma. With expertise in technologies such as React Native and CSS, I developed and implemented responsive user interfaces. My technical proficiency, combined with a client-centric approach, has consistently driven impactful results.",
      
    moreText:
      "Our client had a vision to introduce a senior-focused mobile application that would solve senior loneliness. You can find an article about Hello Dear below.",
    imageSrc: "hello-dear.png",
    githubLink:
      "https://www.algonquincollege.com/college-blog/ac-students-tackle-senior-isolation-and-loneliness-with-mobile-application/",
  },

  {
    title: "Music Playlist",
    headerQuote: "A simple web MP3 personalized playlist.",
    subTitle: "About",
    description:
    "The Music Playlist is a fully functional HTML5 music player designed to provide an immersive and seamless music listening experience. With its user-friendly interface, users can effortlessly play and control a personalized playlist of MP3 files. The player boasts a mobile-first design, ensuring optimal performance on various devices, and is enhanced with captivating CSS animations that enhance the visual appeal.",
    nextDescription:"Powered by JavaScript controls, the Music Playlist offers a range of interactive features, allowing users to navigate through their playlists, adjust volume, and easily switch between tracks. Experience my music playlist by clicking the link below and explore my favorite tunes with style and convenience.",
    

    imageSrc: "music.png",
    githubLink: "https://nasra-playlist.netlify.app/",
  },
  {
    title: "CareSpace",
    headerQuote: "Senior Care App UX Case Study.",
    subTitle: "About",
    nextDescription:
    "By putting the needs and preferences of seniors and caregivers at the forefront, I successfully crafted a senior care app that promotes ease of use, accessibility, and overall well-being.",
    description:
      "Delve into my compelling case study, where I share in-depth insights into the UX design process behind the senior care app. Discover how I navigated through the challenges and complexities of designing for a unique demographic, and explore the innovative solutions and thoughtful design choices that emerged from this journey. Click on the link below to gain valuable insights and be inspired by the transformative potential of user-centered design in the realm of senior care.",
   
    imageSrc: "carespace.png",
    githubLink:
      "https://drive.google.com/drive/folders/16tBxBqwtovb-g7hPP73U_c2EOQAS349C?usp=sharing",
  },
  
  {
    title: "Fresh Mart",
    headerQuote: "My First Case Study: Grocery Store Checkout.",
    subTitle: "About",
    nextDescription:
    "I tackle the user issues surrounding grocery store self-checkouts. With a keen focus on usability heuristics, system status visibility, and recognition over recall.",
    description:
      "Embark on a deep dive into my first case study, where I share the journey of improving the grocery store self-checkout experience. Discover how I addressed usability, system status, and recognition issues, ensuring a smoother, more intuitive process for shoppers. Click the link below to explore the transformative potential of user-centered design in the realm of grocery self-checkouts.",
   
    imageSrc: "grocery.png",
    githubLink:
      "https://drive.google.com/drive/folders/16llj9yx8bKDZOyiLl-Q9PPRgPJnEKerV?usp=drive_link",
  },

];

function Project({
  title,
  headerQuote,
  subTitle,
  description,
  nextDescription,
  moreText,
  imageSrc,
  githubLink,
}) {
  return (
    <div className="selection-project-wrapper">
      <div className="selection-project-text">
        <h2 className="selection-project-title">{title}</h2>
        <h2 className="selection-project-headerQuote">{headerQuote}</h2>
        <h2 className="selection-project-subTitle">{subTitle}</h2>
        <p className="selection-project-description">{description}</p>
        <p className="selection-project-description">{nextDescription}</p>
        <p className="selection-project-moreText">{moreText}</p>
        <h5 className="github-link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            View Project
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
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

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


<div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-item ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="selection-projects">
      <h1>Projects</h1>
        {currentProjects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            headerQuote={project.headerQuote}
            subTitle={project.subTitle}
            description={project.description}
            nextDescription={project.nextDescription}
            moreText={project.moreText}

            imageSrc={project.imageSrc}
            githubLink={project.githubLink}
          />
        ))}
      </div>

  
    </motion.div>
  );
}

export default CustomPagination;
