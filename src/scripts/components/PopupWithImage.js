import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {

  openPopup(data) {
    super.openPopup();
    this._popup.querySelector('.popup-image__picture').src = data.link;
    this._popup.querySelector('.popup-image__city').textContent = data.name;
    this.setEventListeners();
  };
};