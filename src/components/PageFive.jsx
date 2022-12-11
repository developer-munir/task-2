import React from "react";
import img1 from "../assets/karavan-social-networking-app-screen-2.png";
import img2 from "../assets/karavan-social-networking-app-screen.png";

import progress from "../assets/svg with paths.svg";
const PageFive = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" h-screen page-5-left">
          <div>
            <span className="relative left-[400px] top-[180px] z-10">
              <h3 className="text-2xl">Redefining</h3>
              <h1 className="text-4xl font-bold">UX Strategy</h1>
              <p className="ml-[100px]">and UI design</p>
            </span>
            <img
              src={progress}
              className="progress-style relative ml-[450px] page-5-left rounded-full"
              alt=""
            />
          </div>
          <div className="mt-[50px] p-5">
            <div>
              <h1 className="font-bold text-4xl">ABC 456</h1>
              <p>We are the best</p>
              <p>Web development company</p>
              <p>in the world</p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl">View Case Study</h1>
              <p className="uppercase text-2xl">skip</p>
            </div>
          </div>
        </div>

        <div className="page-5   h-screen grid grid-cols-3">
          <div className="mt-4 ml-8">
            <img src={img1} className="h-[250px]" alt="" />
            <img src={img2} className="h-[250px] mt-[40px]" alt="" />
          </div>
          <div className="mt-4 ml-4">
            <img src={img1} className="h-[250px] mt-[50px]" alt="" />
            <img src={img2} className="h-[250px] mt-[60px]" alt="" />
          </div>
          <div className="mt-4 ml-4">
            <img src={img1} className="h-[250px] mt-[120px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
