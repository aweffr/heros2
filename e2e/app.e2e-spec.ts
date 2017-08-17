import { Heros2Page } from './app.po';

describe('heros2 App', () => {
  let page: Heros2Page;

  beforeEach(() => {
    page = new Heros2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
