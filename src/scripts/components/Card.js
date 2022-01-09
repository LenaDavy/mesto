export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._card = cardSelector;
  };
  _getCardTemplate() {
  const newItem = document.querySelector(this._card).content.querySelector('.card').cloneNode(true);
  return newItem;
  };

  fillCard() {
    this._item = this._getCardTemplate();
    this._item.querySelector('.card__city').textContent = this._name;
    this._item.querySelector('.card__img').src = this._link;
    this._item.querySelector('.card__img').alt = this._name;
    this._setEventListeners();
    return this._item;
  };
   
  _toggleLikeButton(evt) {
    evt.target.classList.toggle('card__like-button_active');
  };

  _removeCard() {
    this._item.remove();
    this._item = null;
  };

  _setEventListeners() {
    this._item.querySelector('.card__img').addEventListener('click', () => {
      this._handleCardClick();
    });
    this._item.querySelector('.card__like-button').addEventListener('click', (evt) => {
      this._toggleLikeButton(evt);
    });
    this._item.querySelector('.card__delete-button').addEventListener('click', () => {
      this._removeCard();
    });
  }
};