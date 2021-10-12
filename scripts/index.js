const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__input_type_name');
const popupActivity = document.querySelector('.popup__input_type_activity');
const popupClose = document.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
function statusPopup() {
  popup.classList.toggle('popup_opened');
};
function handleFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = popupName.value;
  profileText.textContent = popupActivity.value;
  statusPopup();
};
editButton.addEventListener('click', function() {
  statusPopup();
  popupName.value = profileTitle.textContent;
  popupActivity.value = profileText.textContent;
  }
);
popupClose.addEventListener('click', statusPopup);
popupForm.addEventListener('submit', handleFormSubmit);