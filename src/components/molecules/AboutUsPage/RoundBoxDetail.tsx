import React, { useRef, useState } from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import styles from "../../../styles/scss/headerButton.module.scss";
import { Facebook, Instagram } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RoundBoxDetail = () => {
  const images: any = [
    {
      id: 1,
      image: "/images/AllRoundedBox/Rounded_box_31.jpg",
      // detail: "lsdkalfjsdkafjskdlajfskadjfsakdjfasdlk",
    },
    {
      id: 2,
      image: "/images/AllRoundedBox/Rounded_box_32.jpg",
    },
    {
      id: 3,
      image: "/images/AllRoundedBox/Rounded_box_33.jpg",
    },
    {
      id: 4,
      image: "/images/AllRoundedBox/Rounded_box_31.jpg",
    },
    {
      id: 5,
      image: "/images/AllRoundedBox/Rounded_box_32.jpg",
    },
    {
      id: 6,
      image: "/images/AllRoundedBox/Rounded_box_33.jpg",
    },
  ];

  const settingsImage = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    fade: true,
    dots: false,
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 6000,
    wipeToSlide: true,
    pauseOnHover: false,
    centerMode: true,
    focusOnSelect: true,
    dots: true,
  };

  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();
  // const slider1 = useRef();
  // const slider2 = useRef();

  return (
    <>
      <Box className="grid grid-cols-2 w-full h-full">
        <div
          className={`${styles.text_resize_right} bg-light-brown text-center flex items-center p-20`}
        >
          <span>
            {" "}
            Round box Packaging ผู้ผลิต แพ็คเกจจิ้งทรงกระบอก กระป๋องกลม กล่องกลม
            ครบวงจร ออกแบบ ขึ้นตัวอย่าง ผลิต จนส่งถึงมือลูค้าในราคาที่เป็นมิตร
            ด้วยประสบการณ์กว่า 35 ปี จากอุตสาหกรรมการผลิตแกนกระดาษ
            พัฒนาต่อยอดมาสู่บรรจุภัณฑ์แกนกระดาษ มาตรฐานสากล ระดับโลก
          </span>
        </div>
        <div className="w-full h-full relative z-10 overflow-hidden ">
          <div className={`${styles.img_colorize_right}`}>
            <Image
              src="/images/AllRoundedBox/Rounded_box_47.jpeg"
              alt="tube"
              width={1500}
              height={400}
            />
          </div>
        </div>
        <div className="w-full h-full relative z-10 overflow-hidden ">
          <div className={`${styles.img_colorize_left}`}>
            <Image
              src="/images/AllRoundedBox/Rounded_box_47.jpeg"
              alt="tube"
              width={1500}
              height={400}
            />
          </div>
        </div>
        <div className="bg-light-brown text-center flex flex-col items-center p-20">
          <Button
            className={`${styles.btn_header} text-black h-full w-full`}
            sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
            startIcon={
              <Facebook style={{ minWidth: "20px", minHeight: "20px" }} />
            }
          >
            Facebook
          </Button>
          <Button
            className={`${styles.btn_header} text-black h-full w-full`}
            sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
            startIcon={
              <Instagram style={{ minWidth: "20px", minHeight: "20px" }} />
            }
          >
            Instagram
          </Button>
          <Button
            className={`${styles.btn_header} text-black h-full w-full`}
            sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
            startIcon={
              <Image
                src="/images/AboutUspage/line.svg"
                width={20}
                height={20}
                alt="Icon description"
              />
            }
          >
            Line OA
          </Button>
          <Button
            className={`${styles.btn_header} text-black h-full w-full`}
            sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
            startIcon={
              <Image
                src="/images/AboutUspage/tiktok.svg"
                width={20}
                height={20}
                alt="Icon description"
              />
            }
          >
            Tik tok
          </Button>
        </div>
      </Box>
      <div className="flex flex-col w-full h-full items-center">
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          {...settingsImage}
          className="w-[20%]"
        >
          {images.map((item: any) => (
            <div key={item.id} className="">
              <Image
                className=""
                src={item.image}
                alt="tube"
                width={960}
                height={1700}
              />
            </div>
          ))}
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          {...settings}
          className="flex w-full cursor-pointer"
        >
          {images.map((item: any) => (
            <div key={item.id} className="min">
              <Image
                className="h-full px-10"
                src={item.image}
                alt="tube"
                width={1500}
                height={400}
              />
            </div>
          ))}
        </Slider>
      </div>
      <Box className="grid grid-cols-2 w-full h-full t-[50px] ">
        <div className="google-map">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.537570790497!2d100.49019301099148!3d13.746423686589216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299057145cc81%3A0x7df49a08f511c22e!2sWat%20Phra%20Chetuphon%20Wimon%20Mangkhalaram%20Rajwaramahawihan!5e0!3m2!1sen!2sth!4v1717667196339!5m2!1sen!2sth"
            style={{ border: 0 }}
            // allowfullscreen={{}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full h-full relative z-10 overflow-hidden ">
          <div className={`${styles.img_colorize_left} w-full h-full`}>
            <Image
              src="/images/Homepage/Logo_round_box.png"
              alt="tube"
              width={1500}
              height={400}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default RoundBoxDetail;
