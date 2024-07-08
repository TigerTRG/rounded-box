import Button from "@mui/material/Button";
import Image from "next/image";
import React from "react";
import {
  ShoppingCartOutlined,
  Inventory2Outlined,
  PersonPinOutlined,
  ShoppingBagOutlined,
  DashboardCustomizeOutlined,
} from "@mui/icons-material";
import styles from "../../styles/scss/headerButton.module.scss";
import Link from "next/link";

const Header = () => (
  <div
    className={`${styles.parent} flex w-full h-[140px] bg-[#E0E0E0] fixed top-0 z-[9999]`}
  >
    <div
      className={`w-[40%] grid grid-cols-3 gap-4 items-center justify-between pl-10 pr-5 py-5`}
    >
      <Button
        startIcon={
          <ShoppingCartOutlined
            style={{ minWidth: "20px", minHeight: "20px" }}
          />
        }
        className={`${styles.btn_header} text-black h-full w-full`}
        sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
      >
        <Link href="/">Home</Link>
      </Button>
      <Button
        className={`${styles.btn_header} text-black h-full w-full`}
        sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
        startIcon={
          <Inventory2Outlined style={{ minWidth: "20px", minHeight: "20px" }} />
        }
      >
        Product
      </Button>

      <Button
        className={`${styles.btn_header} text-black h-full w-full`}
        sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
        startIcon={
          <PersonPinOutlined style={{ minWidth: "20px", minHeight: "20px" }} />
        }
      >
        <Link href="/about-us">About us</Link>
      </Button>
    </div>
    <div className={`${styles.logo_header} w-[20%] flex justify-center`}>
      <Image
        alt="papertube"
        src="/images/Homepage/Logo_round_box_circle.png"
        width={140}
        height={140}
        className="hover-zoom cursor-pointer relative"
      />
    </div>
    <div className="w-[40%] grid grid-cols-2 gap-4 justify-center pr-10 pl-5 py-5">
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
      <Button
        className={`${styles.btn_header} text-black h-full w-full`}
        sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
        startIcon={
          <DashboardCustomizeOutlined
            style={{ minWidth: "20px", minHeight: "20px" }}
          />
        }
      >
        <Link href="/custom-package">Custom your packaging</Link>
      </Button>
    </div>
  </div>
);

export default Header;
