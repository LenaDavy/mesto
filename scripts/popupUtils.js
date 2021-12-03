const popupImage = document.querySelector('.popup-image');
const popupCity = document.querySelector('.popup-image__city');
const popupPicture = document.querySelector('.popup-image__picture');

function openPopup(popup) { 
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

export { popupImage, popupCity, popupPicture, openPopup, closePopup};