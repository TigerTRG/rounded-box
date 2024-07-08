import HomeLayout from "@/src/components/templates/HomeLayout";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FirstPage = () => {
  const images: any = [
    {
      id: 1,
      image: "/images/Homepage/Logo_round_box.png",
    },
    {
      id: 2,
      image: "/images/Homepage/Logo_round_box.png",
    },
    {
      id: 3,
      image: "/images/Homepage/Logo_round_box.png",
    },
    {
      id: 4,
      image: "/images/Homepage/Logo_round_box.png",
    },
    {
      id: 5,
      image: "/images/Homepage/Logo_round_box.png",
    },
    {
      id: 6,
      image: "/images/Homepage/Logo_round_box.png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7000,
    // draggable: true,
    // fade: true,
    pauseOnHover: false,
    dots: true,
  };
  return (
    <div>
      <HomeLayout>
        <div className="m-10">Top Detail Layout</div>
        <div className="flex flex-col w-full items-center">
          <Slider {...settings} className="flex w-[80%]">
            {images.map((item: any) => (
              <div key={item.id} className="px-5">
                <Image
                  className="rounded-[15px]"
                  src={item.image}
                  alt="tube"
                  width={1500}
                  height={400}
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className="Register ml-10 flex flex-col">
          <div></div>
        </div> */}
      </HomeLayout>
    </div>
  );
};

export default FirstPage;
