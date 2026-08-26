import React from 'react';
import styles from './IconMarquee.module.css';

const ICONS = [
  "AMAZON.webp",
  "ASHOK LEYLAND.webp",
  "FINOLEX.webp",
  "JLL.webp",
  "MI.webp",
  "MILKY MIST-2.webp",
  "NETFLIX-2.webp",
  "POCO.webp",
  "SIG.webp",
  "XIAMO.webp",
  "cinco.webp",
  "finolex logo.webp",
  "heritage.webp",
  "mapro.webp",
  "moj.webp",
  "paytm.webp",
  "saravana_store.webp",
  "srm.webp",
  "super_jewellery.webp",
  "tedx.webp",
  "zenvista.webp"
];

export default function IconMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {ICONS.map((icon, index) => (
          <div key={index} className={styles.iconWrapper}>
            <img 
              src={`/assets/icons/${icon}`} 
              alt={icon.replace('.webp', '')} 
              className={styles.iconImage} 
            />
          </div>
        ))}
        {ICONS.map((icon, index) => (
          <div key={`dup-${index}`} className={styles.iconWrapper}>
            <img 
              src={`/assets/icons/${icon}`} 
              alt={icon.replace('.webp', '')} 
              className={styles.iconImage} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
