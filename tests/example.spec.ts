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
  await page.getByRole('link', { name: 'Wnioski' }).click();
  await page.locator('.index-header-buttons > div > .chevron').click();
  await page.getByRole('link', { name: 'Przedszkole/Oddział przedszkolny' }).click();
  await page.getByRole('link', { name: 'Nowy wniosek rekrutacyjny do' }).click();
  await page.getByRole('textbox', { name: 'Imię *' }).click();
  await page.getByRole('textbox', { name: 'Imię *' }).fill('Marcin');
  await page.getByRole('textbox', { name: 'Nazwisko *' }).click();
  await page.getByRole('textbox', { name: 'Nazwisko *' }).fill('Goblin');
  await page.getByRole('textbox', { name: 'PESEL *' }).click();
  await page.getByRole('textbox', { name: 'PESEL *' }).fill('21242927672');
  await page.getByRole('textbox', { name: 'Miejscowość *' }).click();
  await page.getByRole('textbox', { name: 'Miejscowość *' }).fill('Lublin');
  await page.locator('a').filter({ hasText: 'Lublin (woj. LUBELSKIE,' }).click();
  await page.getByRole('textbox', { name: 'Numer domu *' }).click();
  await page.getByRole('textbox', { name: 'Numer domu *' }).fill('34');
  await page.getByRole('textbox', { name: 'Kod pocztowy *' }).click();
  await page.getByRole('textbox', { name: 'Kod pocztowy *' }).fill('20-387');
  await page.getByRole('textbox', { name: 'Poczta *' }).click();
  await page.getByRole('textbox', { name: 'Poczta *' }).fill('Lublin');

  await page.getByRole('button', { name: 'Następny etap' }).click();
});