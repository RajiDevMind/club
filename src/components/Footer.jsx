import React from "react";

const Footer = ({ cYear }) => {
  return (
    <>
      <footer>
        <div className="footer">
          <u>about us</u>
          <p>consultation</p>
          <p>consultation</p>
          <p>consultation</p>
          <p>consultation</p>
        </div>
        <div className="footer">
          <u>about us</u>
          <p>consultation</p>
          <p>consultation</p>
          <p>consultation</p>
          <p>consultation</p>
        </div>
        <div className="footer">
          <u>about us</u>
          <p>consultation</p>
          <p>consultation</p>
          <p>consultation</p>
          <p>consultation</p>
        </div>
      </footer>
      <div
        style={{
          color: "#ffffff",
          background: "#000000",
          textAlign: "center",
          fontSize: "50px",
          paddingBottom: "15px",
        }}
      >
        <p> &copy; Raji Web Solutions {cYear} </p>
      </div>
    </>
  );
};

export default Footer;
