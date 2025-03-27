import { test, expect } from '@playwright/test';


 test('get started link', async ({ page }) => {
  await page.goto('http://umbilgoraj.prezentacja.int.zeto.lublin.pl/');
  
  //Zaznaczanie Cookiess

  await expect(page.getByText('Informacja o plikach cookie').first()).toBeVisible();
  await page.locator("#enable_accept").check();
  await page.locator("#ckaccept").click();

  //Logowanie

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
  
  //Etap I - Uzupełnienie danych kandydata

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

  //Etap II - Uzupełnienie danych rodziców / opiekunów
  
  //Matka
  await page.locator('#guardian_stage_firstGuardian_guardian_firstName').click();
  await page.locator('#guardian_stage_firstGuardian_guardian_firstName').fill('Marianna');
  await page.locator('#guardian_stage_firstGuardian_guardian_lastName').click();
  await page.locator('#guardian_stage_firstGuardian_guardian_lastName').fill('Chochlik');
  await page.locator('#guardian_stage_firstGuardian_guardian_email').click();
  await page.locator('#guardian_stage_firstGuardian_guardian_email').fill('tester2623@wp.pl');
  await page.locator('#guardian_stage_firstGuardian_guardian_phone').click();
  await page.locator('#guardian_stage_firstGuardian_guardian_phone').fill('344234432');
  await page.locator('#guardian_stage_firstGuardian_guardian_useCandidateAddress').check();
  
  //Ojciec
  await page.locator('#guardian_stage_secondGuardian_guardian_firstName').click();
  await page.locator('#guardian_stage_secondGuardian_guardian_firstName').fill('Oliwier');
  await page.locator('#guardian_stage_secondGuardian_guardian_lastName').click();
  await page.locator('#guardian_stage_secondGuardian_guardian_lastName').fill('Nowakowski');
  await page.locator('#guardian_stage_secondGuardian_guardian_email').click();
  await page.locator('#guardian_stage_secondGuardian_guardian_email').fill('oliwier.nowakowski@o2.pl');
  await page.locator('#guardian_stage_secondGuardian_guardian_phone').click();
  await page.locator('#guardian_stage_secondGuardian_guardian_phone').fill('674837377');
  await page.getByRole('checkbox', { name: 'Użyj adresu kandydata', exact: true }).check();
  await page.getByRole('button', { name: 'Następny etap' }).click();

  //Etap III - Preferencje

  await page.getByRole('button', { name: 'dodaj Przedszkole „Kwiaty' }).click();
  await page.getByRole('button', { name: 'dodaj Szkoła Podstawowa im.' }).click();
  await page.getByRole('button', { name: 'Chcę zakończyć wybór' }).click();
  await page.getByRole('button', { name: 'Następny etap' }).click();

  //Etap III - Dodatkowe preferencje

  await page.getByRole('checkbox', { name: 'Śniadanie i obiad' }).check();
  await page.getByRole('checkbox', { name: 'Podwieczorek' }).check();
  await page.locator('input[name="confirm_will_questionaire\\[stayFrom\\]"]').click();
  await page.getByRole('cell', { name: '8:00', exact: true }).click();
  await page.getByRole('cell', { name: ':50' }).click();
  await page.getByRole('cell', { name: '14:00', exact: true }).click();
  await page.getByRole('cell', { name: ':55' }).click();
  await page.getByRole('button', { name: 'Weryfikacja danych i złożenie' }).click();

});