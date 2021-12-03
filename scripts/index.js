import { popupImage, openPopup, closePopup } from "./popupUtils.js"
import { initialValue } from "./cardsInitialValue.js";
import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";

const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const addButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup-profile');
const closeProfileForm = document.querySelector('.popup-profile__close');
const popupName = document.querySelector('.popup__input_type_name');
const popupActivity = document.querySelector('.popup__input_type_activity');
const formProfile = document.querySelector('.popup-profile__form');

const popupCard = document.querySelector('.popup-card');
const closeCardForm = document.querySelector('.popup-card__close');
const popupTitle = document.querySelector('.popup__input_type_title');
const popupAttribute = document.querySelector('.popup__input_type_attribute');
const formCard = document.querySelector('.popup-card__form');
const createButton = popupCard.querySelector('.popup__button');

const closePopupImage = document.querySelector('.popup-image__close');

const cards = document.querySelector('.cards');

function createNewCard(data, cardSelector) {
  const newCard = new Card(data, cardSelector);
  return newCard;
};

function renderCard(card) {
  cards.prepend(card.fillCard());
};

function attachFormValidator(config) {
  const formsList = Array.from(document.querySelectorAll(config.formSelector));
  formsList.forEach((selectedForm) => {
    const newFormValidator = new FormValidator(config, selectedForm);
    newFormValidator.enableValidation();
  });
};

initialValue.forEach((item) => {
  const createdCard = createNewCard(item, '.card-template_type_default');
  renderCard(createdCard);
});

attachFormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

formCard.addEventListener('submit', evt => {
  evt.preventDefault();
  const userValue = {
    name: popupTitle.value,
    link: popupAttribute.value
  };
  const userCard = createNewCard(userValue, '.card-template_type_default')
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
  openPopup(popupCard);
  createButton.disabled = true;
  createButton.classList.add('popup__button_inactive');
});

closeCardForm.addEventListener('click', () => {
  closePopup(popupCard);
});

closePopupImage.addEventListener('click', () => {
  closePopup(popupImage);
});