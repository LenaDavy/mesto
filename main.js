(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.url,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var n,r;return n=t,(r=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"createUserCard",value:function(e){var t=fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)});return t.ok&&t.json(),Promise.reject("err")}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._handleCardClick=o,this._card=n}var t,n;return t=e,(n=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._card).content.querySelector(".card").cloneNode(!0)}},{key:"fillCard",value:function(){return this._item=this._getCardTemplate(),this._item.querySelector(".card__city").textContent=this._name,this._item.querySelector(".card__img").src=this._link,this._item.querySelector(".card__img").alt=this._name,this._setEventListeners(),this._item}},{key:"_toggleLikeButton",value:function(e){e.target.classList.toggle("card__like-button_active")}},{key:"_removeCard",value:function(){this._item.remove(),this._item=null}},{key:"_setEventListeners",value:function(){var e=this;this._item.querySelector(".card__img").addEventListener("click",(function(){e._handleCardClick()})),this._item.querySelector(".card__like-button").addEventListener("click",(function(t){e._toggleLikeButton(t)})),this._item.querySelector(".card__delete-button").addEventListener("click",(function(){e._removeCard()}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._popup=document.querySelector(n),this._submitButton=this._popup.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showErrorNotice",value:function(e){var t=this._popup.querySelector(".".concat(e.id,"-error"));t.textContent=e.validationMessage,e.classList.add(this._config.inputErrorClass),t.classList.add(this._config.errorClass)}},{key:"_hideErrorNotice",value:function(e){var t=this._popup.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"disableSubmitButton",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._config.inactiveButtonClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorNotice(e):this._showErrorNotice(e)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput(e)?this.disableSubmitButton():(this._submitButton.removeAttribute("disabled",!0),this._submitButton.classList.remove(this._config.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(e){e.preventDefault()}));var t=Array.from(this._popup.querySelectorAll(this._config.inputSelector));t.forEach((function(n){n.addEventListener("input",(function(){e._checkInputValidity(n),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.array,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){e._renderer(t)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._form=this._popup.querySelector(".popup__form")}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",this.closePopup.bind(this)),this._popup.addEventListener("mouseup",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup()}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._inputsList=n._popup.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"setInputsValues",value:function(e){this._inputsList.forEach((function(t){t.value=e[t.name]||""}))}},{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._inputsList.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var e=this;d(m(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__form").addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.closePopup()}))}},{key:"closePopup",value:function(){d(m(u.prototype),"closePopup",this).call(this),this._form.reset()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function C(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup-image__picture"),t._popupCity=t._popup.querySelector(".popup-image__city"),t}return t=u,(n=[{key:"openPopup",value:function(e){E(O(u.prototype),"openPopup",this).call(this),this._popupPicture.src=e.link,this._popupPicture.alt=e.name,this._popupCity.textContent=e.name}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._firstField=document.querySelector(t),this._secondField=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileFields={},this._profileFields.name=this._firstField.textContent,this._profileFields.activity=this._secondField.textContent,this._profileFields}},{key:"setUserInfo",value:function(e){this._firstField.textContent=e.name,this._secondField.textContent=e.activity}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return new u({data:e,handleCardClick:function(){I.openPopup(e)}},".card-template").fillCard()}new t({url:"https://mesto.nomoreparties.co/v1/cohort-34",headers:{authorization:"290ee9b9-99bc-4bb1-9e25-3f37c57278f6","Content-Type":"application/json"}}).getInitialCards().then((function(e){var t=new l({array:e,renderer:function(e){var n=B(e);t.addItem(n)}},".cards");t.renderItems()})).catch((function(e){console.log(e)}));var I=new j(".popup-image");I.setEventListeners();var R=new q(".profile__title",".profile__text"),T=new g(".popup-profile",{handleFormSubmit:function(e){R.setUserInfo(e)}});T.setEventListeners();var F=new g(".popup-card",{handleFormSubmit:function(e){var t=B(e);cardsList.addItem(t)}});F.setEventListeners(),new c(n,".popup-profile").enableValidation();var x=new c(n,".popup-card");x.enableValidation(),r.addEventListener("click",(function(){var e=R.getUserInfo();T.openPopup(),T.setInputsValues(e)})),o.addEventListener("click",(function(){F.openPopup(),x.disableSubmitButton()}))})();