import "jquery";

export default class ScrollDown {
  scrollPageDown() {
    const scrollButtonElement = $(`.website-promo__scroll-down`);
    const documentHeight = $(document).height();

    scrollButtonElement.click(() => {
      $(`html, body`).animate({
          scrollTop: documentHeight
        }, `slow`);
    });
  };
}
