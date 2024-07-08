import React, { useState } from "react";
import CustomBox from "../../atoms/CustomBox";
import { Button, ToggleButtonGroup } from "@mui/material";

const CustomMaterialPackage = () => {
  const innerSurface1 = ["craft", "white", "black", "foil"];
  const edge1 = ["smooth", "rolled"];
  const exteriorColor1 = ["craft", "white", "black", "colorful"];
  const fillingColor1 = ["craft", "white", "black", "silver"];
  const fillingColor2 = ["gold"];
  // const allInnerSurface: String[][] = [innerSurface1];
  // const allEdge: String[][] = [edge1];
  // const allExteriorColor: String[][] = [exteriorColor1];
  const allFillingColor: String[][] = [fillingColor1, fillingColor2];

  const [innerSurface, setInnerSurface] = useState<number>(0);
  const [edge, setEdge] = useState<number>(0);
  const [exteriorColor, setExteriorColor] = useState<number>(0);
  const [fillingColor, setFillingColor] = useState<number[]>([0, 0]);

  console.log("fill", fillingColor);

  return (
    <div className="box-categories flex flex-row">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <CustomBox className="h-full !w-[380px]">
            <span className="!text-[22px]">Choose inner surface</span>
            <div className="w-full border-b-[1px] border-solid border-black" />

            <div className="flex flex-row gap-1">
              {innerSurface1.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setInnerSurface(index)}
                  variant="outlined"
                  className={`hover:border-[#000000] hover:bg-light-brown ${
                    innerSurface === index ? "bg-light-brown" : ""
                  }`}
                  sx={{ border: "1px solid grey" }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </CustomBox>
          <CustomBox className="h-full w-[356px]">
            <span className="!text-[22px]">Choose edge</span>
            <div className="w-full border-b-[1px] border-solid border-black" />
            <div className="flex flex-row gap-1">
              {edge1.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setEdge(index)}
                  variant="outlined"
                  className={`hover:border-[#000000] hover:bg-light-brown ${
                    edge === index ? "bg-light-brown" : ""
                  }`}
                  sx={{ border: "1px solid grey" }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </CustomBox>
        </div>
        <div className="flex flex-row">
          <CustomBox className="h-full w-full">
            <span className="!text-[22px]">Choose exterior color</span>
            <div className="w-full border-b-[1px] border-solid border-black" />
            <div className="flex flex-row gap-1">
              {exteriorColor1.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setExteriorColor(index)}
                  variant="outlined"
                  className={`hover:border-[#000000] hover:bg-light-brown ${
                    exteriorColor === index ? "bg-light-brown" : ""
                  }`}
                  sx={{ border: "1px solid grey" }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </CustomBox>
          <CustomBox className="h-full w-full">
            <span className="!text-[22px]">Choose the filling color</span>
            <div className="w-full border-b-[1px] border-solid border-black" />
            <div className="flex flex-col gap-1">
              {allFillingColor.map((item: any[], index: number) => {
                return (
                  <div key={index} className="flex flex-row w-full gap-x-1">
                    {item.map((_item, _index) => (
                      <Button
                        key={_index}
                        onClick={() => setFillingColor([index, _index])}
                        variant="outlined"
                        className={`hover:border-[#000000] hover:bg-light-brown ${
                          fillingColor[0] === index &&
                          fillingColor[1] === _index
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
          </CustomBox>
        </div>
      </div>
    </div>
  );
};

export default CustomMaterialPackage;
