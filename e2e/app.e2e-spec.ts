import { NgKarmaTestPage } from './app.po';

describe('ng-karma-test App', () => {
  let page: NgKarmaTestPage;

  beforeEach(() => {
    page = new NgKarmaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
