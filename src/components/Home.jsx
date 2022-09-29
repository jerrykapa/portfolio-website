import React from "react";
import Loading from "./Loading";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="personal_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">I'm Cristian</h3>
            <h4 className="name-title">A Front-End Developer</h4>
            <p className="job">
              I create great user interfaces and web apps using modern
              technologies.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
