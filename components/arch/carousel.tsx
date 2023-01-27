import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import Nike from "../../public/nike.png";
import Adidas from "../../public/adidas.jpg";
import Pc from "../../public/pc.jpeg";
import IPhone from "../../public/iphone.png";
import Apple from "../../public/apple.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={
              "https://cdn.discordapp.com/attachments/690391029731295232/1068416856572043304/8.jpg"
            }
            alt={"nike"}
            fill
            className="bg-white md:border-2 border-gray-300  w-full h-52 md:w-96 md:rounded-xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://cdn.discordapp.com/attachments/690391029731295232/1068416855661879386/6.jpg"
            }
            alt={"adidas"}
            fill
            className="bg-white md:border-2 border-gray-300  w-full h-52 md:w-96 md:rounded-xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://cdn.discordapp.com/attachments/690391029731295232/1068416799827308544/9.jpg"
            }
            alt={"pc"}
            fill
            className="bg-white md:border-2 border-gray-300  w-full h-52 md:w-96 md:rounded-xl "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
