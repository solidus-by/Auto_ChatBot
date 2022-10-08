import { test, expect } from '@playwright/test';
import { Chatbot } from '../pages/chatbot';

test.describe('Chatbot TestCases', () => {

  test('TC1. Explain chatbots', async ({ page }) => {

    const chatbot = new Chatbot(page);
    chatbot.goto();

    await chatbot.chatbotBanner.click();
    
    await chatbot.fillWithText('AutoTestUser');
    await chatbot.btnSend.click();

    await chatbot.btnClickByText('Yes');
    await chatbot.btnClickByText('Explain chatbots');
    
    await chatbot.checkLastAnswer('Basically, we chatbots are just software applications, like any other application you use on your computer. The important difference is that people interface with us using conversation. Shall I say more about this? 👀');
    await page.close();

  });

  test('TC2. Exit chatbot', async ({ page }) => {

    const chatbot = new Chatbot(page);
    chatbot.goto();

    await chatbot.chatbotBanner.click();
    
    await chatbot.fillWithText('AutoTestUser');
    await chatbot.btnSend.click();

    await chatbot.btnClickByText('Yes');
    await chatbot.btnClickByText('Explain chatbots');
    
    await chatbot.btnClickByText('Tell me');
    await chatbot.checkLastAnswer('Having a conversational interface means that with a chatbot you talk to work with the software, instead of clicking buttons in a graphical interface.');

    await chatbot.btnClickByText('What else?');
    await chatbot.checkLastAnswer('The other, and less obvious, feature is our ability to process your natural language, it\'s called NLP. NLP allows chatbots to have an understanding of your intents and of entities. Does that sound impressive?🕺');

    await chatbot.btnClickByText('Wow, it does!');
    await chatbot.btnClickByText('No');

    await chatbot.chatbotFrameCloser.click();
    await page.close();
  });

});