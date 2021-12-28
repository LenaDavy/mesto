export default class FormValidator {
  constructor(config, popupSelector) {
    this._config = config;
    this._popup = document.querySelector(popupSelector);
  };

  _showErrorNotice(selectedInput) {
    const errorNotice = this._popup.querySelector(`.${selectedInput.id}-error`);
    errorNotice.textContent = selectedInput.validationMessage;
    selectedInput.classList.add(this._config.inputErrorClass);
    errorNotice.classList.add(this._config.errorClass);
  };

  _hideErrorNotice(selectedInput) {
    const errorNotice = this._popup.querySelector(`.${selectedInput.id}-error`);
    selectedInput.classList.remove(this._config.inputErrorClass);
    errorNotice.classList.remove(this._config.errorClass);
    errorNotice.textContent = '';
  };

  disableCreateButton() {
    this._popup.querySelector('.popup__button').disabled = true;
    this._popup.querySelector('.popup__button').classList.add(this._config.inactiveButtonClass);
  };

  _checkInputValidity(selectedInput) {
    if (!selectedInput.validity.valid) {
      this._showErrorNotice(selectedInput);
    } else {
      this._hideErrorNotice(selectedInput);
    }
  };

  _hasInvalidInput(inputsList) {
    return inputsList.some((selectedInput) => { 
      return !selectedInput.validity.valid; 
    });
  }; 

  _toggleButtonState(inputsList) {
    const submitButton = this._popup.querySelector(this._config.submitButtonSelector);
    if (this._hasInvalidInput(inputsList)) {
      submitButton.setAttribute('disabled', true);
      submitButton.classList.add(this._config.inactiveButtonClass);
    } else {
      submitButton.removeAttribute('disabled', true);
      submitButton.classList.remove(this._config.inactiveButtonClass);
    }
  };

  _setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const inputsList = Array.from(this._popup.querySelectorAll(this._config.inputSelector));  
    inputsList.forEach((selectedInput) => {
      selectedInput.addEventListener('input', () => {
        this._checkInputValidity(selectedInput);
        this._toggleButtonState(inputsList);
      });
    });
  };
  
  enableValidation() {
   this._setEventListeners()
  };
};