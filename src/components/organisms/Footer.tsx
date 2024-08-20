import React from "react";
import { Button, Link } from "@mui/material";
import styles from "../../styles/scss/headerButton.module.scss";
import Image from "next/image";
import {
  PhoneEnabled,
  Email,
  CameraAltOutlined,
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  X,
} from "@mui/icons-material";

const Footer = () => (
  <div className="flex flex-col md:flex-row w-full md:h-[260px] h-[500px] bottom-0 z-[9999] bg-orange relative">
    <div
      className={`google-map relative md:absolute h-full w-full md:w-[20vw] min-w-[220px]`}
    >
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.537570790497!2d100.49019301099148!3d13.746423686589216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299057145cc81%3A0x7df49a08f511c22e!2sWat%20Phra%20Chetuphon%20Wimon%20Mangkhalaram%20Rajwaramahawihan!5e0!3m2!1sen!2sth!4v1717667196339!5m2!1sen!2sth"
        style={{ border: 0 }}
        // allowfullscreen={{}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="flex w-full flex-col gap-4 items-center justify-start my-3 ">
      <div className="flex flex-col gap-3">
        <span className="!text-light-gray-bg !text-[40px]">Contact us</span>
        <div className="flex gap-3">
          <PhoneEnabled
            sx={{
              minWidth: "30px",
              minHeight: "30px",
              color: "#ffffff !important",
            }}
            // className="color-[#fff] bg-white"
          />
          <span className="!text-light-gray-bg !text-[16px]">
            (+66)94-746-5528
          </span>
        </div>
        <div className="flex gap-3">
          <Email
            sx={{
              minWidth: "30px",
              minHeight: "30px",
              color: "#ffffff !important",
            }}
            // className="color-[#fff] bg-white"
          />
          <span className="!text-light-gray-bg !text-[16px]">
            sales@roundbox.com
          </span>
        </div>
        <div className="flex gap-3">
          <Link href="https://www.instagram.com/roundboxth/">
            <Instagram
              sx={{
                minWidth: "30px",
                minHeight: "30px",
                color: "#ffffff !important",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCQ3TvgfM6n_3lllQasOi5vA">
            <YouTube
              sx={{
                minWidth: "30px",
                minHeight: "30px",
                color: "#ffffff !important",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://x.com/roundboxth">
            <X
              sx={{
                minWidth: "30px",
                minHeight: "30px",
                color: "#ffffff !important",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://www.tiktok.com/@roundboxth?is_from_webapp=1&sender_device=pc">
            <Image
              src="/images/AboutUspage/tik-tok.png"
              width={30}
              height={30}
              alt="Icon description"
              className="w-[28px] h-[28px] cursor-pointer"
              // color="#ffffff !important"
            />
          </Link>
          <Link href="https://web.facebook.com/roundboxth/">
            <Facebook
              sx={{
                minWidth: "30px",
                minHeight: "30px",
                color: "#ffffff !important",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>
      </div>
      <span className="!text-light-gray-bg !text-[16px]">
        © 2024 Roundbox. All rights reserved.
      </span>
    </div>
  </div>
);

export default Footer;
