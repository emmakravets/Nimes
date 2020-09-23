import MainComponent from "src/components/main-component";

const createCatalogCardTemplate = (card) => {
  const {id, price} = card;
  return (
    `<li class="catalog__card">
      <a class="catalog__card-title" href="#">Jacket</a>
      <picture>
        <source type="image/webp" media="(min-width: 1320px)" srcset="img/woman-jacket-${id}-desktop.webp">
        <source type="image/webp" media="(min-width: 768px)" srcset="img/woman-jacket-${id}-tablet.webp">
        <source type="image/webp" srcset="img/woman-jacket-${id}-mobile.webp">
        <source media="(min-width: 1320px)" srcset="img/woman-jacket-${id}-desktop.jpg">
        <source media="(min-width: 768px)" srcset="img/woman-jacket-${id}-tablet.jpg">
        <img class="catalog__card-image" src="img/woman-jacket-${id}-mobile.jpg" width="130" height="160" alt="Woman in denim jacket">
      </picture>
      <p class="catalog__card-price">$ ${price}</p>
    </li>`
  );
};

export default class CatalogCardComponent extends MainComponent {
  constructor(card) {
    super();

    this._card = card;
  }

  getTemplate() {
    return createCatalogCardTemplate(this._card);
  }
}
