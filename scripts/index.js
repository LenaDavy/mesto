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

export const popupImage = document.querySelector('.popup-image');
export const popupCity = document.querySelector('.popup-image__city');
export const popupPicture = document.querySelector('.popup-image__picture');
const closePopupImage = document.querySelector('.popup-image__close');

const cards = document.querySelector('.cards');

const initialValue = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

function createCards(config) {
  const formsList = Array.from(document.querySelectorAll(config.formSelector));
  formsList.forEach((selectedForm) => {
    const newForm = new FormValidator(config, selectedForm);
    newForm.enableValidation();
  });
};

export function openPopup(popup) { 
  popup.classList.add('popup_opened');
  document.addEventListener('mouseup', closePopupByOverlay);
  document.addEventListener('keydown', closePopupByEsc);
};

function closePopup(popup) { 
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('mouseup', closePopupByOverlay);
};

function closePopupByOverlay(event) {
  if(event.target.classList.contains('popup_opened')) { 
    closePopup(event.target);
  };
};

function closePopupByEsc(event) {
  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

initialValue.forEach((item) => {
  const newCard = new Card(item, '.card-template_type_default');
  cards.prepend(newCard.generateCard());
});

createCards({
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
  const userCard = new Card(userValue, '.card-template_type_default');
  cards.prepend(userCard.generateCard());
  evt.target.reset();
  closePopup(popupCard);
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