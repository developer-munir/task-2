import React from "react";
import PageOne from "../components/PageOne";
import PageThree from "../components/PageThree";
import PageTwo from "../components/PageTwo";
import "./home.css";
const Home = () => {
  return (
    <div>
      <PageOne></PageOne>
      <PageTwo></PageTwo>
      <PageThree></PageThree>
    </div>
  );
};

export default Home;
