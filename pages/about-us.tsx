import React from "react";
import AboutUs from "@/src/components/organisms/AboutUs";
import HomeLayout from "@/src/components/templates/HomeLayout";

const CustomPackage = () => {
  return (
    <div>
      <HomeLayout>
        <AboutUs />
      </HomeLayout>
    </div>
  );
};

export default CustomPackage;
