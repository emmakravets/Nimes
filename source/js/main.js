import ScrollDown from "src/scroll-down";
import CatalogCardsResponse from "src/backend/catalog-cards-response";

const catalogCardsResponse = new CatalogCardsResponse();
catalogCardsResponse.loadMoreCatalogCards();

const scrollDown = new ScrollDown();
scrollDown.scrollPageDown();
