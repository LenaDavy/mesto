export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._form = this._popup.querySelector('.popup__form');
  };

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.closePopup();
    };
  };

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', this.closePopup.bind(this));
    this._popup.addEventListener('mouseup', (event) => {
      if(event.target.classList.contains('popup_opened')) {  
        this.closePopup();
      }; 
    });
  };
};