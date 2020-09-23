import CatalogCardComponent from "src/components/catalog-card";
import {renderElement} from "src/utils/render";

const BATCH_RENDER_STEP = 9;

export default class CatalogController {
  constructor() {
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
    const from = BATCH_RENDER_STEP;
    const to = from + BATCH_RENDER_STEP;

    const cardControllerBatch = catalogCards
      .slice(from, to)
      .map((catalogCard) => {
        this._renderCatalogCard(catalogContainerElement, catalogCard);
      });

    return cardControllerBatch;
  }

  _renderMoreCatalogCards(catalogCards) {
    const loadMoreButtonElement = document.querySelector(`.catalog__btn`);

    loadMoreButtonElement.addEventListener(`click`, () => {
      if (catalogCards.length !== 0) {
        this._renderBatchCatalogCards(catalogCards);
        if (this._shouldButtonBeRendered(catalogCards)) {
          this._renderMoreButton(catalogCards);
        }
      }
    });
  }
}
