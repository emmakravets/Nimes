import "jquery";
import CatalogCardComponent from "src/components/catalog-card";
import {renderElement} from "src/utils/render";

const URL = `./js/modules/model/data.json`;
const METHOD = `GET`;
const DATA_TYPE = `html`;

const BATCH_RENDER_STEP = 9;

export default class CatalogController {
  constructor() {
    this._renderedCards = 0;
    this._catalogCardComponent = null;
  }

  render() {
    this._renderMoreCatalogCards();
  }

  _renderCatalogCard(containerElement, catalogCard) {
    this._catalogCardComponent = new CatalogCardComponent(catalogCard);

    renderElement(containerElement, this._catalogCardComponent)
  }

  _renderBatchCatalogCards(catalogCards) {
    const catalogContainerElement = document.querySelector(`.catalog__list`);
    const from = this._renderedCards;
    const to = from + BATCH_RENDER_STEP;

    catalogCards
      .slice(from, to)
      .map((catalogCard) => {
        this._renderCatalogCard(catalogContainerElement, catalogCard);
      });

    this._renderedCards = Math.min(to, catalogCards.length);
  }

  _renderMoreCatalogCards() {
    const loadMoreButtonElement = document.querySelector(`.catalog__btn`);

    const loadMoreButtonElementClickHandler = () => {
      $.ajax({
        url: URL,
        type: METHOD,
        dataType: DATA_TYPE,
        success: (res) => {
          const catalogCards = $.parseJSON(res);

          if (catalogCards.length !== 0) {
            this._renderBatchCatalogCards(catalogCards);
            this._changeLoadLine();
          }

          if (this._renderedCards >= catalogCards.length) {
            const parentElement = loadMoreButtonElement.parentElement;
            parentElement.removeChild(loadMoreButtonElement);
            loadMoreButtonElement.removeEventListener(`click`, loadMoreButtonElementClickHandler);
          }
        }
      });
    }

    loadMoreButtonElement.addEventListener(`click`, loadMoreButtonElementClickHandler);
  }

  _changeLoadLine() {
    const catalogCardsCountElement = document.querySelector(`.catalog__controls-count`);

    catalogCardsCountElement.textContent = +catalogCardsCountElement.textContent + BATCH_RENDER_STEP;
  }
}
