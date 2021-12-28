export default class Section {
  constructor({ array, renderer}, containerSelector) {
    this._initialArray = array;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  addItem(newItem) {
    this._container.prepend(newItem);
  };

  renderItems() {
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  };
};