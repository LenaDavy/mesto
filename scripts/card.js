import { popupImage, popupCity, popupPicture, openPopup } from "./popupUtils.js";
import { cardSelector } from "./cardsInitialValue.js";
export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  };
  _getCardTemplate() {
  const newItem = document.querySelector(cardSelector).content.querySelector('.card').cloneNode(true);
  return newItem;
  };
  fillCard() {
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
    this._item = null;
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