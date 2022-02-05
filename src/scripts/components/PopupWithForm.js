import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor (popupSelector, popupConfig, {handleFormSubmit}) {
    super(popupSelector, popupConfig);
    this._handleFormSubmit = handleFormSubmit;
    this._inputsList = this._popup.querySelectorAll(this._popupConfig.inputSelector);
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

  renderLoading(method) {
    const popupButtonSave = this._popup.querySelector(this._popupConfig.popupButtonSaveSelector)
    if (method == true) {
      popupButtonSave.textContent = 'Сохранить'
    } else { popupButtonSave.textContent = 'Сохранение...'}
  }
  
  closePopup() {
    super.closePopup();
    this._popup.querySelector(this._popupConfig.formSelector).reset();
  };
  
  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(this._popupConfig.formSelector).addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  };
};