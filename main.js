(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},t=document.querySelector(".cards"),n=document.querySelector(".profile__edit-button"),r=document.querySelector(".profile__add-button"),o=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(o)}},{key:"createUserCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(o)}},{key:"deleteUserCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(o)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._handleCardClick=o,this._card=n}var t,n;return t=e,(n=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._card).content.querySelector(".card").cloneNode(!0)}},{key:"fillCard",value:function(){return this._item=this._getCardTemplate(),this._item.querySelector(".card__city").textContent=this._name,this._item.querySelector(".card__img").src=this._link,this._item.querySelector(".card__img").alt=this._name,this._setEventListeners(),this._item}},{key:"_toggleLikeButton",value:function(e){e.target.classList.toggle("card__like-button_active")}},{key:"_removeCard",value:function(){this._item.remove(),this._item=null}},{key:"_setEventListeners",value:function(){var e=this;this._item.querySelector(".card__img").addEventListener("click",(function(){e._handleCardClick()})),this._item.querySelector(".card__like-button").addEventListener("click",(function(t){e._toggleLikeButton(t)})),this._item.querySelector(".card__delete-button").addEventListener("click",(function(){e._removeCard()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._popup=document.querySelector(n),this._submitButton=this._popup.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showErrorNotice",value:function(e){var t=this._popup.querySelector(".".concat(e.id,"-error"));t.textContent=e.validationMessage,e.classList.add(this._config.inputErrorClass),t.classList.add(this._config.errorClass)}},{key:"_hideErrorNotice",value:function(e){var t=this._popup.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"disableSubmitButton",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._config.inactiveButtonClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorNotice(e):this._showErrorNotice(e)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput(e)?this.disableSubmitButton():(this._submitButton.removeAttribute("disabled",!0),this._submitButton.classList.remove(this._config.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(e){e.preventDefault()}));var t=Array.from(this._popup.querySelectorAll(this._config.inputSelector));t.forEach((function(n){n.addEventListener("input",(function(){e._checkInputValidity(n),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){var r=t.array,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){t.onload=e._renderer(t)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._form=this._popup.querySelector(".popup__form")}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",this.closePopup.bind(this)),this._popup.addEventListener("mouseup",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._inputsList=n._popup.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"setInputsValues",value:function(e){this._inputsList.forEach((function(t){t.value=e[t.name]||""}))}},{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._inputsList.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var e=this;v(w(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__form").addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.closePopup()}))}},{key:"closePopup",value:function(){v(w(u.prototype),"closePopup",this).call(this),this._form.reset()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup-image__picture"),t._popupCity=t._popup.querySelector(".popup-image__city"),t}return t=u,(n=[{key:"openPopup",value:function(e){C(L(u.prototype),"openPopup",this).call(this),this._popupPicture.src=e.link,this._popupPicture.alt=e.name,this._popupCity.textContent=e.name}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._firstField=document.querySelector(t),this._secondField=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileFields={},this._profileFields.name=this._firstField.textContent,this._profileFields.activity=this._secondField.textContent,this._profileFields}},{key:"setUserInfo",value:function(e){this._firstField.textContent=e.name,this._secondField.textContent=e.activity}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){var n=new f({array:e,renderer:function(e){var t=function(e){return new c({data:e,handleCardClick:function(){F.openPopup(e)}},".card-template").fillCard()}(e);n.addItem(t)}},t);n.renderItems()}var T=new u({url:"https://mesto.nomoreparties.co/v1/cohort-34",headers:{authorization:"290ee9b9-99bc-4bb1-9e25-3f37c57278f6","Content-Type":"application/json"}});T.getInitialCards().then((function(e){R(e)})).catch((function(e){console.log(e)}));var F=new q(".popup-image");F.setEventListeners();var x=new I(".profile__title",".profile__text"),V=new k(".popup-profile",{handleFormSubmit:function(e){x.setUserInfo(e)}});V.setEventListeners();var D=new k(".popup-card",{handleFormSubmit:function(e){T.createUserCard(e).then((function(){R(e)}))}});D.setEventListeners(),new l(e,".popup-profile").enableValidation();var U=new l(e,".popup-card");U.enableValidation(),n.addEventListener("click",(function(){var e=x.getUserInfo();V.openPopup(),V.setInputsValues(e)})),r.addEventListener("click",(function(){D.openPopup(),U.disableSubmitButton()}))})();