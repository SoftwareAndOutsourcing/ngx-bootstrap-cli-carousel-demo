import { NgxBootstrapCliCarouselDemoPage } from './app.po';

describe('ngx-bootstrap-cli-carousel-demo App', () => {
  let page: NgxBootstrapCliCarouselDemoPage;

  beforeEach(() => {
    page = new NgxBootstrapCliCarouselDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
