import React from "react";
import { motion } from "framer-motion";
import "./work.css";

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="selection-projects">
        <div className="selection-project-wrapper">
          <div className="selection-project-text">
            <h2 className="selection-project-title">Hello Dear</h2>
            <p className="selection-project-description">
              A mobile application that aims to enhance senior well-being.
              <br></br>
              <br></br>
              <span className="selection-text-wrapper-three">
                About <br></br>
              </span>
              In my final semester, several classmates and I were paired with a
              client to design and development a mobile application.
              <br></br>
              Our client had a vision to introduce a senior focused mobile
              application, that will solve senior lonliness and isolation.
              <br></br>
              <br></br>
              We also particpated in the{" "}
              <span className="selection-text-wrapper-five">
                {" "}
                <a
                  href="https://www.algonquincollege.com/arie/re-action/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RE/ACTION
                </a>
              </span>{" "}
              showcase at Algonquin College. You can find an article about Hello
              Dear{" "}
              <span className="selection-text-wrapper-five">
                {" "}
                <a
                  href="https://www.algonquincollege.com/college-blog/ac-students-tackle-senior-isolation-and-loneliness-with-mobile-application/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                </a>
              </span>{" "}
              <br></br>
              <br></br>
              <h5 className="github-link">
                <a
                  href="https://github.com/Team-4-Hexagon/hello-dear"
                  target="_blank"
                >
                  {" "}
                  Github Link
                </a>
              </h5>
            </p>
          </div>
          <div className="selection-project-image">
            <img
              className="selection-project-image"
              src="hello-dear.png"
              alt="Hello Dear"
            />
          </div>
        </div>

        <div className="selection-project-wrapper">
          <div className="selection-project-text">
            <h2 className="selection-project-title">Music Playlist</h2>
            <p className="selection-project-description">
              A simple MP3 personalized playlist.
              <br></br>
              <br></br>
              <span className="selection-text-wrapper-three">
                About <br></br>
              </span>
              The Music Playlist is a fully functional HTML5 music player that
              allows users to play and control a playlist of MP3 files.
              <br></br>
              It features a mobile-first design, complete with CSS animations,
              and is powered by JavaScript controls. <br></br>The playlist can
              be accessed through a user-friendly interface. Additionally, users
              can control the player's functionality by clicking on the list
              items in the playlist area.
              <br></br>
              <br></br>
              You can view the playlist through the Netlify link below.
              <br></br>
              <h5 className="github-link">
                <a href="https://nasra-playlist.netlify.app/" target="_blank">
                  {" "}
                  Netlify Link
                </a>
              </h5>
            </p>
          </div>
          <div className="selection-project-image">
            <img
              className="selection-project-image"
              src="music.png"
              alt="Hello Dear"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
