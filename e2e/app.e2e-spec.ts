import { KendoAngularPage } from './app.po';

describe('kendo-angular App', () => {
  let page: KendoAngularPage;

  beforeEach(() => {
    page = new KendoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
