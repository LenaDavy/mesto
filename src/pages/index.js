import { popupConfig, initialValue, editButton, addButton } from "../scripts/utils/constants.js";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import "../pages/index.css";

function createCard(cardItem) {
  const card = new Card({
    data: cardItem, 
    handleCardClick: () => {popupWithImage.openPopup(cardItem)}},
    '.card-template').fillCard();
  return card;
};

const cardsList = new Section({
  array: initialValue,
  renderer: (cardItem) => {
    const newCard = createCard(cardItem);
    cardsList.addItem(newCard)}}, '.cards'
);
cardsList.renderItems();

const popupWithImage = new PopupWithImage('.popup-image');
popupWithImage.setEventListeners();

const infoProfile = new UserInfo('.profile__title', '.profile__text');

const profilePopup = new PopupWithForm('.popup-profile',
  {handleFormSubmit: (inputsValues) => {infoProfile.setUserInfo(inputsValues)}}
);
profilePopup.setEventListeners();

const cardPopup = new PopupWithForm('.popup-card', {handleFormSubmit: (cardPopupValues) => {
  const userCard = createCard(cardPopupValues);
  cardsList.addItem(userCard);
}});
cardPopup.setEventListeners();

const popupProfileValidation = new FormValidator(popupConfig, '.popup-profile');
popupProfileValidation.enableValidation();

const popupCardValidation = new FormValidator(popupConfig, '.popup-card');
popupCardValidation.enableValidation();


editButton.addEventListener('click', () => {
  const dataProfile = infoProfile.getUserInfo();
  profilePopup.openPopup();
  profilePopup.setInputsValues(dataProfile);
});

addButton.addEventListener('click', () => {
  cardPopup.openPopup();
  popupCardValidation.disableSubmitButton();
});