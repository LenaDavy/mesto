const editButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const addButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popupProfile');
const closeProfileForm = document.querySelector('.popupProfile__close');
const popupName = document.querySelector('.popup__input_type_name');
const popupActivity = document.querySelector('.popup__input_type_activity');
const FormProfile = document.querySelector('.popupProfile__form');

const popupCard = document.querySelector('.popupCard');
const closeCardForm = document.querySelector('.popupCard__close');
const popupTitle = document.querySelector('.popup__input_type_title');
const popupAttribute = document.querySelector('.popup__input_type_attribute');
const FormCard = document.querySelector('.popupCard__form');

const popupImage = document.querySelector('.popupImage');
const popupCity = document.querySelector('.popupImage__city');
const popupPicture = document.querySelector('.popupImage__picture');
const closePopupImage = document.querySelector('.popupImage__close');

const template = document.querySelector('.template').content;
const cards = document.querySelector('.cards');
const initialCards = [
  {
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

function togglePopup(popup) { 
  popup.classList.toggle('popup_opened');
};


editButton.addEventListener('click', () => {
  popupName.value = profileTitle.textContent;
  popupActivity.value = profileText.textContent;
  togglePopup(popupProfile);
});
closeProfileForm.addEventListener('click', () => {
  togglePopup(popupProfile);
});
FormProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  profileTitle.textContent = popupName.value;
  profileText.textContent = popupActivity.value;
  togglePopup(popupProfile);
});


addButton.addEventListener('click', () => {
  togglePopup(popupCard);
});
closeCardForm.addEventListener('click', () => {
  togglePopup(popupCard);
});

function createCard(item) {
  const card = template.querySelector('.card').cloneNode(true);
  card.querySelector('.card__city').textContent = item.name;
  card.querySelector('.card__img').src = item.link;
  card.querySelector('.card__img').addEventListener('click', event => {
    togglePopup(popupImage);
    popupPicture.setAttribute('src', event.target.src);
    popupCity.innerText = item.name;
  });
  card.querySelector('.card__delete-button').addEventListener('click', () => {
    card.remove();
  });
  card.querySelector('.card__like-button').addEventListener('click', function (evt) {
      evt.target.classList.add('card__like-button_active');
  }); 
  return card;
}
function prependCard(item) {
  const element = createCard(item);
  cards.prepend(element);
};
initialCards.forEach(prependCard);


closePopupImage.addEventListener('click', () => {
  togglePopup(popupImage);
});

FormCard.addEventListener('submit', event => {
  event.preventDefault();
  const item = {
    name: popupTitle.value,
    link: popupAttribute.value
  };
  prependCard(item);
  event.target.reset();
  togglePopup(popupCard);
});