# Google Sheet booking setup

1. Open the fresh Google Sheet and choose **Extensions → Apps Script**.
2. Replace the editor contents with `Code.gs` from this folder and save it.
3. In **Project Settings**, set the project time zone to **(GMT+05:30) Asia/Kolkata**.
4. Select `setupBookingSystem` in the function menu and click **Run** once. Approve the Sheet permissions. This creates the `Bookings` tab and its headings.
5. Choose **Deploy → New deployment → Web app**.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**. Deploy and approve the Calendar and email permissions.
7. Copy the `/exec` URL into the website environment variable `GOOGLE_SCRIPT_URL`.
8. Submit one test booking from the website and confirm the row, Calendar event, invitation, and confirmation email.

When the script changes later, use **Deploy → Manage deployments → Edit**, choose **New version**, and deploy again. The existing `/exec` URL will continue working.
