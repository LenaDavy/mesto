export default class Section {
  constructor({renderer}, container) {
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

  renderItems([array], method) {
    array.forEach((item) => {
      item.onload = this._renderer(item, method);
    });
  };

  renderUserItem(userCard, method) {
    userCard.onload = this._renderer(userCard, method);
  }
};