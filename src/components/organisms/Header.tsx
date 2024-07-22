import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  ShoppingCartOutlined,
  ShoppingCart,
  Inventory2Outlined,
  PersonPinOutlined,
  ShoppingBagOutlined,
  DashboardCustomizeOutlined,
} from "@mui/icons-material";
import styles from "../../styles/scss/headerButton.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [holdTitle, setHoldTitle] = useState<string>("");

  const { pathname } = useRouter();
  console.log(pathname);
  useEffect(() => {
    if (pathname === "/") {
      setHoldTitle("aboutUs");
    } else if (pathname === "/about-us") {
      setHoldTitle("readyMadeTube");
    } else if (pathname === "/custom-package") {
      setHoldTitle("customTube");
    }
  }, [pathname]);

  return (
    <div className={` flex w-full h-[140px] fixed top-0 z-[9999] `}>
      <div
        className={`w-[calc(100%-240px)] grid grid-cols-[1fr_1.5fr_1fr] gap-10 p-20 pt-14 pr-10 `}
      >
        <Link href="/" className="w-full h-full relative">
          <Button
            // startIcon={
            //   <ShoppingCart style={{ minWidth: "20px", minHeight: "20px" }} />
            // }
            // onClick={() => setHoldTitle("aboutUs")}
            className={`${
              styles.btn_header
            } !font-hel-rounded-regular !text-light-gray-bg ${
              holdTitle === "aboutUs" && styles.btn_header_hover
            }`}
            // sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
          >
            About us
          </Button>
        </Link>
        {/* <Button
        className={`${styles.btn_header} text-black h-full w-full`}
        sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
        startIcon={
          <Inventory2Outlined style={{ minWidth: "20px", minHeight: "20px" }} />
        }
      >
        Product
      </Button> */}
        <Link href="/about-us" className="w-full h-full relative">
          <Button
            // sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
            // startIcon={
            //   <PersonPinOutlined
            //     style={{ minWidth: "20px", minHeight: "20px" }}
            //   />
            // }
            className={`${
              styles.btn_header
            } !font-hel-rounded-regular !text-light-gray-bg ${
              holdTitle === "readyMadeTube" && styles.btn_header_hover
            }`}
          >
            Ready made tube
          </Button>
        </Link>
        <Link href="/custom-package" className="w-full h-full relative">
          <Button
            className={`${
              styles.btn_header
            } !font-hel-rounded-regular !text-light-gray-bg ${
              holdTitle === "customTube" && styles.btn_header_hover
            }`}
            // sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
            // startIcon={
            //   <DashboardCustomizeOutlined
            //     style={{ minWidth: "20px", minHeight: "20px" }}
            //   />
            // }
          >
            Custom tube
          </Button>
        </Link>
      </div>
      {/* <div className={`${styles.logo_header} w-[20%] flex justify-center`}>
      <Link href="/" className="w-full h-full flex justify-center">
        <Image
          alt="papertube"
          src="/images/Homepage/Logo_round_box_circle.png"
          width={140}
          height={140}
          className="hover-zoom cursor-pointer relative"
        />
      </Link>
    </div> */}
      {/* <div className="w-[40%] grid grid-cols-1 gap-4 justify-center pr-10 pl-5 py-5">
      <Button
        className={`${styles.btn_header} text-black h-full w-full`}
        sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
        startIcon={
          <ShoppingBagOutlined
            style={{ minWidth: "20px", minHeight: "20px" }}
          />
        }
      >
        Ready to buy
      </Button>
      
    </div> */}
      <div className="w-[200px] grid grid-cols-1 justify-center items-center p-10 pr-20 relative">
        <Button
          className={`${styles.btn_header_language} !font-hel-rounded-regular`}
          // sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
          // startIcon={
          //   <ShoppingBagOutlined
          //     style={{ minWidth: "20px", minHeight: "20px" }}
          //   />
          // }
        >
          EN/TH
        </Button>
      </div>
    </div>
  );
};

export default Header;
