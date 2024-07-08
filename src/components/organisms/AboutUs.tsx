import React from "react";
import RoundBoxDetail from "../molecules/AboutUsPage/RoundBoxDetail";

const AboutUs = () => {
  return (
    <div className="w-full h-full">
      {/* <div className="ml-5 m-10 text-center">
        <span className="!text-[30px]">About Us</span>
      </div> */}
      <div className=" text-center flex items-center justify-center bg-dark-blue w-full h-[170px] mt-[-60px]">
        <span className="!text-[30px] !text-white mt-[10px]">About Us</span>
      </div>
      {/* <div className="flex justify-center">
        <div className="w-[100%] border-b-[1px] border-solid border-black" />
      </div> */}
      <div className="box-container flex flex-col ">
        <RoundBoxDetail />
      </div>
    </div>
  );
};

export default AboutUs;
