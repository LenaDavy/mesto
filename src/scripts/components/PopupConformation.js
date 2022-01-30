import Popup from "./Popup.js";
import { api } from "../../pages/index.js";
import { confirmButton } from "../utils/constants.js";
export default class PopupWithForm extends Popup {

  handleClickConfirm(cardId, card) {
    confirmButton.onclick = () => {
      api.deleteUserCard(cardId)
      .then(() => {
        this.closePopup();
        card.remove();
        card = null;
      })
      .catch((result) => {console.log(result)})
    };
  };
}