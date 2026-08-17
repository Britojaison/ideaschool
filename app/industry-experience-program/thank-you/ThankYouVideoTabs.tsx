"use client";

import { useState } from "react";
import Image from "next/image";

const ourWorkVideos = [
  {
    id: "sunscreen-ad",
    title: "Brand Commercial",
    src: "/images/Brand Commercial/SunscreenAD_May22 V2.mp4",
    poster: "/images/Brand Commercial/SunscreenAD_May22 V2.webp",
    subtitle: "High-Paced Commercial Video Editing & Visual Pacing",
    aspectRatio: "16/9",
    maxWidth: "960px",
  },
  {
    id: "campa-ad",
    title: "AI Campaign Film",
    src: "/images/Brand Commercial/CampaAD_Seedance_May22.mp4",
    poster: "/images/Brand Commercial/CampaAD_Seedance_May22.webp",
    subtitle: "AI Video Generation & Commercial Workflows",
    aspectRatio: "16/9",
    maxWidth: "960px",
  },
  {
    id: "editing-promo",
    title: "Editing Promo",
    src: "/images/edit_1.mp4",
    poster: "/images/edit_1_poster.webp",
    subtitle: "High-Retention Storytelling & Dynamic Transitions",
    aspectRatio: "16/9",
    maxWidth: "960px",
  },
  {
    id: "recent-work",
    title: "Recent Brand Project",
    src: "/images/Aadi Sale (1).mp4",
    poster: "/images/aadi_sale_poster.webp",
    subtitle: "Retail & E-commerce Promotional Campaign",
    aspectRatio: "16/9",
    maxWidth: "960px",
  },
  {
    id: "case-study",
    title: "Vertical Case Study",
    src: "/images/workshop/zaman_case_study.mp4",
    poster: "/images/workshop/zaman_case_study_poster.webp",
    subtitle: "Vertical Ad Hook & Retention Strategy",
    aspectRatio: "9/16",
    maxWidth: "420px",
  },
];

const studentTestimonials = [
  {
    id: "student-1",
    name: "Student Review 1",
    role: "Video Editor & Alumni",
    src: "/images/proof-videos/student-feedback-1.mp4",
    poster: "/images/proof-videos/student-feedback-1.webp",
    rating: "★★★★★",
  },
  {
    id: "student-2",
    name: "Student Review 2",
    role: "Freelance Content Creator",
    src: "/images/proof-videos/student-feedback-2.mp4",
    poster: "/images/proof-videos/student-feedback-2.webp",
    rating: "★★★★★",
  },
  {
    id: "student-3",
    name: "Student Review 3",
    role: "Motion & Video Specialist",
    src: "/images/proof-videos/student-feedback-3.mp4",
    poster: "/images/proof-videos/student-feedback-3.webp",
    rating: "★★★★★",
  },
];

const brandLogos = [
  { name: "Netflix", src: "/images/NETFLIX-2.webp" },
  { name: "Amazon", src: "/images/AMAZON.webp" },
  { name: "Ashok Leyland", src: "/images/ASHOK LEYLAND.webp" },
  { name: "Finolex", src: "/images/FINOLEX.webp" },
  { name: "Milky Mist", src: "/images/MILKY MIST-2.webp" },
  { name: "Paytm", src: "/images/paytm.webp" },
  { name: "Poco", src: "/images/POCO.webp" },
  { name: "Xiaomi", src: "/images/XIAMO.webp" },
];

export function ShowreelSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentVideo = ourWorkVideos[activeTab];

  return (
    <div className="vslShowreelCard">
      <div className="vslTabsRow" role="tablist" aria-label="Our Works Video Selection">
        {ourWorkVideos.map((tab, idx) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === idx}
            className={`vslTabBtn ${activeTab === idx ? "active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        className="vslShowreelPlayer"
        style={{
          maxWidth: currentVideo.maxWidth,
          margin: "0 auto",
          aspectRatio: currentVideo.aspectRatio,
        }}
      >
        <video
          key={currentVideo.src}
          className="vslShowreelVideo"
          controls
          playsInline
          preload="metadata"
          poster={currentVideo.poster}
          aria-label={currentVideo.title}
        >
          <source src={currentVideo.src} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>

      <div className="vslShowreelTagline">
        <span>🎬 Real projects.</span>
        <span>⚡ Real creative workflows.</span>
        <span>🏆 Real industry experience.</span>
      </div>

      <div className="vslBrandsGrid">
        <div className="vslBrandsGridTitle">Brands &amp; Clients Our Team Has Created For</div>
        <div className="vslBrandsRow">
          {brandLogos.map((brand) => (
            <div key={brand.name} className="vslBrandLogoItem" title={brand.name}>
              <Image src={brand.src} alt={brand.name} width={100} height={32} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StudentTestimonialsSection() {
  return (
    <div className="vslStudentGrid">
      {studentTestimonials.map((item) => (
        <div key={item.id} className="vslStudentCard">
          <div className="vslStudentVideoWrapper">
            <video
              className="vslStudentVideo"
              controls
              playsInline
              preload="metadata"
              poster={item.poster}
              aria-label={item.name}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
          <div className="vslStudentInfo">
            <div className="vslStudentMeta">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
            <div className="vslStudentRating" aria-label="5 out of 5 stars">
              {item.rating}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
