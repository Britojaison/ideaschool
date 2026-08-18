import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './BuiltByAmbitious.module.css';

const mentors = [
  { name: 'Arjun', role: 'CEO', image: '/assets/images/mentor_ARJUN.png', color: '#a8d98a' }, // Greenish
  { name: 'Parithi', role: 'Head of Design', image: '/assets/images/mentor_PARITHI.png', color: '#d9a88a' },
  { name: 'Chandru', role: 'Senior Creative Strategist & Visualiser', image: '/assets/images/mentor_CHANDRU.png', color: '#d1ca64' }, // Yellowish
  { name: 'Ajay', role: 'Video Editor, Design', image: '/assets/images/mentor_AJAY.png', color: '#b55e75' }, // Reddish
  { name: 'Zaman', role: 'Head of Growth', image: '/assets/images/zaman.png', color: '#8aa3d9' }, 
];

const BuiltByAmbitious = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.mentorSection} aria-label="Built by the ambitious" data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>BUILT BY THE AMBITIOUS</h2>
          <p className={styles.subtitle}>
            Guided by leading professionals in the creative industry.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel} ref={carouselRef}>
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className={styles.mentorCard}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={mentor.image} 
                    alt={mentor.name} 
                    fill 
                    sizes="(max-width: 768px) 80vw, 30vw" 
                    className={styles.mentorImage} 
                  />
                </div>
                <div className={styles.mentorInfo}>
                  <h3 className={styles.mentorName}>{mentor.name}</h3>
                  <p className={styles.mentorRole}>{mentor.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.controls}>
             <button className={styles.navButton} onClick={scrollLeft} aria-label="Previous">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
             </button>
             <button className={styles.navButton} onClick={scrollRight} aria-label="Next">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltByAmbitious;
