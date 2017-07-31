import { SiblingPage } from './app.po';

describe('sibling App', () => {
  let page: SiblingPage;

  beforeEach(() => {
    page = new SiblingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
