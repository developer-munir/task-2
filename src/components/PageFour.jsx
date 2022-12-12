import React from "react";
import img1 from "../assets/melltoo-img1.png";
import img2 from "../assets/melltoo-img2.png";
import company from "../assets/mobile-app-of-the-year-by-entrepreneur.png";
import progress from "../assets/svg with paths.svg";
const PageFour = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" h-screen page-4-left">
          <div>
            <span className="relative left-[400px] top-[180px] z-10">
              <h3 className="text-xl">Biggest Classifieds</h3>
              <h1 className="text-5xl font-bold">East Asia</h1>
              <p className="ml-[100px] text-xl">Countries</p>
            </span>
            <img
              src={progress}
              className="progress-style relative ml-[450px] page-4-left rounded-full"
              alt=""
            />
          </div>
          <div className="relative bottom-[100px] p-5">
            <div>
              <img src={company} alt="" />
              <div className="mt-4">
                <h1 className="font-bold text-4xl">ABC 456</h1>
                <p>We are the best</p>
                <p>Web development company</p>
                <p>in the world</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-10">
              <h1 className="text-xl">View Case Study</h1>
              <p className="uppercase text-2xl">skip</p>
            </div>
          </div>
        </div>

        <div className="page-4 flex  h-screen items-center justify-center">
          <img src={img1} className="h-[400px]" alt="" />
          <img src={img2} className="h-[400px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageFour;
