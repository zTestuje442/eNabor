import { test, expect } from '@playwright/test';


test('get started link', async ({ page }) => {
  await page.goto('http://umbilgoraj.prezentacja.int.zeto.lublin.pl/');

  await expect(page.getByText('Informacja o plikach cookie').first()).toBeVisible();

  await page.locator("#enable_accept").check();
  
  await page.locator("#ckaccept").click();
  await page.getByRole('link', { name: 'Zaloguj' }).click();
  await page.getByRole('textbox', { name: 'adres email' }).click();
  await page.getByRole('textbox', { name: 'adres email' }).fill('automattest@enabor.loc');
  await page.getByRole('textbox', { name: 'hasło' }).click();
  await page.getByRole('textbox', { name: 'hasło' }).fill('Zeto123!');
  await page.getByRole('button', { name: 'Zaloguj się' }).click();

});