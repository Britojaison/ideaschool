const TIME_ZONE = "Asia/Kolkata";
const SHEET_NAME = "Bookings";
const HEADERS = [
  "Submitted At",
  "Program",
  "Appointment Date",
  "Time Slot",
  "Name",
  "Email",
  "Phone",
  "City",
  "Age",
  "Profession / Business",
  "Reason for Learning",
  "Attendance Confirmation",
  "Main Goal",
  "Calendar Event ID",
  "Status",
];

/**
 * Run this function once from the Apps Script editor while the fresh Sheet is open.
 * It creates the Bookings tab and saves the Sheet ID for web-app requests.
 */
function setupBookingSystem() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty(
    "SPREADSHEET_ID",
    spreadsheet.getId()
  );

  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#d8ff3e");
    sheet.setFrozenRows(1);
  }

  sheet.autoResizeColumns(1, HEADERS.length);
}

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);
    const data = JSON.parse(event.postData.contents || "{}");
    validateBooking_(data);

    const spreadsheetId = PropertiesService.getScriptProperties()
      .getProperty("SPREADSHEET_ID");
    if (!spreadsheetId) {
      throw new Error("Run setupBookingSystem once before accepting bookings.");
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    const start = parseAppointment_(data.date, data.slot);
    const end = new Date(start.getTime() + 45 * 60 * 1000);

    // Prevent two submissions from taking the same appointment slot.
    const conflicts = CalendarApp.getDefaultCalendar().getEvents(start, end);
    if (conflicts.length > 0) {
      return json_({
        success: false,
        error: "That time was just booked. Please choose another slot.",
      });
    }

    const title = `Idea School Expert Call - ${data.program || "Program"}`;
    const description = [
      `Student: ${data.name}`,
      `Phone: +91 ${data.phone}`,
      `City: ${data.city || "-"}`,
      `Profession: ${data.profession || "-"}`,
      `Goal: ${data.goal || "-"}`,
    ].join("\n");

    const calendarEvent = CalendarApp.getDefaultCalendar().createEvent(
      title,
      start,
      end,
      {
        description,
        guests: data.email,
        sendInvites: true,
      }
    );

    sheet.appendRow([
      new Date(),
      data.program || "",
      data.date,
      data.slot,
      data.name,
      data.email,
      data.phone,
      data.city || "",
      data.age || "",
      data.profession || "",
      data.reason || "",
      data.canAttend || "",
      data.goal || "",
      calendarEvent.getId(),
      "Confirmed",
    ]);

    const formattedDate = Utilities.formatDate(start, TIME_ZONE, "EEEE, d MMMM yyyy");
    const formattedTime = Utilities.formatDate(start, TIME_ZONE, "h:mm a");
    const formattedEnd = Utilities.formatDate(end, TIME_ZONE, "h:mm a");

    MailApp.sendEmail({
      to: data.email,
      subject: `Your Idea School call is confirmed - ${formattedDate}`,
      htmlBody: confirmationEmail_(data.name, data.program, formattedDate, formattedTime, formattedEnd),
      name: "Idea School",
    });

    return json_({
      success: true,
      eventId: calendarEvent.getId(),
    });
  } catch (error) {
    console.error(error);
    return json_({ success: false, error: error.message || String(error) });
  } finally {
    lock.releaseLock();
  }
}

function validateBooking_(data) {
  ["date", "slot", "name", "email", "phone"].forEach(function (field) {
    if (!data[field]) throw new Error(`Missing required field: ${field}`);
  });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error("Invalid email address.");
  }
}

function parseAppointment_(date, slot) {
  const dateParts = String(date).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const timeParts = String(slot).match(/^(\d{1,2}):(\d{2})\s*(am|pm)/i);
  if (!dateParts || !timeParts) throw new Error("Invalid appointment date or time.");

  let hour = Number(timeParts[1]);
  const minute = Number(timeParts[2]);
  const meridiem = timeParts[3].toLowerCase();
  if (meridiem === "pm" && hour !== 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;

  // Construct through an ISO offset so the value always represents India time.
  return new Date(
    `${dateParts[1]}-${dateParts[2]}-${dateParts[3]}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00+05:30`
  );
}

function confirmationEmail_(name, program, date, startTime, endTime) {
  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6;max-width:600px">
      <h2 style="margin-bottom:8px">Your appointment is confirmed!</h2>
      <p>Hi ${escapeHtml_(name)},</p>
      <p>Your expert call with Idea School has been scheduled.</p>
      <div style="background:#f5f5f5;border-left:5px solid #d8ff3e;padding:16px;margin:20px 0">
        <strong>${escapeHtml_(program || "Industry Experience Program")}</strong><br>
        Date: ${escapeHtml_(date)}<br>
        Time: ${escapeHtml_(startTime)} – ${escapeHtml_(endTime)} (Asia/Kolkata)<br>
        Duration: 45 minutes
      </div>
      <p>A Google Calendar invitation has also been sent to this email address.</p>
      <p>See you on the call!<br><strong>Idea School</strong></p>
    </div>`;
}

function escapeHtml_(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
