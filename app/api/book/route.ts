import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { program, date, slot, name, email, phone, city, age, profession, reason, canAttend, goal } = body;

    // Validate required fields
    if (!name || !email || !phone) {
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
    
    if (GOOGLE_SCRIPT_URL) {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
    } else {
      console.warn("GOOGLE_SCRIPT_URL is not set in environment variables.");
      // Simulate network delay if no URL is set
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json({ success: true, message: "Booking confirmed" }, { status: 200 });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
