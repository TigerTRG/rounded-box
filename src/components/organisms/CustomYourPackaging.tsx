import React from "react";
import Image from "next/image";
import CustomSizePackage from "../molecules/CustomPage/CustomSizePackage";
import CustomMaterialPackage from "../molecules/CustomPage/CustomMaterialPackage";
import Registration from "../molecules/HomePage/Registration";
// ml-5 m-10
const CustomYourPackaging = () => {
  return (
    <div className="w-full h-full ">
      <div className=" text-center flex items-center justify-center bg-dark-blue w-full h-[170px] mt-[-60px] mb-16">
        <span className="!text-[30px] !text-white mt-[10px]">
          Customize your packaging
        </span>
      </div>
      {/* <div className="flex justify-center">
        <div className="w-[90%] border-b-[1px] border-solid border-black mb-5" />
      </div> */}
      <div className="box-container flex flex-row m-5 mb-20">
        <div className="box-categories w-[50%] flex flex-col">
          <CustomSizePackage />
          <CustomMaterialPackage />
        </div>
        <div className="box-result w-[50%] mr-10">
          <Image
            src="/images/Homepage/tube.png"
            alt="tube"
            width={700}
            height={500}
          />
        </div>
      </div>
      <Registration />
    </div>
  );
};

export default CustomYourPackaging;
