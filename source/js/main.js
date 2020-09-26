import ScrollDown from "src/scroll-down";
import CatalogController from "src/controllers/catalog-controller";

const catalogController = new CatalogController();
catalogController.render();

const scrollDown = new ScrollDown();
scrollDown.scrollPageDown();
