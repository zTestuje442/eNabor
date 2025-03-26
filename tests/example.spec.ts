import { test, expect } from '@playwright/test';


test('get started link', async ({ page }) => {
  await page.goto('http://umbilgoraj.prezentacja.int.zeto.lublin.pl/');

  await expect(page.getByText('Informacja o plikach cookie').first()).toBeVisible();

  await page.locator("#enable_accept").check();
  
  await page.locator("#ckaccept").click();


});
