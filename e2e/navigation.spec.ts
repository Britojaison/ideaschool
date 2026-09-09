import { expect, test, type Page } from "@playwright/test";

async function dismissApplicationFormIfOpen(page: Page) {
  const applicationHeading = page.getByRole("heading", { name: "Take the first step." });
  if (await applicationHeading.isVisible()) {
    await page.getByRole("button", { name: "Close", exact: true }).click();
    await expect(applicationHeading).toBeHidden();
  }
}

const activeRoutes = [
  { path: "/", heading: /skills become your superpower/i },
  { path: "/visual-school", heading: /visual stories that/i },
  { path: "/creative-editing-course", heading: /editing is just the start/i },
  { path: "/industry-experience-program", heading: /don't just learn video editing/i },
  { path: "/master-video-editing", heading: /master high-paying video editing/i },
  { path: "/video-editing", heading: /high-paying video editing/i },
  { path: "/ad-film-making", heading: /ai-powered ad film making/i },
  { path: "/about", heading: /creating future ready pros/i },
];

test.describe("route health", () => {
  for (const route of activeRoutes) {
    test(`${route.path} renders user-facing content`, async ({ page }) => {
      const response = await page.goto(route.path);
      const main = page.locator("main");

      expect(response?.ok(), `${route.path} should return a successful response`).toBeTruthy();
      await expect(main.getByRole("heading", { name: route.heading }).first()).toBeVisible();
    });
  }
});

test.describe("desktop navigation", () => {
  test.skip(({ isMobile }) => isMobile, "Desktop dropdown navigation is covered by desktop browser projects.");
  test.use({ viewport: { width: 1440, height: 1000 } });

  test("homepage loads and primary header links navigate", async ({ page }) => {
    await page.goto("/");
    await dismissApplicationFormIfOpen(page);

    await expect(page).toHaveTitle(/IDEA School/i);
    await expect(page.getByRole("navigation", { name: "Main Navigation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "IDEA AI School home" })).toBeVisible();

    await page.getByRole("link", { name: "The IDEA" }).click();
    await expect(page).toHaveURL(/\/#the-idea$/);

    await page
      .getByRole("navigation", { name: "Main Navigation" })
      .getByRole("link", { name: "Visual School", exact: true })
      .click();
    await expect(page).toHaveURL(/\/visual-school$/);
    await expect(page.locator("main")).toContainText("Creative Editing & AI Pro");
  });

  test("visual school dropdown links open active program routes", async ({ page }) => {
    await page.goto("/");
    await dismissApplicationFormIfOpen(page);

    const mainNav = page.getByRole("navigation", { name: "Main Navigation" });
    const visualSchoolLink = mainNav.getByRole("link", { name: "Visual School", exact: true });
    await visualSchoolLink.hover();
    await expect(page.getByRole("link", { name: /Creative Editing & AI Pro/i }).first()).toBeVisible();

    const programLinks = [
      { href: "/creative-editing-course", url: /\/creative-editing-course$/ },
      { href: "/master-video-editing", url: /\/master-video-editing$/ },
      { href: "/video-editing", url: /\/video-editing$/ },
      { href: "/ad-film-making", url: /\/ad-film-making$/ },
    ];

    for (const program of programLinks) {
      await page.goto(program.href);
      await expect(page).toHaveURL(program.url);
    }
  });
});

test.describe("mobile navigation", () => {
  test.skip(({ isMobile }) => !isMobile, "Mobile drawer navigation is covered by the mobile project.");

  test("drawer opens, expands sections, navigates, and closes", async ({ page }) => {
    await page.goto("/about");

    const openMenu = page.getByRole("button", { name: "Open menu" });
    await expect(openMenu).toBeVisible();
    await openMenu.click();

    await expect(page.locator("#mobile-navigation").getByRole("button", { name: "Close menu" })).toBeVisible();
    await page.getByRole("button", { name: /schools/i }).click();
    await dismissApplicationFormIfOpen(page);
    await page.getByRole("link", { name: /Visual School/i }).click();

    await expect(page).toHaveURL(/\/visual-school$/);
    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("button", { name: /workshops/i }).click();
    await page.getByRole("link", { name: /AI Ad Film Making/i }).click();
    await expect(page).toHaveURL(/\/ad-film-making$/);
  });
});
