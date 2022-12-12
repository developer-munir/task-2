import React from "react";
import page1 from "../assets/erp-app-development-service.png";

import progress from "../assets/svg with paths.svg";
const PageSix = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" h-screen bg-slate-500">
          <div>
            <span className="relative left-[400px] top-[180px] z-10">
              <h3 className="text-xl"> Developing ERP Solution for</h3>
              <h1 className="text-4xl font-bold">Text Headline</h1>
              <p className="ml-[100px]">in furniture industry</p>
            </span>
            <img
              src={progress}
              className="progress-style relative ml-[450px] bg-slate-500 rounded-full"
              alt=""
            />
          </div>
          <div className=" p-5">
            <div>
              <h1 className="font-bold text-4xl">ABC 678</h1>
              <p>Best since 2017</p>
              <p>We offier wide ronge of</p>
              <p>Web development and app development</p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <h1 className="text-xl">View Case Study</h1>
              <p className="uppercase text-2xl">skip</p>
            </div>
          </div>
        </div>

        <div className="page-6 h-screen">
          <img src={page1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageSix;
