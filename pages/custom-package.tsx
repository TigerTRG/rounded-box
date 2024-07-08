import CustomYourPackaging from "@/src/components/organisms/CustomYourPackaging";
import HomeLayout from "@/src/components/templates/HomeLayout";
import React from "react";

const CustomPackage = () => {
  return (
    <div>
      <HomeLayout>
        <CustomYourPackaging />
      </HomeLayout>
    </div>
  );
};

export default CustomPackage;
