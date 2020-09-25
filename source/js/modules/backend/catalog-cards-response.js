import "jquery";
import CatalogController from "src/controllers/catalog-controller";

const URL = `./js/modules/model/data.json`;
const METHOD = `GET`;
const DATA_TYPE = `html`;

export default class CatalogCardsResponse {
  loadMoreCatalogCards() {
    $.ajax({
      url: URL,
      type: METHOD,
      dataType: DATA_TYPE,
      success: (res) => {
        const catalogCards = $.parseJSON(res);

        const catalogController = new CatalogController();
        catalogController.render(catalogCards);
      }
    });
  }
}
