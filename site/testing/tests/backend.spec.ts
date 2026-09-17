import { test, expect } from "@playwright/test"
import { getEnv } from "../src/aConnection/EnvironmentConnection";


test("has title", async ({ page }) => {
  await page.goto(getEnv.BACKEND_URL);
  await expect(page).toHaveTitle(/Backend/);
});

test("home page access", async ({ request }) => {
  const response = await request.get(
    `${getEnv.BACKEND_URL}/`
  );

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("text/html");

  const body = await response.text();

  expect(body).toContain("<h1>Node Connection</h1>")
});
