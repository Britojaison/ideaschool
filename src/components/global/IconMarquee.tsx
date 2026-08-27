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

const ICON_CONFIG: Record<string, { scale?: number }> = {
  "cinco.webp": { scale: 1.8 },
  "saravana_store.webp": { scale: 1.3 },
  "MI.webp": { scale: 1.2 },
  "zenvista.webp": { scale: 1.15 },
};

export default function IconMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {ICONS.map((icon, index) => {
          const cfg = ICON_CONFIG[icon];
          return (
            <div key={index} className={styles.iconWrapper}>
              <img 
                src={`/assets/icons/${icon}`} 
                alt={icon.replace('.webp', '')} 
                className={styles.iconImage} 
                style={cfg?.scale ? { transform: `scale(${cfg.scale})` } : undefined}
              />
            </div>
          );
        })}
        {ICONS.map((icon, index) => {
          const cfg = ICON_CONFIG[icon];
          return (
            <div key={`dup-${index}`} className={styles.iconWrapper}>
              <img 
                src={`/assets/icons/${icon}`} 
                alt={icon.replace('.webp', '')} 
                className={styles.iconImage} 
                style={cfg?.scale ? { transform: `scale(${cfg.scale})` } : undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
