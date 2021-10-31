const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const addButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_unit_profile');
const closeProfileForm = document.querySelector('.popup_unit_profile__close');
const popupName = document.querySelector('.popup__input_type_name');
const popupActivity = document.querySelector('.popup__input_type_activity');
const formProfile = document.querySelector('.popup_unit_profile__form');

const popupCard = document.querySelector('.popup_unit_card');
const closeCardForm = document.querySelector('.popup_unit_card__close');
const popupTitle = document.querySelector('.popup__input_type_title');
const popupAttribute = document.querySelector('.popup__input_type_attribute');
const formCard = document.querySelector('.popup_unit_card__form');

const popupImage = document.querySelector('.popup_unit_image');
const popupCity = document.querySelector('.popup_unit_image__city');
const popupPicture = document.querySelector('.popup_unit_image__picture');
const closePopupImage = document.querySelector('.popup_unit_image__close');

const template = document.querySelector('.template').content;
const cards = document.querySelector('.cards');


function openPopup(popup) { 
  popup.classList.add('popup_opened');
};
function closePopup(popup) { 
  popup.classList.remove('popup_opened');
};

function createCard(item) {
  const cardNew = template.querySelector('.card').cloneNode(true);
  const cardImg = cardNew.querySelector('.card__img');
  const cardCity = cardNew.querySelector('.card__city');
  cardCity.textContent = item.name;
  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardImg.addEventListener('click', event => {
    openPopup(popupImage);
    popupPicture.setAttribute('src', event.target.src);
    popupPicture.setAttribute('alt', item.name);
    popupCity.innerText = item.name;
  });

  function removeCard () {
    cardNew.remove();
  };
  function toggleLikeButton (evt) {
    evt.target.classList.toggle('card__like-button_active');
  };

  cardNew.querySelector('.card__delete-button').addEventListener('click', () => {
    removeCard();
  });
  cardNew.querySelector('.card__like-button').addEventListener('click', (evt) => {
    toggleLikeButton (evt);
  }); 
  return cardNew;
};

function prependCard(item) {
  const element = createCard(item);
  cards.prepend(element);
};
initialCards.forEach(prependCard);


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
});
closeCardForm.addEventListener('click', () => {
  closePopup(popupCard);
});

closePopupImage.addEventListener('click', () => {
  closePopup(popupImage);
});

formCard.addEventListener('submit', event => {
  event.preventDefault();
  const item = {
    name: popupTitle.value,
    link: popupAttribute.value
  };
  prependCard(item);
  event.target.reset();
  closePopup(popupCard);
});