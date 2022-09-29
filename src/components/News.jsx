import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
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
        <div className="personal_tm_title">
          <div className="title_flex">
            <div className="left">
              <h3>Personal projects</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/1.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">React, Firebase, Tailwind</p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Dogstagram
                </h3>
                <p>
                  <a
                    href="https://dogstagram-khaki.vercel.app/"
                    target="_blank"
                    className="projects-anchor"
                  >
                    Live demo here
                  </a>
                </p>
                <div className="personal_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Details</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="personal_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/1.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <h3 className="title">Dogstagram</h3>
                        {/* <p>
                          <a
                            href="https://dogstagram-khaki.vercel.app/"
                            target="_blank"
                            className="projects-anchor"
                          >
                            Live demo here
                          </a>
                        </p> */}
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Dogstagram is the project that taught me the basics
                            of organised, well-structured and interaction with
                            apis.
                          </p>
                          <p>
                            Built to familiarize myself more with React, there
                            are things I'm currently improving on this project,
                            such as migration from Javascript to Typescript,
                            updating to the latest Firebase release, and adding
                            storage of photos with an upload capability.
                          </p>
                          <p>
                            Furthermore, I am working to extending the
                            functionality of this project to allow the user to
                            upload their own photos, which involves interacting
                            with a few new apis.
                          </p>
                        </div>
                        {/* END DESCRIPTION */}

                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    {/* By <a href="#">Brook Kennedy</a>
                    <span>22 March 2021</span> */}
                    React, Axios, Graphql
                  </p>
                </div>
                {/* END EXTRA */}
                <h3 className="title" onClick={toggleModalTwo}>
                  Online store
                </h3>
                <p>
                  <a
                    href="https://github.com/jerrykapa/scandiweb-junior-react-store"
                    target="_blank"
                    className="projects-anchor"
                  >
                    Repo
                  </a>
                </p>

                <div className="personal_tm_read_more">
                  <a onClick={toggleModalTwo}>
                    <span>Details</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="personal_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/2.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}

                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            This project was created as part of a coding
                            challenge for a programming position.
                          </p>
                          <p>
                            The store has the capability of the user adding or
                            removing items form the cart which is stored in a
                            Redux state, uses axios to fetch data from a Qraphql
                            endpoint and allows the choice of different types of
                            products, such as color, size, or storage capacity
                            depending on the product.
                          </p>
                          <p>
                            It features the landing page, a navbar in which the
                            user can sort the items or change the currency, a
                            product page which changes based on the product, a
                            cart page and a minicart component that can be
                            accessed wherever in the application.
                          </p>
                        </div>

                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/3.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">React</p>
                </div>

                <h3 className="title" onClick={toggleModalThree}>
                  Simple reviews carrousel
                </h3>
                <p>
                  <a
                    href="https://app.netlify.com/sites/youthful-snyder-3139e5/overview"
                    target="_blank"
                    className="projects-anchor"
                  >
                    Live demo here
                  </a>
                </p>
                <div className="personal_tm_read_more">
                  <a onClick={toggleModalThree}>
                    <span>Details</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="personal_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/3.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <p className="bigger">
                          Simple component made to get more familiar with React
                        </p>
                      </div>
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            This is a simple reviews/testimonies component made
                            to learn React.
                          </p>
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}
        </ul>
      </div>
    </>
  );
};

export default News;
