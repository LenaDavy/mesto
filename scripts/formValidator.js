export class FormValidator {
  constructor(config, selectedForm) {
    this._config = config;
    this._form = selectedForm;
    this._inputsList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
  };

  _showErrorNotice(selectedInput) {
    const errorNotice = this._form.querySelector(`.${selectedInput.id}-error`);
    errorNotice.textContent = selectedInput.validationMessage;
    selectedInput.classList.add(this._config.inputErrorClass);
    errorNotice.classList.add(this._config.errorClass);
  };

  _hideErrorNotice(selectedInput) {
    const errorNotice = this._form.querySelector(`.${selectedInput.id}-error`);
    selectedInput.classList.remove(this._config.inputErrorClass);
    errorNotice.classList.remove(this._config.errorClass);
    errorNotice.textContent = '';
  };

  _checkInputValidity(selectedInput) {
    if (!selectedInput.validity.valid) {
      this._showErrorNotice(selectedInput);
    } else {
      this._hideErrorNotice(selectedInput);
    }
  };

  _hasInvalidInput() {
    return this._inputsList.some((selectedInput) => {
      return !selectedInput.validity.valid;
    })
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.setAttribute('disabled', true);
      this._submitButton.classList.add(this._config.inactiveButtonClass);
    } else {
      this._submitButton.removeAttribute('disabled', true);
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
    }
  };

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._inputsList.forEach((selectedInput) => {
      selectedInput.addEventListener('input', () => {
        this._checkInputValidity(selectedInput);
        this._toggleButtonState();
      });
    });
  };
  enableValidation() {
    this._setEventListeners()
  }
};