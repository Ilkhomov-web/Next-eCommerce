"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Swiper.module.css";

const swiperData = [
  { id: 1, img: "/images/banner1.webp" },
  { id: 2, img: "/images/banner2.png" },
  { id: 3, img: "/images/banner3.jpg" },
];

const CustomSwiper = () => {
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        grabCursor
        modules={[Autoplay, Pagination]}
        className={styles.swiper}
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              component="img"
              src={item.img}
              alt={`Banner ${item.id}`}
              sx={{
                width: "100%",
                objectFit: "cover",
                height: { xs: "300px", md: "600px" },
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CustomSwiper;
