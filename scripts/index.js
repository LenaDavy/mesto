import { popupImage, openPopup, closePopup } from "./popupUtils.js"
import { initialValue, popupCard } from "./cardsInitialValue.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const addButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup-profile');
const closeProfileForm = document.querySelector('.popup-profile__close');
const popupName = document.querySelector('.popup__input_type_name');
const popupActivity = document.querySelector('.popup__input_type_activity');
const formProfile = document.querySelector('.popup-profile__form');
const popupProfileValidation = new FormValidator(popupConfig, popupProfile);

const closeCardForm = document.querySelector('.popup-card__close');
const popupTitle = document.querySelector('.popup__input_type_title');
const popupAttribute = document.querySelector('.popup__input_type_attribute');
const formCard = document.querySelector('.popup-card__form');
const popupCardValidation = new FormValidator(popupConfig, popupCard);

const closePopupImage = document.querySelector('.popup-image__close');
const popupImageValidation = new FormValidator(popupConfig, popupImage);

const cards = document.querySelector('.cards');
const cardSelector = '.card-template';

function createNewCard(data) {
  const newCard = new Card(data, cardSelector);
  return newCard;
};

function renderCard(card) {
  cards.prepend(card.fillCard());
};

initialValue.forEach((item) => {
  const createdCard = createNewCard(item);
  renderCard(createdCard);
});

popupCardValidation.enableValidation();
popupProfileValidation.enableValidation();
popupImageValidation.enableValidation();

formCard.addEventListener('submit', evt => {
  evt.preventDefault();
  const userValue = {
    name: popupTitle.value,
    link: popupAttribute.value
  };
  const userCard = createNewCard(userValue);
  createNewCard(userCard);
  renderCard(userCard);
  closePopup(popupCard);
  evt.target.reset();
});

editButton.addEventListener('click', () => {
  popupName.value = profileTitle.textContent;
  popupActivity.value = profileText.textContent;
  openPopup(popupProfile);
});
closeProfileForm.addEventListener('click', () => {
  closePopup(popupProfile);
});
formProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = popupName.value;
  profileText.textContent = popupActivity.value;
  closePopup(popupProfile);
});

addButton.addEventListener('click', () => {
  popupCardValidation.disableCreateButton()
  openPopup(popupCard);
});

closeCardForm.addEventListener('click', () => {
  closePopup(popupCard);
});

closePopupImage.addEventListener('click', () => {
  closePopup(popupImage);
});