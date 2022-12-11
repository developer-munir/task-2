import React from "react";
import PageFive from "../components/PageFive";
import PageFour from "../components/PageFour";
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
      <PageFour></PageFour>
      <PageFive></PageFive>
    </div>
  );
};

export default Home;
