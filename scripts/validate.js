const showErrorNotice = (selectedForm, selectedInput, validationConfig) => {
  const errorNotice = selectedForm.querySelector(`.${selectedInput.id}-error`);
  errorNotice.textContent = selectedInput.validationMessage;
  selectedInput.classList.add(validationConfig.inputErrorClass);
  errorNotice.classList.add(validationConfig.errorClass);
};

const hideErrorNotice = (selectedForm, selectedInput, validationConfig) => {
  const errorNotice = selectedForm.querySelector(`.${selectedInput.id}-error`);
  selectedInput.classList.remove(validationConfig.inputErrorClass);
  errorNotice.classList.remove(validationConfig.errorClass);
  errorNotice.textContent = '';
};

const checkInputValidity = (selectedForm, selectedInput, validationConfig) => {
  if (!selectedInput.validity.valid) {
    showErrorNotice(selectedForm, selectedInput, validationConfig);
  } else {
    hideErrorNotice(selectedForm, selectedInput, validationConfig);
  }
};

const hasInvalidInput = (inputsList) => {
  return inputsList.some((selectedInput) => {
    return !selectedInput.validity.valid;
  })
};

const toggleButtonState = (inputsList, submitButton, validationConfig) => {
  if (hasInvalidInput(inputsList)) {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add(validationConfig.inactiveButtonClass);
  } else {
    submitButton.removeAttribute('disabled', true);
    submitButton.classList.remove(validationConfig.inactiveButtonClass);
  }
};

const setEventListeners = (selectedForm, validationConfig) => {
  const inputsList = Array.from(selectedForm.querySelectorAll(validationConfig.inputSelector));
  const submitButton = selectedForm.querySelector(validationConfig.submitButtonSelector);
  inputsList.forEach((selectedInput) => {
    selectedInput.addEventListener('input', () => {
      checkInputValidity(selectedForm, selectedInput, validationConfig);
      toggleButtonState(inputsList, submitButton, validationConfig);
    });
  });
};

const enableValidation = (validationConfig) => {
  const formsList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formsList.forEach((selectedForm) => {
    selectedForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(selectedForm, validationConfig);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});