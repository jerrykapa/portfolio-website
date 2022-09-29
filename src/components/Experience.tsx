import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="personal_tm_news">
        <br />

        <div className="personal_tm_title">
          <div className="title_flex">
            <div className="left">
              <h3>Professional experience</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="title_flex personal_tm_title">
          <h3>Junior Front-End developer</h3>

          <h4>Unicredit Services (employed through Kirey Group)</h4>
          <p>Oct 2021 - Present</p>
          <br />
          <p>
            Developed the Front-End side of web applications in the banking
            sector.
          </p>

          <p>
            Technologies used Include: React, Angular, Typescript, SASS,
            Git/Svn, i18n, custom libraries.
          </p>
          <br />
          <p>
            During my time here I first worked for a couple of months on a large
            scale project mainly dealing with incidents, reports, bugfixing and
            improving the visuals of the application. Afterwards I worked in an
            Agile scrum team to develop a new project from scratch to finish,
            the project being a great success both for the company and for me
            professionally.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
