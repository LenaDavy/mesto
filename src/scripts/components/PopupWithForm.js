import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor (popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputsList = this._popup.querySelectorAll('.popup__input');
  };

  setInputsValues(data) {
    this._inputsList.forEach(input => {
      input.value = data[input.name] || '';
    }); 
  };

  _getInputValues() {
    this._inputsValues = {};
    this._inputsList.forEach(input => {
      this._inputsValues[input.name] = input.value;
    });
    return this._inputsValues;
  }; 
  
  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('.popup__form').addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closePopup();
    });
  };

  closePopup() {
    super.closePopup();
    this._form.reset();
  };
};