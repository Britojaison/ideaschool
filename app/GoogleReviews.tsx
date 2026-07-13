"use client";

import { useRef } from "react";

type GoogleReview = {
  id: string;
  authorName: string;
  rating: number;
  text?: string;
  time: string;
  meta?: string;
};

const manualReviews: GoogleReview[] = [
  {
    id: "anuvind-s",
    authorName: "ANUVIND S",
    rating: 5,
    time: "a month ago",
    meta: "1 review",
    text:
      "Had a really good experience with Idea School pro gen ai workshop. The sessions were practical and easy to follow, and the mentors were top notch and supportive throughout also the environment feels professional and creative at the same time. Good place for anyone looking to improve their skills with real world guidance.",
  },
  {
    id: "rohan-raju",
    authorName: "rohan raju",
    rating: 5,
    time: "a month ago",
    meta: "Local Guide · 15 reviews · 11 photos",
    text:
      "For beginners learning AI would be overwhelming, idea school made it simpler to understand AI Ad videos and helps you in every step of the process to create a full fledged video in their offline workshop. They provide their higgsfield credentials with subscription for you to explore and create your first concept ai ad.",
  },
  {
    id: "adharsh-lenin",
    authorName: "ADHARSH LENIN",
    rating: 5,
    time: "2 months ago",
    meta: "7 reviews · 5 photos",
    text: "Good place",
  },
  {
    id: "d-house-of-swaad",
    authorName: "D House of Swaad",
    rating: 5,
    time: "a day ago",
    text:
      "I learnt editing tactics which really helped in scaling my channel. Thank you Idea School team.",
  },
  {
    id: "shatakshi-dhananjayan",
    authorName: "Shatakshi Dhananjayan",
    rating: 5,
    time: "a day ago",
    meta: "1 review",
    text: "Great place to learn AI and Creative Skills.",
  },
  {
    id: "wesley-brown",
    authorName: "Wesley Brown",
    rating: 5,
    time: "a month ago",
    meta: "2 reviews",
    text:
      "Awesome experience, great and simple teaching and up to the mark value for money one day course no more than the money indeed !!!!",
  },
  {
    id: "manoj-g",
    authorName: "Manoj G",
    rating: 4,
    time: "2 months ago",
    meta: "3 reviews",
    text:
      "I had a great session here. Learnt how Gen Ai works, practically gained knowledge about video generation and image generation.",
  },
  {
    id: "saurav-lama",
    authorName: "Saurav Lama",
    rating: 5,
    time: "22 hours ago",
    meta: "8 reviews · 3 photos",
  },
  {
    id: "dinesh-kumar",
    authorName: "Dinesh Kumar",
    rating: 5,
    time: "2 months ago",
    meta: "1 review",
  },
  {
    id: "n-valathi-vasanth",
    authorName: "N valathi vasanth",
    rating: 5,
    time: "2 years ago",
  },
];

const averageRating =
  manualReviews.reduce((total, review) => total + review.rating, 0) /
  manualReviews.length;

function renderStars(rating: number, size = 16) {
  return [...Array(5)].map((_, i) => (
    <svg
      key={i}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={i < Math.round(rating) ? "#FBBC05" : "#5e5e5e"}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ));
}

export default function GoogleReviews() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollReviews(direction: "previous" | "next") {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction === "next" ? rail.clientWidth : -rail.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <div className="googleReviews" aria-label="Google student reviews">
      <div className="googleReviewsIntro">
        <span className="googleReviewsEyebrow">Student reviews</span>
        <h2>See What Our Students Say</h2>
        <p>
          Real reviews from students and learners who experienced Idea School
          workshops.
        </p>

        <a
          href="https://g.page/r/CVrdr_VL0qSGEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="googleReviewsBtn"
        >
          <span className="googleIcon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </span>
          Leave a Review
        </a>
      </div>

      <div className="googleReviewsPanel">
        <aside className="googleReviewsSummary">
          <span className="googleReviewsSource">Google Reviews</span>
          <strong>{averageRating.toFixed(1)}</strong>
          <div
            className="googleReviewStars"
            aria-label={`${averageRating.toFixed(1)} out of 5 stars`}
          >
            {renderStars(averageRating, 20)}
          </div>
          <p>{manualReviews.length}+ selected student reviews</p>
        </aside>

        <div className="googleReviewsCarousel">
          <button
            className="googleReviewsArrow previous"
            type="button"
            aria-label="Previous reviews"
            onClick={() => scrollReviews("previous")}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
            </svg>
          </button>

          <div className="googleReviewsGrid" ref={railRef}>
            {manualReviews.map((review) => (
              <article key={review.id} className="googleReviewCard">
                <div className="googleReviewHeader">
                  <div className="googleReviewAvatar">
                    <div className="googleReviewInitials">
                      {review.authorName.charAt(0)}
                    </div>
                  </div>
                  <div className="googleReviewMeta">
                    <span className="googleReviewName">{review.authorName}</span>
                    {review.meta ? (
                      <span className="googleReviewProfileMeta">
                        {review.meta}
                      </span>
                    ) : null}
                    <span className="googleReviewTime">{review.time}</span>
                  </div>
                </div>

                <div
                  className="googleReviewStars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {renderStars(review.rating)}
                </div>

                {review.text ? (
                  <p className="googleReviewText">{review.text}</p>
                ) : (
                  <p className="googleReviewText googleReviewTextMuted">
                    Rated Idea School {review.rating} stars on Google.
                  </p>
                )}
              </article>
            ))}
          </div>

          <button
            className="googleReviewsArrow next"
            type="button"
            aria-label="Next reviews"
            onClick={() => scrollReviews("next")}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
