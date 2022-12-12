import React from "react";
import imgone from "../assets/domi-img1.png";
import imgTwo from "../assets/ux-strategy-for-mobile-app-devlopment.png";
import pizza from "../assets/pizza_box.png";
import progress from "../assets/svg with paths.svg";
import coconutOne from "../assets/dominos-bread1.png";
import coconutTwo from "../assets/dominos-bread.png";
const PageOne = ({ imgRef }) => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" h-screen bg-blue-900">
          <div>
            <span className="relative left-[400px] top-[180px] z-10">
              <h3 className="text-2xl">Redefining</h3>
              <h1 className="text-4xl font-bold">UX Strategy</h1>
              <p className="ml-[100px]">and UI design</p>
            </span>
            <img
              src={progress}
              className="progress-style relative ml-[450px] bg-blue-900 rounded-full "
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

        <div className="grid grid-cols-3 h-screen page-1">
          <div>
            <img src={pizza} alt="" />
            <img src={imgone} className="ml-[50px]  mt-[150px]" alt="" />
          </div>
          <div>
            <img
              src={imgTwo}
              className="h-[300px] relative ml-[50px] mt-[100px]"
              alt=""
            />
          </div>
          <div>
            <img src={coconutTwo} className="relative bottom-[100px]" alt="" />
            <img src={coconutOne} className="relative top-[200px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
