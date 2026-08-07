import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { program, date, slot, name, email, phone, city, age, profession, reason, canAttend, goal } = body;

    // Validate required fields
    if (!date || !slot || !name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("=== New Booking Received ===");
    console.log(`Program: ${program}`);
    console.log(`Date: ${date}`);
    console.log(`Slot: ${slot}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`City: ${city}`);
    console.log(`Age: ${age}`);
    console.log(`Profession: ${profession}`);
    console.log(`Reason: ${reason}`);
    console.log(`Can Attend: ${canAttend}`);
    console.log(`Goal: ${goal}`);
    console.log("============================");

    // Connect to Google Sheets via Google Apps Script Web App
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error("Booking API is not configured: GOOGLE_SCRIPT_URL is missing.");
      return NextResponse.json(
        { error: "Booking service is not configured. Please contact us directly." },
        { status: 503 },
      );
    }

    const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        // text/plain avoids an unnecessary browser-style preflight in Apps Script.
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    if (!googleResponse.ok) {
      throw new Error(`Google Apps Script returned ${googleResponse.status}`);
    }

    const responseText = await googleResponse.text();
    let googleResult: { success?: boolean; error?: string; eventId?: string; meetLink?: string };

    try {
      googleResult = JSON.parse(responseText);
    } catch {
      throw new Error("Google Apps Script returned an invalid response");
    }

    if (!googleResult.success) {
      const message = googleResult.error || "Google Apps Script could not create the booking";
      const isSlotConflict = message.toLowerCase().includes("booked");

      return NextResponse.json(
        { error: message },
        { status: isSlotConflict ? 409 : 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking confirmed",
      eventId: googleResult.eventId,
      meetLink: googleResult.meetLink,
    }, { status: 200 });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "Unable to schedule the appointment right now. Please try again later." },
      { status: 502 },
    );
  }
}
