"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Swiper.module.css";

const swiperData = [
  {
    id: 1,
    img: "/images/banner1.webp",
  },
  {
    id: 2,
    img: "/images/banner2.png",
  },
  {
    id: 3,
    img: "/images/banner3.jpg",
  },
];

const CustomSwiper = () => {
  console.log(swiperData);

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        grabCursor={true}
        modules={[Autoplay, Pagination]}
        className={styles.swiper}
      >
        {swiperData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Box
                component={"img"}
                src={item.img}
                sx={{ width: "100%", objectFit: "cover", height: "600px" }}
              ></Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default CustomSwiper;
