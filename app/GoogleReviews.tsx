"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type GoogleReview = {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: string;
  profile_photo_url?: string;
};

type ReviewsResponse = {
  reviews?: GoogleReview[];
  rating?: number;
  totalReviews?: number;
  error?: string;
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [placeRating, setPlaceRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const averageRating =
    placeRating ??
    (reviews.length
      ? reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
      : 0);
  const hasReviews = reviews.length > 0;

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = (await res.json()) as ReviewsResponse;

        if (!res.ok) {
          throw new Error(data.error || "Unable to load Google reviews.");
        }

        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setPlaceRating(data.rating ?? null);
          setTotalReviews(data.totalReviews ?? data.reviews.length);
        } else {
          setError("No Google reviews are available right now.");
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unable to load Google reviews.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviews();
  }, []);

  function renderStars(rating: number, size = 16) {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={i < Math.round(rating) ? "#FBBC05" : "#5e5e5e"}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ));
  }

  return (
    <div className="googleReviews" aria-label="Google student reviews">
      <div className="googleReviewsIntro">
        <span className="googleReviewsEyebrow">Student reviews</span>
        <h2>See What Our Students Say</h2>
        <p>
          Real Google reviews from students and alumni who experienced Idea
          School programs.
        </p>

        <a
          href="https://g.page/r/CVrdr_VL0qSGEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="googleReviewsBtn"
        >
          <span className="googleIcon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </span>
          Leave a Review
        </a>
      </div>

      {isLoading ? (
        <div className="googleReviewsPanel googleReviewsLoading" aria-live="polite">
          <div className="googleReviewsSummary googleReviewSkeleton" />
          <div className="googleReviewsGrid">
            {[...Array(3)].map((_, index) => (
              <div className="googleReviewCard googleReviewSkeleton" key={index} />
            ))}
          </div>
        </div>
      ) : error || !hasReviews ? (
        <div className="googleReviewsEmpty" role="status">
          <strong>Google reviews could not be loaded.</strong>
          <p>{error}</p>
        </div>
      ) : (
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
            <p>
              {totalReviews
                ? `${totalReviews}+ reviews on Google`
                : "Latest reviews from Google"}
            </p>
          </aside>

          <div className="googleReviewsGrid">
            {reviews.map((review) => (
              <article key={review.id} className="googleReviewCard">
                <div className="googleReviewHeader">
                  <div className="googleReviewAvatar">
                    {review.profile_photo_url ? (
                      <Image
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        width={48}
                        height={48}
                        className="googleReviewAvatarImage"
                      />
                    ) : (
                      <div className="googleReviewInitials">
                        {review.author_name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="googleReviewMeta">
                    <span className="googleReviewName">{review.author_name}</span>
                    <span className="googleReviewTime">{review.time}</span>
                  </div>
                </div>

                <div
                  className="googleReviewStars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {renderStars(review.rating)}
                </div>

                <p className="googleReviewText">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
