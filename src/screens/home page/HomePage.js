import React from "react";
import Navbar from "../../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar navItems="home" navItems1="about" navItems2="contact" />;
      {/* <Navbar /> */}
    </div>
  );
}

export default HomePage;
