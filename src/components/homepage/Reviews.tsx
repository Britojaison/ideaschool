"use client";
import styles from "./Reviews.module.css";

const reviewsData = [
  { initial: 'A', name: 'ANUVIND S', meta: '1 review · a month ago', text: 'Practical, easy to follow, and top-notch mentors. A great environment to improve real-world skills!' },
  { initial: 'r', name: 'rohan raju', meta: 'Local Guide · 15 reviews · 11 photos', text: 'They make learning AI so simple! The workshop guided me step-by-step to create a full-fledged video ad.' },
  { initial: 'D', name: 'D House of Swaad', meta: 'a day ago', text: 'I learned editing tactics that truly scaled my channel. Thank you Idea School team!' },
  { initial: 'S', name: 'Shatakshi Dhananjayan', meta: '1 review · a day ago', text: 'Great place to learn AI and Creative Skills.' },
  { initial: 'W', name: 'Wesley Brown', meta: '2 reviews · a month ago', text: 'Awesome experience and great teaching! Unbelievable value for a one-day course.' },
  { initial: 'M', name: 'Manoj G', meta: '3 reviews · 2 months ago', text: 'Learnt exactly how Gen AI works with hands-on video and image generation.' }
];

export default function Reviews() {
  return (
    <section className={styles.reviewsSection} data-header-theme="dark">
      <div className={styles.container}>
        <div className={styles.reviewsHeader}>
          <h2>What people are saying</h2>

        </div>
      </div>

      <div className={styles.reviewsTrackWrapper}>
        <div className={styles.reviewsTrack}>
          <div className={styles.reviewsList}>
            {reviewsData.map((review, i) => (
              <div key={`first-${i}`} className={styles.reviewCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.reviewAvatar}>{review.initial}</div>
                  <div className={styles.reviewQuoteIcon}>“</div>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewAuthorBottom}>
                  <span className={styles.reviewName}>{review.name}</span>
                  <span className={styles.reviewDivider}>|</span>
                  <span className={styles.reviewDetails}>{review.meta}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.reviewsList} aria-hidden="true">
            {reviewsData.map((review, i) => (
              <div key={`second-${i}`} className={styles.reviewCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.reviewAvatar}>{review.initial}</div>
                  <div className={styles.reviewQuoteIcon}>“</div>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewAuthorBottom}>
                  <span className={styles.reviewName}>{review.name}</span>
                  <span className={styles.reviewDivider}>|</span>
                  <span className={styles.reviewDetails}>{review.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
