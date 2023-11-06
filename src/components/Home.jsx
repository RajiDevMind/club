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
      <section className="trusted">
        <h3>Brand that trust us</h3>
      </section>
    </>
  );
};

export default Home;
