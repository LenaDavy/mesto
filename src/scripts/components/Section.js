export default class Section {
  constructor({ array, renderer}, container) {
    this._initialArray = array;
    this._renderer = renderer;
    this._container = container;
  };

  addItem(newItem, method) {
    if (method != true) {
      this._container.prepend(newItem);
    } else {
      this._container.append(newItem);
    }
  };

  renderItems() {
    this._initialArray.forEach((item) => {
      item.onload = this._renderer(item);
    });
  };
};