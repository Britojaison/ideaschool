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
      throw new Error("GOOGLE_SCRIPT_URL is not set in environment variables.");
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

    const googleResult = await googleResponse.json();

    if (!googleResult.success) {
      throw new Error(googleResult.error || "Google Apps Script could not create the booking");
    }

    return NextResponse.json({
      success: true,
      message: "Booking confirmed",
      eventId: googleResult.eventId,
      meetLink: googleResult.meetLink,
    }, { status: 200 });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
