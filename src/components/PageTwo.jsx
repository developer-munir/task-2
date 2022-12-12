import React from "react";
import img1 from "../assets/nexgtv-entertainment-mobile-app-development.png";
import img2 from "../assets/nexgtv-mobile-app-ui-design.png";
import bestCompany from "../assets/world-communication-awards-for-best-digital-experience.png";
import progress from "../assets/svg with paths.svg";
const PageTwo = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" h-screen page-2-left">
          <div>
            <span className="relative left-[400px] top-[180px] z-10">
              <h1 className="text-4xl font-bold">25M+ Downloads</h1>
              <p className="ml-[50px]">on appstore & google playstore</p>
            </span>
            <img
              src={progress}
              className="progress-style relative ml-[450px] page-2-left rounded-full"
              alt=""
            />
          </div>
          <div className="relative bottom-[100px] p-5">
            <div>
              <img src={bestCompany} alt="" />
              <div className="mt-4">
                <h1 className="font-bold text-4xl">ABC 456</h1>
                <p>We are the best</p>
                <p>Web development company</p>
                <p>in the world</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-12">
              <h1 className="text-xl">View Case Study</h1>
              <p className="uppercase text-2xl">skip</p>
            </div>
          </div>
        </div>

        <div className="page-2 flex  h-screen items-center justify-center">
          <img src={img1} className="h-[400px]" alt="" />
          <img src={img2} className="h-[400px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
