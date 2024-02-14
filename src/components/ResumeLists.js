import React from "react";

const ResumeLists = (props) => {
  const { title, values } = props;
  return (
    <div>
      <p className="head">{title}</p>
      <ul>
        {values.map((value, i) => (
          <li key={i + 1}>
            {i + 1} : {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeLists;
