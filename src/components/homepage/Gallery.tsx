import React from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

import web1 from "@public/assets/home/web1.png";
import bg2 from "@public/assets/home/bg2.png";
import bg3 from "@public/assets/home/bg3.png";
import bg4 from "@public/assets/home/bg4.png";
import bg5 from "@public/assets/home/bg5.png";
import bg6 from "@public/assets/home/bg6.png";
import work1 from "@public/assets/home/work1.png";
import work2 from "@public/assets/home/work2.png";
import web2 from "@public/assets/home/web2.png";

const Gallery = () => {
  return (
    <section id="gallery-section" className={styles.gallerySection} style={{ backgroundColor: "#f9f8f6", color: "#0a0a0c" }}>
      <div className="sectionHead">
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <h2 className={`title ${styles.galleryTitle}`} style={{ color: "inherit" }}>GALLERY</h2>

        </div>
      </div>

      <div className={styles.galleryGrid}>

        {/* Column 1 */}
        <div className={styles.galleryCol}>
          {/* Row 1: Square Image */}
          <div className={`${styles.galleryItem} ${styles.aspectSquare}`}>
            <Image src={web1} alt="Project 1" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          {/* Row 2: Square Text (100+) */}
          <div className={`${styles.galleryItem} ${styles.galleryTextCard} ${styles.aspectSquare}`} style={{ backgroundColor: "var(--red)", color: "var(--snow)" }}>
            <h2>Idea</h2>
            <h3>To Reality</h3>
            <p>Master the art of AI assisted visual storytelling</p>
          </div>
          {/* Row 3: Tall Image */}
          <div className={`${styles.galleryItem} ${styles.aspectTall}`}>
            <Image src={bg2} alt="Project 2" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* Column 2 */}
        <div className={styles.galleryCol}>
          {/* Row 1: Square Image */}
          <div className={`${styles.galleryItem} ${styles.aspectSquare}`}>
            <Image src={bg3} alt="Project 3" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          {/* Row 2: Tall Image */}
          <div className={`${styles.galleryItem} ${styles.aspectTall}`}>
            <Image src={bg4} alt="Project 4" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          {/* Row 3: Square Image */}
          <div className={`${styles.galleryItem} ${styles.aspectSquare}`}>
            <Image src={work1} alt="Project 5" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* Column 3 */}
        <div className={styles.galleryCol}>
          {/* Row 1: Square Text (15x) */}
          <div className={`${styles.galleryItem} ${styles.galleryTextCard} ${styles.aspectSquare}`} style={{ backgroundColor: "var(--red)", color: "var(--snow)" }}>
            <h2>Hands on</h2>
            <h3>Experience</h3>
            <p>Learn by doing in our immersive creative labs</p>
          </div>
          {/* Row 2: Tall Image (Collage in original) */}
          <div className={`${styles.galleryItem} ${styles.aspectTall}`}>
            <Image src={work2} alt="Project 6" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          {/* Row 3: Square Image */}
          <div className={`${styles.galleryItem} ${styles.aspectSquare}`}>
            <Image src={web2} alt="Project 7" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* Column 4 */}
        <div className={styles.galleryCol}>
          {/* Row 1: Square Image */}
          <div className={`${styles.galleryItem} ${styles.aspectSquare}`}>
            <Image src={bg5} alt="Project 8" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          {/* Row 2: Tall Image */}
          <div className={`${styles.galleryItem} ${styles.aspectTall}`}>
            <Image src={bg6} alt="Project 9" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          {/* Row 3: Square Text */}
          <div className={`${styles.galleryItem} ${styles.galleryTextCard} ${styles.aspectSquare}`} style={{ backgroundColor: "var(--red)", color: "var(--snow)" }}>
            <h2>Future</h2>
            <h3>Of Filmmaking</h3>
            <p>Stay ahead with cutting edge post production workflows</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
