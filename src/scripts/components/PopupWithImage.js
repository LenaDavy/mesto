import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor (popupSelector, popupConfig) {
    super(popupSelector, popupConfig);
    this._popupPicture = this._popup.querySelector(this._popupConfig.popupImagePictureSelector);
    this._popupCity = this._popup.querySelector(this._popupConfig.popupImageCitySelector);
  };

  openPopup(data) {
    super.openPopup();
    this._popupPicture.src = data.link;
    this._popupPicture.alt = data.name;
    this._popupCity.textContent = data.name;
  };
};