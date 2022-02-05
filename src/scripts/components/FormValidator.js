export default class FormValidator {
  constructor(config, popupSelector) {
    this._config = config;
    this._popup = document.querySelector(popupSelector);
    this._inputsList = Array.from(this._popup.querySelectorAll(this._config.inputSelector));  
    this._submitButton = this._popup.querySelector(this._config.submitButtonSelector);
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

  disableSubmitButton() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._config.inactiveButtonClass);
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

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputsList)) {
      this.disableSubmitButton();
    } else {
      this._submitButton.removeAttribute('disabled', true);
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
    }
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputsList.forEach((inputElement) => {
      this._hideErrorNotice(inputElement)
    });

  }

  _setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputsList.forEach((selectedInput) => {
      selectedInput.addEventListener('input', () => {
        this._checkInputValidity(selectedInput);
        this._toggleButtonState(this._inputsList);
      });
    });
    this._popup.addEventListener('reset', () => {
      this.resetValidation();
    });
  };
  
  enableValidation() {
   this._setEventListeners()
  };
};