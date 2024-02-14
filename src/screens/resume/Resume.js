import React from "react";
import "./Resume.css";
import ResumeLists from "../../components/ResumeLists";
const Resume = () => {
  return (
    <div>
      <>
        <div id="header" />
        <div className="left" />
        <div className="stuff">
          <br />
          <br />
          <h1>Resume</h1>
          <h2>Emily</h2>
          <hr />
          <br />

          <ResumeLists
            title="Interests"
            values={[
              "Drawing",
              "Photography",
              "Design",
              "Programming",
              "Computer Science",
            ]}
          />

          <ResumeLists
            title="Skills"
            values={[
              "Web Design with HTML CSS",
              "Education",
              <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
                Wilton High School
              </a>,
              <a href="https://www.silvermineart.org/">
                Silvering School of Arts
              </a>,
            ]}
          />

          <ResumeLists
            title="Education"
            values={[
              <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
                Wilton High School
              </a>,
              <a href="https://www.silvermineart.org/">
                Silvermine School of Arts
              </a>,
              "Codeacademy",
            ]}
          />

          <ResumeLists
            title="Experience"
            values={[
              "Student Technology Intern for Wilton School District",
              "Babysitter",
            ]}
          />

          <ResumeLists
            title="Extracurriculars"
            values={["Recycling Club", "Gardening Club", "Book Club"]}
          />
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
