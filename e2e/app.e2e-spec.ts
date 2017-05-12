import { ExamAsunPage } from './app.po';

describe('exam-asun App', () => {
  let page: ExamAsunPage;

  beforeEach(() => {
    page = new ExamAsunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
