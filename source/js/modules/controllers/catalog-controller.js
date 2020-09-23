import CatalogCardComponent from "src/components/catalog-card";
import {renderElement} from "src/utils/render";

const BATCH_RENDER_STEP = 9;

export default class CatalogController {
  constructor() {
    this._renderedCards = 0;
    this._catalogCardComponent = null;
  }

  render(catalogCards) {
    this._renderMoreCatalogCards(catalogCards);
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

    loadMoreButtonElement.addEventListener(`click`, () => {
      if (catalogCards.length !== 0) {
        this._renderBatchCatalogCards(catalogCards);
      }
    });
  }
}
