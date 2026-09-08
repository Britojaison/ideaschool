import { test } from "@playwright/test";
import {
  fillAndSubmitBooking,
  fillAndSubmitHomepageApplication,
  openBookingModal,
  openHomepageApplicationForm,
} from "./helpers/forms";

test.describe("lead capture flows", () => {
  test("homepage apply CTA opens, fills, selects a program, and submits", async ({ page }) => {
    await openHomepageApplicationForm(page);
    await fillAndSubmitHomepageApplication(page);
  });

  test("booking modal supports date, time, typed fields, select, and submit", async ({ page }) => {
    await openBookingModal(page);
    await fillAndSubmitBooking(page);
  });
});
