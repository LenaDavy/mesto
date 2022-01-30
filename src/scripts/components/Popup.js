export default class Popup {
  constructor(popupSelector, popupConfig) {
    this._popup = document.querySelector(popupSelector);
    this._popupConfig = popupConfig;
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  openPopup() {
    this._popup.classList.add(this._popupConfig.openPopupSelector);
    document.addEventListener('keydown', this._handleEscClose);
  };

  closePopup() {
    this._popup.classList.remove(this._popupConfig.openPopupSelector);
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose(event) {
    if (event.key === 'Escape') {this.closePopup()};
  };

  setEventListeners() {
    this._popup.querySelector(this._popupConfig.closePopupSelector).addEventListener('click', this.closePopup.bind(this));
    this._popup.addEventListener('mouseup', (event) => {
      if(event.target.classList.contains(this._popupConfig.openPopupSelector)) { this.closePopup()}; 
    });
  };
};