import HomeLayout from "@/src/components/templates/HomeLayout";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";

const FirstPage = () => {
  const [type, setType] = useState<string>("category");
  const [customColor, setCustomColor] = useState<number>(4);
  const [showColor, setShowColor] = useState<string>("");
  const [showImage, setShowImage] = useState<string>(
    "/images/AllRoundedBox/Rounded_box_28.jpg"
  );

  const disabledStyles = {
    borderRadius: "30px",
    border: "5px solid",
    borderColor: "#00000040",
  };

  useEffect(() => {
    if (type === "category") {
      setCustomColor(4);
      if (
        showColor === "" ||
        showColor === "yellow" ||
        showColor === "brown" ||
        showColor === "red"
      ) {
        setShowImage("/images/AllRoundedBox/Rounded_box_28.jpg");
      } else if (showColor === "gray") {
        setShowImage("/images/AllRoundedBox/Rounded_box_14.jpg");
      } else if (showColor === "black") {
        setShowImage("/images/AllRoundedBox/Rounded_box_27.jpg");
      } else if (showColor === "white") {
        setShowImage("/images/AllRoundedBox/Rounded_box_30.jpg");
      }
    } else if (type === "bottleCap") {
      setCustomColor(4);
      if (
        showColor === "" ||
        showColor === "yellow" ||
        showColor === "brown" ||
        showColor === "red"
      ) {
        setShowImage("/images/AllRoundedBox/Rounded_box_4.jpg");
      } else if (showColor === "gray") {
        setShowImage("/images/AllRoundedBox/Rounded_box_3.jpg");
      } else if (showColor === "black") {
        setShowImage("/images/AllRoundedBox/Rounded_box_1.jpg");
      } else if (showColor === "white") {
        setShowImage("/images/AllRoundedBox/Rounded_box_6.jpg");
      }
    } else if (type === "innerBottle") {
      setCustomColor(3);
      if (
        showColor === "" ||
        showColor === "brown" ||
        showColor === "red" ||
        showColor === "yellow" ||
        showColor === "gray"
      ) {
        setShowImage("/images/AllRoundedBox/Rounded_box_31.jpg");
      } else if (showColor === "black") {
        setShowImage("/images/AllRoundedBox/Rounded_box_33.jpg");
      } else if (showColor === "white") {
        setShowImage("/images/AllRoundedBox/Rounded_box_32.jpg");
      }
    } else if (type === "outerBottle") {
      setCustomColor(4);
      if (
        showColor === "" ||
        showColor === "red" ||
        showColor === "yellow" ||
        showColor === "gray"
      ) {
        setShowImage("/images/AllRoundedBox/Rounded_box_37.jpg");
      } else if (showColor === "brown") {
        setShowImage("/images/AllRoundedBox/Rounded_box_18.jpg");
      } else if (showColor === "black") {
        setShowImage("/images/AllRoundedBox/Rounded_box_41.jpg");
      } else if (showColor === "white") {
        setShowImage("/images/AllRoundedBox/Rounded_box_42.jpg");
      }
    }
  }, [type, showColor]);

  return (
    <div>
      <HomeLayout>
        <div className="mt-10 mx-20 mb-36 h-full grid gap-10 grid-cols-[1.5fr_1.5fr_1fr] items-center">
          <Image
            alt="roundedbox"
            src="/images/RoundedTextIcon/Rounded_text_4_cropped_nobg.png"
            width={700}
            height={700}
          />
          <Image
            alt="papertube"
            src="/images/AllRoundedBox/Rounded_box_47_cropped.jpg"
            width={1400}
            height={1400}
          />
          <Image
            alt="papertube"
            src="/images/AllRoundedBox/Tubes_cropped.jpg"
            width={1400}
            height={1400}
          />
        </div>
        <div className="w-full h-[1400px] relative">
          <Image
            alt="papertube"
            src="/images/AllRoundedBox/Made_tube_2.jpg"
            width={1400}
            height={1400}
            className="max-w-[450px] z-50 absolute bottom-[160px] left-[150px]"
          />
          <div className="w-full h-[800px] bg-[#994703] p-20 relative">
            <Image
              alt="papertube"
              src="/images/AllRoundedBox/Tubes_2.png"
              width={1400}
              height={1400}
              className="max-w-[600px] absolute right-0 top-0"
            />
            <div className="grid grid-cols-[1.8fr_1fr] gap-32 items-center w-full h-full">
              <span className="!text-[32px] !text-light-gray-bg">
                เราคือผู้ผลิต แพ็คเกจจิ้งทรงกระบอก กระป๋องกลม กล่องกลม ครบวงจร
                ออกแบบ ขึ้นตัวอย่าง ผลิต จนส่งถึงมือลูกค้า ในราคาที่เป็นมิตร
                ด้วยประสบการณ์กว่า 35ปี จากอุตสาหกรรมการผลิตแกนกระดาษ
                พัฒนาต่อยอดมาสู่ บรรจุภัณฑ์แกนกระดาษ มาตรฐานสากล ระดับโลก
              </span>
              <div className="flex w-full h-full items-end flex-row justify-end">
                <Image
                  alt="papertube"
                  src="/images/AllRoundedBox/Made_tube_cropped.jpg"
                  width={1400}
                  height={1400}
                  className="max-w-[450px] z-50"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[600px] bg-[#1e4235] p-20 relative">
            <Image
              alt="papertube"
              src="/images/AllRoundedBox/Tubes_2.png"
              width={1400}
              height={1400}
              className="max-w-[600px] absolute left-0 bottom-0 rotate-180"
            />
            <Image
              alt="papertube"
              src="/images/RoundedIcon/Rounded_icon_7.png"
              width={700}
              height={700}
              className="max-w-[700px] absolute bottom-[376px] left-[50%] translate-x-[-45%]"
            />
            <div className="grid grid-cols-[1.8fr_1fr] gap-32 items-center w-full h-full">
              <div />
              <span className="!text-[32px] !text-light-gray-bg">
                ไลน์การผลิตในไทยที่แรกและที่เดียว
                รับให้คำปรึกษาเรื่องแพคเกจจิ้งทรงกระบอก ไม่มีค่าใช้จ่าย
                เสริมสร้างแบรนด์สินค้า
                เพิ่มความน่าสนใจในสินค้าของท่านผ่านรูปลักษณ์ บรรจุภัณฑ์
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="header-catalog mx-20 mt-10 mb-20 flex flex-row items-center gap-10 justify-center">
            <Image
              alt="roundedbox"
              src="/images/RoundedIcon/Rounded_icon_4_cropped_nobg.png"
              width={250}
              height={250}
              className=""
            />
            <span className="!font-hel-rounded-bold !text-dark-blue !text-[200px] relative ">
              Catalog
              <div className="h-1 w-[560px] absolute bg-black left-72" />
            </span>
          </div>
        </div>
        <div className="w-full h-full flex justify-center mb-20">
          <div className="h-full grid grid-cols-[30%_70%] bg-blue m-10 rounded-[30px] relative">
            <div className="left-side min-w-[300px] grid grid-rows-4 gap-10 mx-5 my-10">
              <Image
                onClick={() => setType("category")}
                alt="papertube"
                src="/images/AllRoundedBox/Rounded_box_28.jpg"
                width={1400}
                height={1400}
                className={`w-full rounded-[30px] bg-light-gray-bg cursor-pointer ${
                  type === "category" && "opacity-70"
                }`}
              />

              <Image
                onClick={() => setType("bottleCap")}
                alt="papertube"
                src="/images/AllRoundedBox/Rounded_box_4.jpg"
                width={1400}
                height={1400}
                className={`w-full rounded-[30px] bg-light-gray-bg cursor-pointer ${
                  type === "bottleCap" && "opacity-70"
                }`}
              />
              <div
                className={`rounded-[30px] bg-light-gray-bg overflow-hidden  ${
                  type === "innerBottle" && "opacity-70"
                } relative`}
              >
                <Image
                  onClick={() => setType("innerBottle")}
                  alt="papertube"
                  src="/images/AllRoundedBox/Rounded_box_31.jpg"
                  width={1400}
                  height={1400}
                  className="absolute"
                />
              </div>
              <Image
                onClick={() => setType("outerBottle")}
                alt="papertube"
                src="/images/AllRoundedBox/Rounded_box_37.jpg"
                width={1400}
                height={1400}
                className={`w-full rounded-[30px] bg-light-gray-bg cursor-pointer ${
                  type === "outerBottle" && "opacity-70"
                }`}
              />
            </div>

            <div className="middle-side flex items-center justify-center">
              {type !== "innerBottle" ? (
                <Image
                  alt="papertube"
                  src={showImage}
                  width={800}
                  height={500}
                  className="rounded-[30px] bg-light-gray-bg"
                />
              ) : (
                <Image
                  alt="papertube"
                  src={showImage}
                  width={500}
                  height={500}
                  className="rounded-[30px] bg-light-gray-bg"
                />
              )}
            </div>

            <div
              className={`${
                customColor === 4 ? "h-[550px]" : "h-[450px]"
              } right-side absolute bottom-0 right-0 w-[240px] z-50 bg-light-gray-bg rounded-tl-[30px]`}
            >
              <div
                className={`grid ${
                  customColor === 4 ? "grid-rows-4" : "grid-rows-3"
                } h-full items-center justify-center`}
              >
                {type === "outerBottle" ? (
                  <>
                    <Button
                      onClick={() => setShowColor("red")}
                      disabled={showColor === "red"}
                      sx={{
                        "&.Mui-disabled": {
                          ...disabledStyles,
                        },
                      }}
                      className="cursor-pointer w-20 h-16 rounded-[50px] bg-red"
                    />
                    <Button
                      onClick={() => setShowColor("brown")}
                      disabled={showColor === "brown"}
                      sx={{
                        "&.Mui-disabled": {
                          ...disabledStyles,
                        },
                      }}
                      className="cursor-pointer w-20 h-16 rounded-[50px] bg-brown"
                    />
                  </>
                ) : type === "innerBottle" ? (
                  <Button
                    onClick={() => setShowColor("brown")}
                    disabled={showColor === "brown"}
                    sx={{
                      "&.Mui-disabled": {
                        ...disabledStyles,
                      },
                    }}
                    className="cursor-pointer w-20 h-16 rounded-[50px] bg-brown"
                  />
                ) : (
                  <>
                    <Button
                      onClick={() => setShowColor("yellow")}
                      disabled={showColor === "yellow"}
                      sx={{
                        "&.Mui-disabled": {
                          ...disabledStyles,
                        },
                      }}
                      className="cursor-pointer w-20 h-16 rounded-[50px] bg-yellow"
                    />
                    <Button
                      onClick={() => setShowColor("gray")}
                      disabled={showColor === "gray"}
                      sx={{
                        "&.Mui-disabled": {
                          ...disabledStyles,
                        },
                      }}
                      className="cursor-pointer w-20 h-16 rounded-[50px] bg-gray"
                    />
                  </>
                )}
                <Button
                  onClick={() => setShowColor("black")}
                  disabled={showColor === "black"}
                  sx={{
                    "&.Mui-disabled": {
                      ...disabledStyles,
                    },
                  }}
                  className="cursor-pointer w-20 h-16 rounded-[50px] bg-black"
                />
                <Button
                  onClick={() => setShowColor("white")}
                  disabled={showColor === "white"}
                  sx={{
                    "&.Mui-disabled": {
                      ...disabledStyles,
                    },
                  }}
                  className="w-20 h-16 rounded-[50px] cursor-pointer bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </div>
  );
};

export default FirstPage;
