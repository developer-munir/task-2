import React from "react";
import img1 from "../assets/nasa-fitness-tracking-mobile-app.png";
import img2 from "../assets/measure-total-body-weight-through-fitness-app.png";
import nasa from "../assets/nasa-mobile-app.png";
import progress from "../assets/svg with paths.svg";
const PageSeven = ({ imgRef }) => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" h-screen page-7-left">
          <div>
            <span className="relative z-50 left-[400px] top-[220px] ">
              <h3>Powered by advance</h3>
              <img src={nasa} className="my-2" alt="" />
              <p className="ml-[100px]">algorithms</p>
            </span>
            <img
              src={progress}
              className="progress-style z-40 relative ml-[450px] page-7-left rounded-full"
              alt=""
            />
          </div>
          <div className=" p-5">
            <div className="relative bottom-[20px]">
              <h1 className="font-bold text-4xl">ABC 456</h1>
              <p>We are the best</p>
              <p>Web development company</p>
              <p>in the world</p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Coming soon</h1>
              <p className="uppercase text-2xl">skip</p>
            </div>
          </div>
        </div>

        <div className="page-7 items-center flex h-screen ">
          <img
            src={img1}
            className="h-[400px] relative left-[50px] pizza"
            alt=""
          />
          <img
            ref={imgRef}
            src={img2}
            className="h-[400px] relative left-[100px] bottom-[100px] "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PageSeven;
