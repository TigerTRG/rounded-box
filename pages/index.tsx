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
        <div className="w-full flex justify-center">
          <div className="m-[4vw] h-full grid gap-[3.5vw] grid-cols-[1fr_1fr_1fr] justify-items-center items-center max-w-[1024px]">
            <Image
              alt="roundedbox"
              src="/images/RoundedTextIcon/Rounded_text_4_cropped_nobg.png"
              width={700}
              height={700}
              className="hover-zoom cursor-pointer"
            />
            <Image
              alt="papertube"
              src="/images/AllRoundedBox/Rounded_box_47_cropped.jpg"
              width={350}
              height={350}
              className="hover-zoom cursor-pointer rounded-[1.5vw]"
            />
            <Image
              alt="papertube"
              src="/images/AllRoundedBox/Tubes_cropped.jpg"
              width={350}
              height={350}
              className="hover-zoom cursor-pointer rounded-[1.5vw]"
            />
          </div>
        </div>
        <div className="w-full h-[66vw] max-h-[875px] flex flex-col items-center relative ">
          <div className="w-full max-w-[1024px] max-h-[475px] h-[36vw] bg-[#994703] p-[6vw] relative ">
            <Image
              alt="papertube"
              src="/images/AllRoundedBox/Tubes_2.png"
              width={1400}
              height={1400}
              className="max-w-[380px] w-[30vw] absolute right-0 top-0"
            />
            <div className="grid grid-cols-[1fr_1fr] gap-[7.5vw] items-center w-full h-full">
              <span className="!text-[1.6vw] !text-light-gray-bg lg:!text-[20px]">
                เราคือผู้ผลิต แพ็คเกจจิ้งทรงกระบอก กระป๋องกลม กล่องกลม ครบวงจร
                ออกแบบ ขึ้นตัวอย่าง ผลิต จนส่งถึงมือลูกค้า ในราคาที่เป็นมิตร
                ด้วยประสบการณ์กว่า 35ปี จากอุตสาหกรรมการผลิตแกนกระดาษ
                พัฒนาต่อยอดมาสู่ บรรจุภัณฑ์แกนกระดาษ มาตรฐานสากล ระดับโลก
              </span>
              <Image
                alt="papertube"
                src="/images/AllRoundedBox/Made_tube_cropped.jpg"
                width={1400}
                height={1400}
                className="max-w-[280px] w-[24vw] z-50 absolute rounded-[1.5vw] top-[16vw] right-[6vw] xl:right-[80px] xl:top-[240px]"
              />
            </div>
          </div>
          <div className="w-full max-w-[1024px] max-h-[400px] h-[30vw] bg-[#1e4235] p-[6vw] relative">
            <Image
              alt="papertube"
              src="/images/AllRoundedBox/Tubes_2.png"
              width={1400}
              height={1400}
              className="max-w-[380px] w-[30vw] absolute left-0 bottom-0 rotate-180"
            />
            <Image
              alt="papertube"
              src="/images/RoundedIcon/Rounded_icon_7.png"
              width={700}
              height={700}
              className="max-w-[380px] w-[30vw] absolute bottom-[20vw] xl:bottom-[260px] left-[50%] translate-x-[-50%]"
            />
            <Image
              alt="papertube"
              src="/images/AllRoundedBox/Made_tube_cropped.jpg"
              width={1400}
              height={1400}
              className="max-w-[280px] w-[24vw] z-50 absolute rounded-[1.5vw] bottom-[12vw] left-[6vw] xl:left-[80px] xl:bottom-[160px]"
            />
            <div className="grid grid-cols-[1fr_1fr] gap-[7.5vw] items-center w-full h-full">
              <div />
              <span className="!text-[1.6vw] !text-light-gray-bg lg:!text-[20px]">
                ไลน์การผลิตในไทยที่แรกและที่เดียว
                รับให้คำปรึกษาเรื่องแพคเกจจิ้งทรงกระบอก ไม่มีค่าใช้จ่าย
                เสริมสร้างแบรนด์สินค้า
                เพิ่มความน่าสนใจในสินค้าของท่านผ่านรูปลักษณ์ บรรจุภัณฑ์
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="header-catalog mx-[4.2vw] my-[3vw] flex flex-row items-center gap-[3vw] justify-center">
            <Image
              alt="roundedbox"
              src="/images/RoundedIcon/Rounded_icon_4_cropped_nobg.png"
              width={200}
              height={200}
              className="w-[12vw] max-w-[130px]"
            />
            <span className="!font-hel-rounded-bold !text-dark-blue !text-[10vw] relative lg:!text-[120px]">
              Catalog
              <div className="h-1 w-[28vw] max-w-[350px] absolute bg-dark-blue left-[14vw]" />
            </span>
          </div>
        </div>
        <div className="w-full h-full flex pl-[8vw] lg:pl-0 lg:justify-center items-center mb-[4.5vw]">
          <div className="w-[64vw] h-full grid max-w-[1000px] grid-cols-[25%_74%] lg:grid-cols-[25%_60%] bg-blue m-[2.5vw] rounded-[2.5vw] relative">
            <div className="left-side grid grid-rows-4 gap-[2vw] mx-[1.25vw] my-[2.5vw] ">
              <Image
                onClick={() => setType("category")}
                alt="papertube"
                src="/images/AllRoundedBox/Rounded_box_28.jpg"
                width={1400}
                height={1400}
                className={`w-full rounded-[2vw] bg-light-gray-bg cursor-pointer ${
                  type === "category" && "opacity-70"
                }`}
              />

              <Image
                onClick={() => setType("bottleCap")}
                alt="papertube"
                src="/images/AllRoundedBox/Rounded_box_4.jpg"
                width={1400}
                height={1400}
                className={`w-full rounded-[2vw] bg-light-gray-bg cursor-pointer ${
                  type === "bottleCap" && "opacity-70"
                }`}
              />
              <div
                className={`rounded-[2vw] bg-light-gray-bg overflow-hidden cursor-pointer  ${
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
                className={`w-full rounded-[2vw]  bg-light-gray-bg cursor-pointer ${
                  type === "outerBottle" && "opacity-70"
                }`}
              />
            </div>

            <div className="middle-side flex items-center  h-[42vw] max-h-[650px] justify-center">
              {type !== "innerBottle" ? (
                <Image
                  alt="papertube"
                  src={showImage}
                  width={800}
                  height={500}
                  className="rounded-[2vw] bg-light-gray-bg"
                />
              ) : (
                <Image
                  alt="papertube"
                  src={showImage}
                  width={400}
                  height={500}
                  className="rounded-[2vw] h-[40vw] max-h-[650px] w-auto bg-light-gray-bg"
                />
              )}
            </div>

            <div
              className={`${
                customColor === 4 ? "h-[30vw]" : "h-[23.4vw]"
              } right-side absolute right-[-100px] bottom-[6vw] lg:bottom-0 lg:right-0 min-w-[100px] w-[8.3vw] z-50 bg-light-gray-bg rounded-tl-[2vw]`}
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
                      className="cursor-pointer w-[4.2vw] h-[3.3vw] rounded-[50px] bg-red"
                    />
                    <Button
                      onClick={() => setShowColor("brown")}
                      disabled={showColor === "brown"}
                      sx={{
                        "&.Mui-disabled": {
                          ...disabledStyles,
                        },
                      }}
                      className="cursor-pointer w-[4.2vw] h-[3.3vw] rounded-[50px] bg-brown"
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
                    className="cursor-pointer w-[4.2vw] h-[3.3vw] rounded-[50px] bg-brown"
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
                      className="cursor-pointer w-[4.2vw] h-[3.3vw] rounded-[50px] bg-yellow"
                    />
                    <Button
                      onClick={() => setShowColor("gray")}
                      disabled={showColor === "gray"}
                      sx={{
                        "&.Mui-disabled": {
                          ...disabledStyles,
                        },
                      }}
                      className="cursor-pointer w-[4.2vw] h-[3.3vw] rounded-[50px] bg-gray"
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
                  className="cursor-pointer w-[4.2vw] h-[3.3vw] rounded-[50px] bg-black"
                />
                <Button
                  onClick={() => setShowColor("white")}
                  disabled={showColor === "white"}
                  sx={{
                    "&.Mui-disabled": {
                      ...disabledStyles,
                    },
                  }}
                  className="w-[4.2vw] h-[3.3vw] rounded-[50px] cursor-pointer bg-white"
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
