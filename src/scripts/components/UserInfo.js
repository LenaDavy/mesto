export default class UserInfo {
  constructor (firstField, secondField, avatarField) {
    this._firstField = document.querySelector(firstField);
    this._secondField = document.querySelector(secondField);
    this._avatar = document.querySelector(avatarField);
  };
  
  getUserInfo() {
    this._profileFields = {}
    this._profileFields.name = this._firstField.textContent;
    this._profileFields.about = this._secondField.textContent;
    return this._profileFields;
  };

  setUserInfo(data) {
    this._firstField.textContent = data.name;
    this._secondField.textContent = data.about;
    this._avatar.src = data.avatar;
  }
};   