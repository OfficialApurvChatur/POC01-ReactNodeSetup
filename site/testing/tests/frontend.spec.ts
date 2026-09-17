import { test, expect } from "@playwright/test"
import { getEnv } from "../src/aConnection/EnvironmentConnection";


test("has title", async ({ page }) => {
  await page.goto(getEnv.FRONTEND_URL);
  await expect(page).toHaveTitle(/Frontend/);
});

test("home page access", async ({ page }) => {
  await page.goto(getEnv.FRONTEND_URL);

  // React rendered heading
  await expect(
    page.locator("h1")
  ).toHaveText("React Connection");
});

