import { test, expect } from "@playwright/test";

test("Create and delete course", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Name" }).click();
  await page.getByRole("textbox", { name: "Name" }).fill("Test course");
  await page.getByRole("textbox", { name: "Description" }).click();
  await page
    .getByRole("textbox", { name: "Description" })
    .fill("Test description");
  await page.getByRole("button", { name: "Create" }).click();
  await page.getByText("Test courseTest descriptionDelete").last().click();
  await page
    .locator("div")
    .filter({ hasText: /^Test courseTest descriptionDelete$/ })
    .getByRole("button")
    .click();

  await expect(
    page.getByText("Test courseTest descriptionDelete"),
  ).not.toBeVisible();
});
