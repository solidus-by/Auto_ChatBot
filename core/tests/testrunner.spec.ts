import { test, expect } from '@playwright/test';
import { Chatbot } from '../pages/chatbot';

test('test', async ({ page }) => {

  const chatbot = new Chatbot(page);
  chatbot.goto();

  await chatbot.chatbotBanner.click();
  await chatbot.fillWithText('AutoTestUser');
  await chatbot.btnSend.click();

  await chatbot.btnClickByText('Yes');
  await chatbot.btnClickByText('Explain chatbots');
  await chatbot.btnClickByText('Tell me');
  await chatbot.btnClickByText('What else?');
  await chatbot.btnClickByText('Wow, it does!');
  await chatbot.btnClickByText('No');
  await chatbot.btnClickByText('Register');

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe[name="mobile"]').getByRole('link', { name: 'here' }).click()
  ]);
/*
  chatbot.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  chatbot.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').fill('quit');

  chatbot.frameLocator('iframe[name="mobile"]').locator('[data-test="btn-send-message"]').click();

  chatbot.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'Make a chatbot' }).click();

  chatbot.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'No' }).click();

  chatbot.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'Yes' }).click();

  chatbot.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'From scratch' }).click();

  chatbot.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'No' }).click();

  chatbot.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  chatbot.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').fill('quit');

  chatbot.frameLocator('iframe[name="mobile"]').locator('[data-test="btn-send-message"]').click();

  chatbot.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'Yes' }).click();

  chatbot.locator('#sntch_close').click();

  await page.locator('#sntch_button').click();

  await page.locator('#sntch_close path').click();

  await page.locator('#sntch_button').click();

  await page.locator('#sntch_close svg').click();

  await page.locator('#sntch_button').click();

  await page.frameLocator('iframe[name="mobile"]').locator('.chat__channels-button').first().click();

  await page.frameLocator('iframe[name="mobile"]').getByPlaceholder('Enter Email').fill('asdfasdf');

  await page.frameLocator('iframe[name="mobile"]').getByPlaceholder('Enter Email').press('Shift+Home');

  await page.frameLocator('iframe[name="mobile"]').getByPlaceholder('Enter Email').fill('fooemail@email.com');

  await page.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'OK' }).click();

  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe[name="mobile"]').locator('button:nth-child(2)').first().click()
  ]);

  await page2.goto('https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F340741913012379%2F%3Fref%3D8407%257Cguestab405c1496640c6fde9b611ac45a3d7b925f49b9d5da3e6c204d1c274cdea21f%26messaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0');

  await page.frameLocator('iframe[name="mobile"]').locator('button:nth-child(3)').click();

  const [page4] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe[name="mobile"]').locator('button:nth-child(4)').click()
  ]);

  const [page5] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'email' }).click()
  ]);

  await page.frameLocator('iframe[name="mobile"]').locator('button:has-text("menu")').click();

  await page.frameLocator('iframe[name="mobile"]').getByRole('menuitem', { name: 'Pricing' }).click();

  await page.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'Not applicable' }).click();

  await page.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'No' }).click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').fill('exit');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').press('Shift+Home');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').fill('بشكل جديد MacBook Pro و MacBook تم إصدار');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').press('End');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').press('Enter');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').fill('exit');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').press('Enter');

  await page.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'Yes' }).click();

  await page.frameLocator('iframe[name="mobile"]').locator('button:has-text("menu")').click();

  await page.frameLocator('iframe[name="mobile"]').getByRole('menuitem', { name: 'Broadcast' }).click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="message-suggested-btn"]').click();

  await page.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'No thanks' }).click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  await page.frameLocator('iframe[name="mobile"]').locator('button:has-text("menu")').click();

  await page.frameLocator('iframe[name="mobile"]').getByRole('menuitem', { name: 'Text-To-Speech' }).click();

  await page.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'No thanks' }).click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').press('Control+c');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').press('Control+x');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click();

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').click({
    button: 'right'
  });

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="input-chat"]').fill('👌');

  await page.frameLocator('iframe[name="mobile"]').locator('[data-test="btn-send-message"]').click();

  await page.frameLocator('iframe[name="mobile"]').getByRole('button', { name: 'Yes' }).click();

  await page.locator('#sntch_close path').click();
*/
});