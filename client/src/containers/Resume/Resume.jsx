import React from "react";
import Navbar from "../Navbar/Navbar";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="row">
        <div className="col-sm-12 text-center">
          <embed src="./Images/Resume.pdf" width="800" height="2100"/>
        </div>
      </div>
    </div>
  );
};

export default Resume;
