import CatalogCardComponent from "src/components/catalog-card";
import {renderElement} from "src/utils/render";

const BATCH_RENDER_STEP = 9;
const CATALOG_CARDS_ON_START_COUNT = 9;

export default class CatalogController {
  constructor() {
    this._renderedCards = 0;
    this._catalogCardComponent = null;

    this._catalogCardsCountElement = document.querySelector(`.catalog__controls-count`);
  }

  render(catalogCards) {
    this._renderMoreCatalogCards(catalogCards);
    this._catalogCardsCountElement.textContent = catalogCards.length + CATALOG_CARDS_ON_START_COUNT;
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

  _renderMoreCatalogCards(catalogCards) {
    const loadMoreButtonElement = document.querySelector(`.catalog__btn`);

    const loadMoreButtonElementClickHandler = () => {
      if (catalogCards.length !== 0) {
        this._renderBatchCatalogCards(catalogCards);
        this._changeCatalogCardsCount(catalogCards);
        //this._changeProgressBar();
      }

      if (this._renderedCards >= catalogCards.length) {
        const parentElement = loadMoreButtonElement.parentElement;
        parentElement.removeChild(loadMoreButtonElement);
        loadMoreButtonElement.removeEventListener(`click`, loadMoreButtonElementClickHandler);
      }
    }

    loadMoreButtonElement.addEventListener(`click`, loadMoreButtonElementClickHandler);
  }

  _changeCatalogCardsCount(catalogCards) {
    const catalogLoadedCardsCountElement = document.querySelector(`.catalog__controls-count-loaded`);

    catalogLoadedCardsCountElement.textContent = this._renderedCards + CATALOG_CARDS_ON_START_COUNT;
    this._catalogCardsCountElement.textContent = catalogCards.length + CATALOG_CARDS_ON_START_COUNT;
  }

  /* _changeProgressBar() {
    const progressBarElement = document.querySelector(`.catalog__controls-range`);
    const loadedProgressBarElement = document.querySelector(`.catalog__controls-range-loaded`);

    let progressBarElementWidthOnStart = loadedProgressBarElement.offsetWidth;
    progressBarElementWidthOnStart = `${Math.round((progressBarElementWidthOnStart * 100) / progressBarElement.offsetWidth)}`;

    loadedProgressBarElement.style.position = `relative`;
    loadedProgressBarElement.style.left = `${+progressBarElementWidthOnStart * 2}%`;
  } */
}
