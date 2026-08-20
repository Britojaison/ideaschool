"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
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

import styles from "./BuiltByAmbitious.module.css";

const rawMentors = [
  {
    name: "Arjun",
    role: "CEO",
    image: "/assets/images/mentor_ARJUN.webp",
    color: "#a8d98a",
  },
  {
    name: "Parithi",
    role: "Head of Design",
    image: "/assets/images/mentor_PARITHI.webp",
    color: "#d9a88a",
  },
  {
    name: "Chandru",
    role: "Senior Creative Strategist & Visualiser",
    image: "/assets/images/mentor_CHANDRU.webp",
    color: "#d1ca64",
  },
  {
    name: "Ajay",
    role: "Video Editor, Design",
    image: "/assets/images/mentor_AJAY.webp",
    color: "#b55e75",
  },
  {
    name: "Zaman",
    role: "Head of Growth",
    image: "/assets/images/zaman.webp",
    color: "#8aa3d9",
  },
];

// Keep enough slides for the wide coverflow layout and seamless looping.
// The optimized WebP sources keep this duplication inexpensive.
const mentors = [...rawMentors, ...rawMentors];

const BuiltByAmbitious = () => {
  return (
    <section
      className={styles.mentorSection}
      aria-label="Built by the ambitious"
      data-header-theme="dark"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>BUILT BY THE AMBITIOUS</h2>
          <p className={styles.subtitle}>
            Guided by leading professionals in the creative industry.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className={styles.carouselWrapper}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 130,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: `.${styles.pagination}`,
              bulletClass: styles.paginationBullet,
              bulletActiveClass: styles.paginationBulletActive,
            }}
            navigation={{
              nextEl: `.${styles.nextButton}`,
              prevEl: `.${styles.prevButton}`,
            }}
            className={styles.swiper}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          >
            {mentors.map((mentor, index) => (
              <SwiperSlide key={`${mentor.name}-${index}`} className={styles.swiperSlide}>
                <div className={styles.mentorCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      sizes="(max-width: 768px) 280px, 340px"
                      priority={index < 2}
                      className={styles.mentorImage}
                    />
                    <div className={styles.imageGradientOverlay} />
                  </div>
                  <div className={styles.mentorInfo}>
                    <h3 className={styles.mentorName}>{mentor.name}</h3>
                    <p className={styles.mentorRole}>{mentor.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls: Navigation Buttons and Pagination Bullets */}
          <div className={styles.controlsRow}>
            <div className={styles.navButtons}>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                aria-label="Previous mentor"
              >
                <ChevronLeftIcon className={styles.navIcon} />
              </button>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                aria-label="Next mentor"
              >
                <ChevronRightIcon className={styles.navIcon} />
              </button>
            </div>

            <div className={styles.pagination} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltByAmbitious;
export { BuiltByAmbitious };
