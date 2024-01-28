import React from "react";
import data from "./data";
const UserList = () => {
  return (
    <div style={{ width: "800px", display: "block", margin: "auto" }}>
      {data.map(({ name, email, age }) => (
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
          <p>{age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
