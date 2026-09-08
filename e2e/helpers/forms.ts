import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export async function mockApplicationSubmit(page: Page) {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    });
  });
}

export async function mockBookingSubmit(page: Page) {
  await page.route("**/api/book", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        success: true,
        message: "Booking confirmed",
        eventId: "e2e-event",
        meetLink: "https://example.test/meet",
      }),
    });
  });
}

export async function openHomepageApplicationForm(page: Page) {
  await mockApplicationSubmit(page);
  await page.goto("/");

  const applicationHeading = page.getByRole("heading", { name: "Take the first step." });
  if (!(await applicationHeading.isVisible())) {
    const applyButton = page.getByRole("button", { name: /^apply now$/i });
    if (await applyButton.isVisible()) {
      await applyButton.click();
    } else {
      await page.getByRole("button", { name: "Open menu" }).click();
      await page.getByRole("button", { name: /let's talk/i }).click();
    }
  }
  await expect(page.getByRole("heading", { name: "Take the first step." })).toBeVisible();
}

export async function fillAndSubmitHomepageApplication(page: Page) {
  await page.getByPlaceholder("name@example.com").fill("e2e-applicant@example.com");
  await page.getByPlaceholder("Full Name").fill("E2E Applicant");
  await page.getByPlaceholder("Phone Number").fill("9876543210");
  await page.locator("select#program").selectOption("visual");
  await page.getByRole("button", { name: "Submit Application" }).click();

  await expect(page.getByRole("status")).toContainText("Application received");
}

export async function openBookingModal(page: Page) {
  await mockBookingSubmit(page);
  await page.goto("/industry-experience-program");
  await page.getByRole("button", { name: /apply for the program/i }).click();

  await expect(page.getByRole("heading", { name: /expert call/i })).toBeVisible();
}

export async function fillAndSubmitBooking(page: Page) {
  const today = new Date();
  const day = String(today.getDate());

  await page.getByRole("button", { name: day, exact: true }).click();
  await page.getByRole("button", { name: "10:15 am - 11:00 am" }).click();
  await page.getByRole("button", { name: "Next", exact: true }).dispatchEvent("click");

  await page.getByPlaceholder("Enter your name").fill("E2E Booker");
  await page.getByPlaceholder("Enter your email").fill("e2e-booking@example.com");
  await page.getByPlaceholder("Enter phone number").fill("9876543210");
  await page.getByPlaceholder("Enter your city").fill("Chennai");
  await page.getByPlaceholder("Enter your age").fill("24");
  await page.getByPlaceholder("E.g. Student, Video Editor, etc.").fill("Video Editor");
  await page.getByPlaceholder("Briefly explain your reason").fill("I want to build client-ready editing projects.");
  await page.getByRole("combobox").selectOption("Yes, I promise");
  await page.getByPlaceholder("Your main goal").fill("Build a stronger portfolio.");
  await page.getByRole("button", { name: "Schedule Appointment" }).click();

  await expect(page.getByRole("heading", { name: "Booking Confirmed!" })).toBeVisible();
}
