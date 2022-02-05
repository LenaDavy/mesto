import Api from "../scripts/components/Api.js";
import { cardConfig, popupConfig, cards, avatarEditButton, avatarEditMark, editButton, addButton } from "../scripts/utils/constants.js";
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

const cardsList = new Section({
  renderer: (cardItem, method) => {
    const newCard = createCard(cardItem);
    cardsList.addItem(newCard, method)}
  }, cards
)
    
const infoProfile = new UserInfo('.profile__title', '.profile__text', '.profile__photo');

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, cards]) => {
  infoProfile.setUserInfo(userData)
  cardsList.renderItems([cards], true)
})
.catch((res) => { console.log(`Error: ${res.status}`)});


const confirmPopup = new PopupConformation('.popup-confirm', popupConfig);
confirmPopup.setEventListeners();

const popupWithImage = new PopupWithImage('.popup-image', popupConfig);
popupWithImage.setEventListeners();

const avatarPopup = new PopupWithForm('.popup-avatar', popupConfig, {handleFormSubmit: (inputValue) => {
  api.changeUserAvatar(inputValue)
  .then(res => {avatarPopup.renderLoading(false); infoProfile.setUserInfo(res)})
  .catch(res => { console.log(`Error: ${res.status}`)})
  .finally(() => {avatarPopup.renderLoading(true); avatarPopup.closePopup()})
}});
avatarPopup.setEventListeners();
const popupAvatarValidation = new FormValidator(popupConfig, '.popup-avatar');
popupAvatarValidation.enableValidation();

const profilePopup = new PopupWithForm('.popup-profile', popupConfig, {handleFormSubmit: (inputsValues) => {
  api.changeUserInfo(inputsValues)
  .then(res => {infoProfile.setUserInfo(res)})
  .catch(res => { console.log(`Error: ${res.status}`)})
  .finally(() => {profilePopup.renderLoading(true); profilePopup.closePopup()})
}});
profilePopup.setEventListeners();
const popupProfileValidation = new FormValidator(popupConfig, '.popup-profile');
popupProfileValidation.enableValidation();

const cardPopup = new PopupWithForm('.popup-card', popupConfig, {handleFormSubmit: (cardPopupValues) => {
  api.createUserCard(cardPopupValues)
  .then(res => {cardsList.renderUserItem(res, false)})
  .catch(res => { console.log(`Error: ${res.status}`)})
  .finally(() => {cardPopup.renderLoading(true); cardPopup.closePopup()})
}});
cardPopup.setEventListeners();
const popupCardValidation = new FormValidator(popupConfig, '.popup-card');
popupCardValidation.enableValidation();


avatarEditButton.addEventListener('click', () => {
  avatarPopup.openPopup();
  popupAvatarValidation.disableSubmitButton();
});

avatarEditMark.addEventListener('click', () => {
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