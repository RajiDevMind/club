import React, { useState, useEffect } from "react";
// import './styles.css'; // Import your CSS file

export const FixedNavbar = ({ children }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const stopScrollAt = 200; // Adjust this value to your desired stopping point

      if (offset > stopScrollAt && !isFixed) {
        setIsFixed(true);
      } else if (offset <= stopScrollAt && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return <div className={`navbar ${isFixed ? "fixed" : ""}`}>{children}</div>;
};

// export default FixedNavbar;
