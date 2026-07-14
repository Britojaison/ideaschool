import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey =
      process.env.GOOGLE_PLACES_API_KEY ??
      process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    const placeId =
      process.env.GOOGLE_PLACE_ID ??
      process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        {
          error:
            "Google reviews need GOOGLE_PLACES_API_KEY or NEXT_PUBLIC_GOOGLE_PLACES_API_KEY, plus GOOGLE_PLACE_ID or NEXT_PUBLIC_GOOGLE_PLACE_ID. Use a Places API key without HTTP referrer restrictions.",
        },
        { status: 500 }
      );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    const data = await res.json();

    if (data.status === "OK" && data.result?.reviews) {
      const goodReviews = data.result.reviews.filter((r: any) => r.rating > 3);

      const mappedReviews = goodReviews.map((r: any) => ({
        id: `${r.time}-${r.author_name}`,
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.relative_time_description,
        profile_photo_url: r.profile_photo_url,
      }));

      return NextResponse.json({
        reviews: mappedReviews,
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
      });
    } else {
      return NextResponse.json(
        { error: data.error_message || "Failed to fetch reviews", status: data.status },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
