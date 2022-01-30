import Api from "../scripts/components/Api.js";
import { cardConfig, popupConfig, cards, avatarEditButton, editButton, addButton } from "../scripts/utils/constants.js";
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupConformation from "../scripts/components/PopupConformation.js";
import UserInfo from "../scripts/components/UserInfo.js";
import "./index.css";

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-34',
  headers: {
    authorization: '290ee9b9-99bc-4bb1-9e25-3f37c57278f6',
    'Content-Type': 'application/json'
  }
});


const infoProfile = new UserInfo('.profile__title', '.profile__text', '.profile__photo');
api.getUserInfo()
.then(data => {infoProfile.setUserInfo(data)})
.catch(res => { console.log(`Error: ${res.status}`)});


const confirmPopup = new PopupConformation('.popup-confirm', popupConfig);
confirmPopup.setEventListeners();


const popupWithImage = new PopupWithImage('.popup-image', popupConfig);
popupWithImage.setEventListeners();


const avatarPopup = new PopupWithForm('.popup-avatar', popupConfig, {handleFormSubmit: (inputValue) => {
  api.changeUserAvatar(inputValue)
  .then(res => {infoProfile.setUserInfo(res)})
  .catch(res => { console.log(`Error: ${res.status}`)})
}});
avatarPopup.setEventListeners();
const popupAvatarValidation = new FormValidator(popupConfig, '.popup-avatar');
popupAvatarValidation.enableValidation();


const profilePopup = new PopupWithForm('.popup-profile', popupConfig, {handleFormSubmit: (inputsValues) => {
  api.changeUserInfo(inputsValues)
  .then(res => {infoProfile.setUserInfo(res)})
  .catch(res => { console.log(`Error: ${res.status}`)})
}});
profilePopup.setEventListeners();
const popupProfileValidation = new FormValidator(popupConfig, '.popup-profile');
popupProfileValidation.enableValidation();


const cardPopup = new PopupWithForm('.popup-card', popupConfig, {handleFormSubmit: (cardPopupValues) => {
  api.createUserCard(cardPopupValues)
  .then(res => {renderCards([res], false)})
  .catch(res => { console.log(`Error: ${res.status}`)})
}});
cardPopup.setEventListeners();
const popupCardValidation = new FormValidator(popupConfig, '.popup-card');
popupCardValidation.enableValidation();


function createCard(cardItem) {
  const card = new Card({
    data: cardItem, 
    handleClickImage: () => {popupWithImage.openPopup(cardItem)},
    handleClickDeleteButton: (cardId, card) => {
      confirmPopup.openPopup();
      confirmPopup.handleClickConfirm(cardId, card);
    }, cardConfig}).fillCard();
  return card;
};

function renderCards(data, method) {
  const cardsList = new Section({
    array: data,
    renderer: (cardItem) => {
      const newCard = createCard(cardItem);
      cardsList.addItem(newCard, method)}}, cards)
  cardsList.renderItems()
}

api.getInitialCards()
.then(data => { renderCards(data, true)})
.catch((res) => { console.log(`Error: ${res.status}`)});


avatarEditButton.addEventListener('click', () => {
  avatarPopup.openPopup();
  popupAvatarValidation.disableSubmitButton();
});

editButton.addEventListener('click', () => {
  const dataProfile = infoProfile.getUserInfo();
  profilePopup.openPopup();
  profilePopup.setInputsValues(dataProfile);
});

addButton.addEventListener('click', () => {
  cardPopup.openPopup();
  popupCardValidation.disableSubmitButton();
});