import ScrollDown from "src/scroll-down";
import CatalogController from "src/controllers/catalog-controller";

const scrollDown = new ScrollDown();
scrollDown.scrollPageDown();

const catalogController = new CatalogController();
catalogController.render();
