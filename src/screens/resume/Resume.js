import React, { useState } from "react";
import "./Resume.css";
import ResumeLists from "../../components/ResumeLists";
import resumeData from "../../components/ResumeData";

const Resume = () => {
  let [theme, setTheme] = useState("white");
  function changeColor(theme) {
    setTheme((prevTheme) => (prevTheme === "black" ? "white" : "black"));
  }

  let styling = {
    backgroundColor: theme,
    color: theme === "black" ? "white" : "black",
  };
  return (
    <div style={styling}>
      <>
        <div id="header" />
        <div className="left" />
        <div className="stuff">
          <br />
          <br />
          <h1>
            Resume
            <button
              onClick={() => changeColor(theme)}
              className="theme"
              style={
                theme === "black"
                  ? { backgroundColor: "white", color: "black" }
                  : { backgroundColor: "black", color: "white" }
              }
            >
              turn {theme === "black" ? "'white'" : "'black'"}
            </button>
          </h1>

          <h2>Emily</h2>
          <hr />
          <br />
          {resumeData.map((data, i) =>
            data.values.length > 0 ? (
              <ResumeLists
                key={i + 1}
                title={data.title}
                values={data.values}
              />
            ) : null
          )}
        </div>
        <div className="right" />
        <div id="footer">
          <h2 id="name">Emily</h2>
        </div>
      </>
    </div>
  );
};

export default Resume;
