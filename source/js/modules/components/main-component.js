import {createElement} from "src/utils/render";

export default class MainComponent {
  constructor() {
    if (new.target === MainComponent) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Must be implemented`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
