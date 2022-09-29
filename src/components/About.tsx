import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";
import Loading from "./Loading";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const skills = [
    {
      name: "TypeScript",
      image:
        "https://i.postimg.cc/FF80ZYyq/Typescript-logo-2020-svg-1234x1234.png",
    },
    {
      name: "HTML5",
      image: "https://i.imgur.com/38lraZs.png",
    },
    {
      name: "CSS3",
      image: "https://i.imgur.com/lO0Sw1M.png",
    },
    {
      name: "React",
      image: "https://i.imgur.com/DNayuEY.png",
    },
    {
      name: "Angular",
      image: "https://i.imgur.com/aTOMfrV.png",
    },
    {
      name: "Redux",
      image: "https://i.imgur.com/FjxqWQg.png",
    },
    {
      name: "Firebase",
      image: "https://i.imgur.com/C71wsxD.png",
    },
    {
      name: "Graphql",
      image: "https://i.imgur.com/eRVuFoo.png",
    },
    {
      name: "SASS",
      image: "https://i.imgur.com/5oXZ8s6.png",
    },
  ];

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="personal_tm_about">
        {/* <div className="about_image">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div> */}
        <h1 className="about-text">I worked with these technologies:</h1>

        <div className="skills-container">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="skill-section">
                <img className="skill-image" src={skill.image} alt="" />
                <p className="skill-text">{skill.name}</p>
              </div>
            );
          })}
        </div>

        <p className="about-text-p">
          A curious developer, I am an highly adaptable person with a passion
          for web development, always looking to contribute to something new and
          work with people with whom I can learn from.
        </p>
      </div>
    </>
  );
};

export default About;
