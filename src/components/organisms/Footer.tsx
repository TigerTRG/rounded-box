import React from "react";
import { Button } from "@mui/material";
import styles from "../../styles/scss/headerButton.module.scss";
import { PhoneEnabled, Email, CameraAltOutlined } from "@mui/icons-material";

const Footer = () => (
  <div className={` flex w-full h-[360px] bottom-0 z-[9999] bg-orange`}>
    <div className="flex w-full flex-col gap-10 items-center justify-start mt-10 mb-0">
      <div className="flex flex-col gap-4">
        <span className="!text-light-gray-bg !text-[40px]">Connect</span>
        <div className="flex gap-3">
          <PhoneEnabled
            sx={{
              minWidth: "40px",
              minHeight: "40px",
              color: "#ffffff !important",
            }}
            // className="color-[#fff] bg-white"
          />
          <span className="!text-light-gray-bg">(+66)94-746-5528</span>
        </div>
        <div className="flex gap-3">
          <Email
            sx={{
              minWidth: "40px",
              minHeight: "40px",
              color: "#ffffff !important",
            }}
            // className="color-[#fff] bg-white"
          />
          <span className="!text-light-gray-bg">sales@roundbox.com</span>
        </div>
        <div className="flex gap-3">
          <CameraAltOutlined
            sx={{
              minWidth: "40px",
              minHeight: "40px",
              color: "#ffffff !important",
            }}
            // className="color-[#fff] bg-white"
          />
          <span className="!text-light-gray-bg">roundboxth</span>
        </div>
      </div>
      <span className="!text-light-gray-bg">
        © 2024 Roundbox. All rights reserved.
      </span>
    </div>
  </div>
);

export default Footer;
