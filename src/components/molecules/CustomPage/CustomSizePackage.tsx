import React, { useState } from "react";
import CustomBox from "../../atoms/CustomBox";
import { Button } from "@mui/material";

const CustomSizePackage = () => {
  const diameterSize1 = [6.5, 7.3, 8.3, 9.9, 12.5];
  // const diameterSize2 = [];
  const allDiameterSize: Number[][] = [diameterSize1];
  const heightSize1 = [6, 8, 10, 12, 14];
  const heightSize2 = [16, 18, 20, 22, 24];
  const heightSize3 = [26, 28, 30];
  const allHeightSize: Number[][] = [heightSize1, heightSize2, heightSize3];
  const bottleCap1 = ["short", "long"];
  const closeBottleCap1 = ["close", "far apart"];

  const [heightSize, setHeightSize] = useState<number[]>([0, 0]);
  const [diameterSize, setDiameterSize] = useState<number[]>([0, 0]);
  const [bottleCap, setBottleCap] = useState<number>(0);
  const [closeBottleCap, setCloseBottleCap] = useState<number>(0);

  return (
    <>
      <div className="flex flex-row mb-4">
        <CustomBox className="h-full !min-w-[380px]">
          <span className="!text-[22px]">Choose your can size</span>
          <div className="w-full border-b-[1px] border-solid border-black" />
          <div className="flex flex-col gap-1">
            <span>Diameter (cm)</span>
            <div className="flex flex-col gap-1">
              {allDiameterSize.map((item: any[], index: number) => {
                return (
                  <div key={index} className="flex flex-row w-full gap-x-1">
                    {item.map((_item, _index) => (
                      <Button
                        key={_index}
                        onClick={() => setDiameterSize([index, _index])}
                        variant="outlined"
                        className={`hover:border-[#000000] hover:bg-light-brown ${
                          diameterSize[0] === index &&
                          diameterSize[1] === _index
                            ? "bg-light-brown"
                            : ""
                        }`}
                        sx={{ border: "1px solid grey" }}
                      >
                        {_item}
                      </Button>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span>Height (cm)</span>
            <div className="flex flex-col gap-1">
              {allHeightSize.map((item: any[], index: number) => {
                return (
                  <div key={index} className="flex flex-row w-full gap-x-1">
                    {item.map((_item, _index) => (
                      <Button
                        key={_index}
                        onClick={() => setHeightSize([index, _index])}
                        variant="outlined"
                        className={`hover:border-[#000000] hover:bg-light-brown ${
                          heightSize[0] === index && heightSize[1] === _index
                            ? "bg-light-brown"
                            : ""
                        }`}
                        sx={{ border: "1px solid grey" }}
                      >
                        {_item}
                      </Button>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </CustomBox>
        <div className="flex flex-col gap-4 w-[356px]">
          <CustomBox className="h-full">
            <span className="!text-[22px]">Choose your bottle cap</span>
            <div className="w-full border-b-[1px] border-solid border-black" />
            <div className="flex flex-row gap-1">
              {bottleCap1.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setBottleCap(index)}
                  variant="outlined"
                  className={`hover:border-[#000000] hover:bg-light-brown ${
                    bottleCap === index ? "bg-light-brown" : ""
                  }`}
                  sx={{ border: "1px solid grey" }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </CustomBox>
          <CustomBox className="h-full">
            <span className="!text-[22px]">
              Choose a bottle cap closure style
            </span>
            <div className="w-full border-b-[1px] border-solid border-black" />
            <div className="flex flex-row gap-1">
              {closeBottleCap1.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setCloseBottleCap(index)}
                  variant="outlined"
                  className={`hover:border-[#000000] hover:bg-light-brown ${
                    closeBottleCap === index ? "bg-light-brown" : ""
                  }`}
                  sx={{ border: "1px solid grey" }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </CustomBox>
        </div>
      </div>
      <div className="w-[750px] border-b-[1px] border-solid border-black mx-4 mb-6 mt-2" />
    </>
  );
};

export default CustomSizePackage;
