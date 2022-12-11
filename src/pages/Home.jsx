import React from "react";
import progress from "../assets/svg with paths.svg";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className=" h-screen bg-slate-500">
          <div>
            <span className="relative left-[400px] top-[180px] z-10">
              <h3 className="text-2xl">Redefining</h3>
              <h1 className="text-4xl font-bold">UX Strategy</h1>
              <p className="ml-[100px]">and UI design</p>
            </span>
            <img
              src={progress}
              className="progress-style fixed ml-[450px] bg-slate-500 rounded-full"
              alt=""
            />
          </div>
          <div className="mt-[280px] p-5">
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
        <div className=" h-screen">
          {/* <PageOne></PageOne> */}

          <PageTwo></PageTwo>
        </div>
      </div>
    </div>
  );
};

export default Home;
