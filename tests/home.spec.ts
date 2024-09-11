import { test, expect } from "@playwright/test";

test("home page has all sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Tech Products")).toBeVisible();
  await expect(page.getByText("News")).toBeVisible();
  await expect(page.getByText("People")).toBeVisible();
  await expect(page.getByText("Financial Data")).toBeVisible();
});

// Add more tests as needed
