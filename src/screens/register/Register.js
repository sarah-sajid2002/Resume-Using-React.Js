import React, { useEffect, useState } from "react";

const Register = () => {
  function handleRegister(event) {
    event.preventDefault(); //do not reload the screen on calling this function
    console.log("hello world");
  }
  function increment(event) {
    setAge(age + 1);
    event.preventDefault();
    console.log(age);
  }
  // use state hook
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let [age, setAge] = useState(13);

  console.log(email);

  //use effect hook
  useEffect(() => {}, [age]);

  // conditional rendering
  return (
    <div className="container mt-5">
      {age > 20 ? (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div style={{ marginTop: "20px" }} className="form-group mt-10">
                <label htmlFor="name">email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{ marginTop: "20px" }} className="form-group mt-10">
                <label htmlFor="email">password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your email"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={handleRegister}
                style={{ marginTop: "20px" }}
                type="submit"
                className="btn btn-primary mt-10"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h1>no you are kid</h1>
          <button onClick={increment}>increment</button>
        </div>
      )}
    </div>
  );
};

export default Register;
