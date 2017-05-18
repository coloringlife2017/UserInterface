import { ClUiPage } from './app.po';

describe('cl-ui App', () => {
  let page: ClUiPage;

  beforeEach(() => {
    page = new ClUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
