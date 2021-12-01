import { popupImage, popupCity, popupPicture, openPopup } from "./index.js";
export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  };
  _getCardTemplate() {
  const newItem = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
  return newItem;
  };
  generateCard() {
    this._item = this._getCardTemplate();
    this._item.querySelector('.card__city').textContent = this._name;
    this._item.querySelector('.card__img').src = this._link;
    this._setEventListeners();
    return this._item;
  };
  _openPopup() {
    openPopup(popupImage);
    popupPicture.setAttribute('src', this._link);
    popupPicture.setAttribute('alt', this._name);
    popupCity.innerText = this._name;
  };
  _toggleLikeButton(evt) {
    evt.target.classList.toggle('card__like-button_active');
  };
  _removeCard() {
    this._item.remove();
  };
  _setEventListeners() {
    this._item.querySelector('.card__img').addEventListener('click', event => {
      this._openPopup();
    });
    this._item.querySelector('.card__like-button').addEventListener('click', (evt) => {
      this._toggleLikeButton(evt);
    });
    this._item.querySelector('.card__delete-button').addEventListener('click', () => {
      this._removeCard();
    });
  }
};