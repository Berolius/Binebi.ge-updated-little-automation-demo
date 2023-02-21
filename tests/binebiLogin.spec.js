const { test, expect } = require("@playwright/test");

test.only("binebi login test", async ({ page }) => {
  //author. variables
  const userName = page.locator("[type = text]");
  const password = page.locator("#passwordField");
  const signIn = page.locator("[type=submit]");
  const selectOpt = page.locator("[name^='params[home_hot_water]']").nth(0);
  await page.goto("https://binebi.ge/login");
  await expect(page).toHaveTitle("ავტორიზაცია");
  await userName.type("george_beradze@yahoo.com");
  await password.type("berolius");
  await signIn.click();

  await page.locator("text=განცხადების დამატება").nth(2).click();
  await selectOpt.selectOption("1124");
  await page.pause();
});
// a.list-group-item
