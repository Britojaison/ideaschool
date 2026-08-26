"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";

export interface CarouselImageItem {
  src: string;
  alt: string;
  name?: string;
  role?: string;
}

const Carousel_003 = ({
  images,
  className,
  showPagination = true,
  showNavigation = true,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
  cardWidth = 320,
  cardHeight = 480,
}: {
  images: CarouselImageItem[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean; pauseOnMouseEnter?: boolean };
  spaceBetween?: number;
  cardWidth?: number;
  cardHeight?: number;
}) => {
  const css = `
  .Carousel_003_wrapper {
    width: 100%;
    position: relative;
  }

  .Carousal_003 {
    width: 100%;
    height: ${cardHeight + 60}px;
    padding-top: 20px !important;
    padding-bottom: 50px !important;
    overflow: visible !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: ${cardWidth}px !important;
    height: ${cardHeight}px !important;
    border-radius: 24px;
    overflow: hidden;
    background-color: #121216;
    transition: transform 0.3s ease;
  }

  .Carousal_003 .swiper-slide-shadow-left,
  .Carousal_003 .swiper-slide-shadow-right {
    border-radius: 24px !important;
  }

  .Carousal_003 .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.4) !important;
    opacity: 1 !important;
    transition: all 0.3s ease;
  }

  .Carousal_003 .swiper-pagination-bullet-active {
    background-color: #fbfaf2 !important;
    width: 20px !important;
    border-radius: 9999px !important;
  }

  @media (max-width: 640px) {
    .Carousal_003 {
      height: 420px;
    }
    .Carousal_003 .swiper-slide {
      width: 280px !important;
      height: 360px !important;
    }
  }
`;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
      }}
      className={cn("Carousel_003_wrapper relative w-full", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full relative"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay === true
              ? {
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : autoplay || false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 140,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".skiper-next-btn",
                  prevEl: ".skiper-prev-btn",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="relative group select-none">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={item.src}
                alt={item.alt || item.name || `Slide ${index + 1}`}
              />
              {(item.name || item.role) && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/95 via-[#0a0a0c]/40 to-transparent flex flex-col justify-end p-6 text-left">
                  {item.name && (
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#fbfaf2] tracking-tight mb-1">
                      {item.name}
                    </h3>
                  )}
                  {item.role && (
                    <p className="text-sm sm:text-base text-[#a0aab2] font-medium leading-snug">
                      {item.role}
                    </p>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}

          {showNavigation && (
            <div className="flex items-center gap-3 mt-6">
              <button
                className="skiper-prev-btn w-12 h-12 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer z-10"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                className="skiper-next-btn w-12 h-12 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all cursor-pointer z-10"
                aria-label="Next slide"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };

const Skiper49 = () => {
  const images = [
    {
      src: "/images/x.com/13.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/32.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/20.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/21.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/19.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/1.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/2.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/3.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/4.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/5.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
    {
      src: "/images/x.com/6.jpeg",
      alt: "Illustrations by my fav AarzooAly",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <Carousel_003 className="" images={images} showPagination loop />
    </div>
  );
};

export { Skiper49 };
