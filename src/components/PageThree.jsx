import React from "react";
import img1 from "../assets/veme-app-ui-design.png";
import img2 from "../assets/veme-blockchain-app-developed.png";

import progress from "../assets/svg with paths.svg";
const PageThree = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" h-screen page-3-left">
          <div>
            <span className="relative z-50 left-[400px] top-[180px] ">
              <h1 className="text-4xl font-bold">UX Strategy</h1>
              <p className="ml-[100px]">and UI design</p>
            </span>
            <img
              src={progress}
              className="progress-style z-40 relative ml-[450px] page-3-left rounded-full"
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

        <div className="page-3 items-center flex h-screen ">
          <img src={img1} className="h-[400px] relative left-[50px]" alt="" />
          <img
            src={img2}
            className="h-[400px] relative left-[100px] bottom-[100px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PageThree;
