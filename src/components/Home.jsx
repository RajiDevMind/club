import React from "react";
import "./home.css";
import gymguy from "../assets/gym1.png";

const Home = () => {
  return (
    <>
      <section className="Header">
        <div className="header-container">
          <div className="header-text">
            <div>
              <h1>
                <span>get fit stay&nbsp;healthy,</span> transform your life
              </h1>
              <h4>discover a new you through fitness and welLness</h4>
            </div>
            <div className="btn">
              <span>Begin your Journey</span>
            </div>
          </div>
          <div className="header-img">
            <img src={gymguy} alt="" />
          </div>
        </div>
      </section>
      <section className="Header sec-head"></section>
      {/* <section className="trusted">
        <h3>Brand that trust us</h3>
        <div className="brand-container"></div>
      </section> */}
      <section className="statement">
        <div>
          <h2>our mission</h2>
          <p>
            "At ClubHouse, our mission is to empower individuals to achieve
            their optimal levels of health, fitness, and well-being. We are
            dedicated to providing a supportive and inclusive environment where
            members of all fitness levels can embark on their fitness journey.
            Through expert guidance, state-of-the-art facilities, and a diverse
            range of fitness programs, we are committed to helping our members
            attain their fitness goals, foster a sense of community, and lead
            healthier, happier lives.
          </p>
        </div>
        <div>
          <h2>Core values</h2>
          <p>
            Our core values of dedication, inclusivity, and excellence drive us
            to be the ultimate destination for individuals seeking to transform
            their bodies, enhance their minds, and improve their overall quality
            of life. Join us in becoming the best version of yourself, one
            workout at a time."
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
