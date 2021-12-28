export default class UserInfo {
  constructor (firstField, secondField) {
    this._firstField = document.querySelector(firstField);
    this._secondField = document.querySelector(secondField);
  };
  
  getUserInfo() {
    this._profileFields = {}
    this._profileFields.name = this._firstField.textContent;
    this._profileFields.activity = this._secondField.textContent;
    return this._profileFields;
  };

  setUserInfo(data) {
    this._firstField.textContent = data.name;
    this._secondField.textContent = data.activity;
  };
};   