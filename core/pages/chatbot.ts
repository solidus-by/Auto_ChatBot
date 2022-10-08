import { expect, FrameLocator, Locator, Page } from '@playwright/test';


export class Chatbot {
  readonly page:            Page;
  readonly chatbotBanner:         Locator;
  readonly chatbotFrame:    FrameLocator;
  readonly chatbotInput:    Locator;
  readonly btnSend:         Locator;
  readonly lastAnswer:      Locator;

  constructor(page: Page) {
    this.page = page;

    this.chatbotBanner = this.page.locator('#sntch_button');
    this.chatbotFrame = this.page.frameLocator('iframe[name="mobile"]');
    this.chatbotInput = this.chatbotFrame.locator('[data-test="input-chat"]');
    this.btnSend = this.chatbotFrame.locator('[data-test="btn-send-message"]');
    this.lastAnswer = this.chatbotFrame.locator('div.message__wrapper > div > div > p').last();
  
  }

  async goto() {
    await this.page.goto('https://snatchbot.me/');
  }

  async btnClickByText(text: string) {
    await this.chatbotFrame.getByRole('button', { name: text }).click();
  }

  async fillWithText(text: string) {
    await this.chatbotInput.click();
    await this.chatbotInput.fill(text);
  }

  async checkLastAnswer(text: string) {
    expect (this.lastAnswer.innerText(), text);
  }

}