import React from "react";
import PageFive from "../components/PageFive";
import PageFour from "../components/PageFour";
import PageOne from "../components/PageOne";
import PageSeven from "../components/PageSeven";
import PageSix from "../components/PageSix";
import PageThree from "../components/PageThree";
import PageTwo from "../components/PageTwo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.css";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    const element = imgRef.current;
    gsap.fromTo(
      element,
      { rotation: 0 },
      {
        rotation: 180,
        duration: 3,
        scrollTrigger: {
          trigger: element,
        },
      }
    );
  }, []);
  return (
    <div>
      <PageOne imgRef={imgRef}></PageOne>
      <PageSeven imgRef={imgRef}></PageSeven>
      <PageTwo></PageTwo>
      <PageSix></PageSix>
      <PageFour></PageFour>
      <PageThree></PageThree>
      <PageFive></PageFive>
    </div>
  );
};

export default Home;
