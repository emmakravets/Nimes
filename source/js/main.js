import ScrollDown from "src/scroll-down";
import CatalogCardsResponse from "src/backend/backend";

const scrollDown = new ScrollDown();
scrollDown.scrollPageDown();

const catalogCardsResponse = new CatalogCardsResponse();
catalogCardsResponse.loadMoreCatalogCards();
