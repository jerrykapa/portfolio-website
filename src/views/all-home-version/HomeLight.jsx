import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
import Experience from "../../components/Experience";
import News from "../../components/News";
import Contact from "../../components/Contact";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import { useState } from "react";

const HomeLight = () => {
  const [isMockLoading, setIsMockLoading] = useState(true);
  const switchTheme = () => {
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsMockLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isMockLoading ? (
        <Loading />
      ) : (
        <>
          <nav className="navbar">
            {" "}
            {/* <button onClick={switchTheme}>Test</button> */}
            <>
              <input
                onClick={switchTheme}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
              />
              <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
              >
                <span className={`react-switch-button`} />
              </label>
            </>
          </nav>
          <Tabs>
            <TabList>
              {/* START LEFT MENU CONTENT */}
              <div className="leftpart">
                <div className="leftpart_inner">
                  <div className="menu">
                    <ul>
                      <Tab className="menu-tab">
                        <img
                          className="svg"
                          src="/assets/img/svg/home-run.svg"
                          alt="homerun"
                        />
                        <span className="menu_content">Home</span>
                      </Tab>
                      <Tab className="menu-tab">
                        <img
                          className="svg"
                          src="/assets/img/svg/avatar.svg"
                          alt="avatar"
                        />
                        <span className="menu_content">About Me</span>
                      </Tab>
                      <Tab className="menu-tab">
                        <img
                          className="svg"
                          src="/assets/img/svg/briefcase.svg"
                          alt="briefcase"
                        />
                        <span className="menu_content">Experience</span>
                      </Tab>
                      <Tab className="menu-tab">
                        <img
                          className="svg"
                          src="/assets/img/svg/paper.svg"
                          alt="paper"
                        />
                        <span className="menu_content">Projects</span>
                      </Tab>
                      <Tab className="menu-tab">
                        <img
                          className="svg"
                          src="/assets/img/svg/mail.svg"
                          alt="mail"
                        />
                        <span className="menu_content"> Contact</span>
                      </Tab>
                    </ul>
                  </div>
                  {/* END MENU */}
                </div>
              </div>
              {/* END LEFT MENU CONTENT */}
            </TabList>
            {/* END SIDEBAR TABLIST */}

            {/* START RIGHT PART CONTENT */}
            <div className="rightpart">
              <div className="rightpart_in">
                <div className="personal_tm_section">
                  <div className="container">
                    <TabPanel>
                      <Home />
                    </TabPanel>
                    {/* END HOME MENU TAB CONTENT */}

                    <TabPanel>
                      <About />
                    </TabPanel>
                    {/* END ABOUT MENU TAB CONTENT */}

                    <TabPanel>
                      <Experience />
                    </TabPanel>
                    {/* END PORTFOLIO MENU TAB CONTENT */}

                    <TabPanel>
                      <News />
                    </TabPanel>
                    {/* END NEWS MENU TAB CONTENT */}

                    <TabPanel>
                      <Contact />
                    </TabPanel>
                    {/* END CONTACT MENU TAB CONTENT */}
                    <TabPanel></TabPanel>
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT PART CONTENT */}
          </Tabs>
          {/* END TABS */}
        </>
      )}
    </>
  );
};

export default HomeLight;
