const editButton = document.querySelector('.profile__edit-button');

const profileTitle = document.querySelector('.profile__title');

const profileText = document.querySelector('.profile__text');

const popup = document.querySelector('.popup');

const popupName = document.querySelector('.popup__input_name');

const popupActivity = document.querySelector('.popup__input_activity');


editButton.addEventListener('click', function() {
  popup.classList.add('popup__open');
  popupName.value = profileTitle.textContent;
  popupActivity.value = profileText.textContent;
  }
);


const popupClose = document.querySelector('.popup__close');

function closePopup() {
  popup.classList.remove('popup__open');
}

popupClose.addEventListener('click', closePopup);


function popupClickHandler(event) {
  if(event.target.classList.contains('popup')) {
    closePopup()
  }
}

popup.addEventListener('mouseup', popupClickHandler);



const popupButton = document.querySelector('.popup__button');

const popupForm = document.querySelector('.popup__form');

function formSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = popupName.value;
  profileText.textContent = popupActivity.value;
  closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler);