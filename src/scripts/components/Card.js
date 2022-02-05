import { api } from "../../pages/index.js";
export default class Card {
  constructor({data, handleClickImage, handleClickDeleteButton, cardConfig}) {
    this._data = data;
    this._handleClickImage = handleClickImage;
    this._handleClickDeleteButton = handleClickDeleteButton;
    this._cardConfig = cardConfig;
  };

  _getCardTemplate() {
  const newItem = document.querySelector(this._cardConfig.templateCardSelector).content.querySelector(this._cardConfig.cardSelector).cloneNode(true);
  return newItem;
  };

  fillCard() {
    this._item = this._getCardTemplate();
    this._handleUserInfo();
    this._item.querySelector(this._cardConfig.cardLikeCounterSelector).textContent = this._data.likes.length;
    this._item.querySelector(this._cardConfig.cardCitySelector).textContent = this._data.name;
    const cardImage = this._item.querySelector(this._cardConfig.cardImageSelector);
    cardImage.src = this._data.link;
    cardImage.alt = this._data.name;
    this._setEventListeners();
    return this._item;
  };

  _countLikes(cardId, evt) {
    const likesCounter = this._item.querySelector(this._cardConfig.cardLikeCounterSelector);
    api.getUserInfo()
    .then(userData => {
      if (this._data.likes.some((item) => {return item._id === userData._id})) {
        api.deleteLike(cardId)
        .then(res => {
          this._data.likes = res.likes;
          likesCounter.textContent = res.likes.length;
          evt.target.classList.remove(this._cardConfig.cardLikeButtonActiveSelector);
        })
        .catch((res) => { console.log(`Error: ${res.status}`)})
      } else { api.putLike(cardId)
        .then(res => {
          this._data.likes = res.likes;
          likesCounter.textContent = res.likes.length;
          evt.target.classList.add(this._cardConfig.cardLikeButtonActiveSelector);
        })
        .catch((res) => { console.log(`Error: ${res.status}`)})
    }})
  };

  _handleUserInfo() {
    api.getUserInfo()
    .then(res => {
      if (res._id === this._data.owner._id) { return
      } else {
        this._item.querySelector(this._cardConfig.cardDeleteButtonSelector).remove()
      }
      if (this._data.likes.some((item) => {return item._id === res._id})) {
        this._item.querySelector(this._cardConfig.cardLikeButtonSelector).classList.add(this._cardConfig.cardLikeButtonActiveSelector)
      } else { return }
    })
    .catch((res) => { console.log(`Error: ${res.status}`)})
  };
    
  _setEventListeners() {
    this._item.querySelector(this._cardConfig.cardImageSelector).addEventListener('click', () => {
      this._handleClickImage();
    });
    this._item.querySelector(this._cardConfig.cardLikeButtonSelector).addEventListener('click', (evt) => {
      this._countLikes(this._data._id, evt)
    });
    this._item.querySelector(this._cardConfig.cardDeleteButtonSelector).addEventListener('click', () => {
      this._handleClickDeleteButton(this._data._id, this._item)
    });
  }
};