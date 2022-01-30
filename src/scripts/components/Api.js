import { handleResponce } from "../utils/constants.js"
export default class Api {
  constructor({url, headers}) {
    this._url = url,
    this._headers = headers
  };

  getInitialCards() {
    return fetch(`${this._url}/cards`, { headers: this._headers })
    .then(handleResponce)
  };

  getUserInfo() {
    return fetch(`${this._url}/users/me`, { headers: this._headers })
    .then(handleResponce)
  };

  changeUserAvatar(avatarPopupValue) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarPopupValue.avatar,
      })
    })
    .then(handleResponce)
  };

  changeUserInfo(profilePopupValues) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: profilePopupValues.name,
        about: profilePopupValues.about
      })
    })
    .then(handleResponce)
  };

  putLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, { 
      method: 'PUT',
      headers: this._headers })
    .then(handleResponce)
  };

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers })
    .then(handleResponce)
  };
    
  createUserCard(cardPopupValues) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardPopupValues.name,
        link: cardPopupValues.link
      })
    })
    .then(handleResponce)
  };

  deleteUserCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(handleResponce)
  };
};