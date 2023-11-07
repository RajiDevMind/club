import React from "react";
import vec1 from "../assets/1.jpg";
import vec2 from "../assets/2.jpg";
import vec3 from "../assets/3.jpg";
import vec4 from "../assets/4.jpg";
import vec5 from "../assets/5.jpg";
import vec6 from "../assets/6.jpg";
import vec7 from "../assets/7.jpg";
import vec8 from "../assets/8.jpg";
import vec9 from "../assets/9.jpg";

const Description = () => {
  return (
    <>
      <section className="description">
        <div>
          <img src={vec4} alt="" />
          <h5>support</h5>
        </div>
        <div>
          <img src={vec2} alt="" />
          <h5>support</h5>
        </div>
        <div>
          <img src={vec3} alt="" />
          <h5>support</h5>
        </div>
      </section>
    </>
  );
};

export default Description;
