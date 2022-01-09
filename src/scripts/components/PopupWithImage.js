import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._popupPicture = this._popup.querySelector('.popup-image__picture');
    this._popupCity = this._popup.querySelector('.popup-image__city');
  };

  openPopup(data) {
    super.openPopup();
    this._popupPicture.src = data.link;
    this._popupPicture.alt = data.name;
    this._popupCity.textContent = data.name;
  };
};