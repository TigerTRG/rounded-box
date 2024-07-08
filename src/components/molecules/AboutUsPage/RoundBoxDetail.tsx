import React, { useState } from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import styles from "../../../styles/scss/headerButton.module.scss";
import { Facebook, Instagram } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLink } from "@fortawesome/free-solid-svg-icons";

const RoundBoxDetail = () => {
  return (
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
            src="/images/Homepage/Logo_round_box.png"
            alt="tube"
            width={1500}
            height={400}
          />
        </div>
      </div>
      <div className="w-full h-full relative z-10 overflow-hidden ">
        <div className={`${styles.img_colorize_left}`}>
          <Image
            src="/images/Homepage/Logo_round_box.png"
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
  );
};

export default RoundBoxDetail;
