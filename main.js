(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{h:()=>x});var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},n=document.querySelector(".cards"),r=document.querySelector(".profile__change-avatar"),o=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),u=document.querySelector(".popup-confirm__button"),c=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(c)}},{key:"changeUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(c)}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(c)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(c)}},{key:"getSumLikes",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{headers:this._headers}).then(c)}},{key:"putLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(c)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(c)}},{key:"createUserCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(c)}},{key:"deleteUserCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(c)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){var r=t.data,o=t.handleCardClick,i=t.handleClickDeleteButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._ownerId=r.owner._id,this._id=r._id,this._sumLikes=r.likes,this._handleCardClick=o,this._handleClickDeleteButton=i,this._card=document.querySelector(n),this._likesCounter=".card__likes-counter"}var t,n;return t=e,(n=[{key:"_getCardTemplate",value:function(){var e=this._card.content.querySelector(".card").cloneNode(!0);return e.querySelector(this._likesCounter).textContent=this._sumLikes.length,e}},{key:"fillCard",value:function(){return this._item=this._getCardTemplate(),this._removeDeleteButton(),this._item.querySelector(".card__city").textContent=this._name,this._item.querySelector(".card__img").src=this._link,this._item.querySelector(".card__img").alt=this._name,this._setEventListeners(),this._item}},{key:"_countLikes",value:function(e){var t=this;this._sumLikes.some((function(e){e._id,t._ownerId}))?x.deleteLike(e).then((function(e){console.log(e),t._sumLikes=e.likes,t._item.querySelector(t._likesCounter).textContent=e.likes.length})).catch((function(e){console.log(e)})):x.putLike(e).then((function(e){console.log(e),console.log(t._sumLikes),console.log(t._ownerId),t._sumLikes=e.likes,t._item.querySelector(t._likesCounter).textContent=e.likes.length})).catch((function(e){console.log(e)}))}},{key:"_toggleLikeImg",value:function(e){e.target.classList.toggle("card__like-button_active")}},{key:"_removeDeleteButton",value:function(){var e=this;x.getUserInfo().then((function(t){t._id!==e._ownerId&&e._item.querySelector(".card__delete-button").remove()})).catch((function(e){console.log(e)}))}},{key:"_setEventListeners",value:function(){var e=this;this._item.querySelector(".card__img").addEventListener("click",(function(){e._handleCardClick()})),this._item.querySelector(".card__like-button").addEventListener("click",(function(t){e._toggleLikeImg(t),e._countLikes(e._id)})),this._item.querySelector(".card__delete-button").addEventListener("click",(function(){e._handleClickDeleteButton(e._id,e._item)}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._popup=document.querySelector(n),this._submitButton=this._popup.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showErrorNotice",value:function(e){var t=this._popup.querySelector(".".concat(e.id,"-error"));t.textContent=e.validationMessage,e.classList.add(this._config.inputErrorClass),t.classList.add(this._config.errorClass)}},{key:"_hideErrorNotice",value:function(e){var t=this._popup.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"disableSubmitButton",value:function(){this._submitButton.disabled=!0,this._submitButton.classList.add(this._config.inactiveButtonClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorNotice(e):this._showErrorNotice(e)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput(e)?this.disableSubmitButton():(this._submitButton.removeAttribute("disabled",!0),this._submitButton.classList.remove(this._config.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(e){e.preventDefault()}));var t=Array.from(this._popup.querySelectorAll(this._config.inputSelector));t.forEach((function(n){n.addEventListener("input",(function(){e._checkInputValidity(n),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.array,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){1!=t?this._container.prepend(e):this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){t.onload=e._renderer(t)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._form=this._popup.querySelector(".popup__form")}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",this.closePopup.bind(this)),this._popup.addEventListener("mouseup",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._inputsList=n._popup.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"setInputsValues",value:function(e){this._inputsList.forEach((function(t){t.value=e[t.name]||""}))}},{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._inputsList.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var e=this;k(C(u.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__form").addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.closePopup()}))}},{key:"closePopup",value:function(){k(C(u.prototype),"closePopup",this).call(this),this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function q(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup-image__picture"),t._popupCity=t._popup.querySelector(".popup-image__city"),t}return t=u,(n=[{key:"openPopup",value:function(e){O(B(u.prototype),"openPopup",this).call(this),this._popupPicture.src=e.link,this._popupPicture.alt=e.name,this._popupCity.textContent=e.name}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._firstField=document.querySelector(t),this._secondField=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileFields={},this._profileFields.name=this._firstField.textContent,this._profileFields.about=this._secondField.textContent,this._profileFields}},{key:"setUserInfo",value:function(e){this._firstField.textContent=e.name,this._secondField.textContent=e.about,this._avatar.src=e.avatar}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x=new s({url:"https://mesto.nomoreparties.co/v1/cohort-34",headers:{authorization:"290ee9b9-99bc-4bb1-9e25-3f37c57278f6","Content-Type":"application/json"}}),F=new v(".popup-confirm");function D(e,t){var r=new _({array:e,renderer:function(e){var n=function(e){return new p({data:e,handleCardClick:function(){V.openPopup(e)},handleClickDeleteButton:function(e,t){F.openPopup(),u.onclick=function(){x.deleteUserCard(e).then((function(){t.remove(),t=null,F.closePopup()})).catch((function(e){console.log(e)}))}}},".card-template").fillCard()}(e);r.addItem(n,t)}},n);r.renderItems()}F.setEventListeners(),x.getInitialCards().then((function(e){D(e,!0)})).catch((function(e){console.log(e)}));var V=new T(".popup-image");V.setEventListeners();var A=new R(".profile__title",".profile__text",".profile__photo");x.getUserInfo().then((function(e){A.setUserInfo(e)}));var N=new E(".popup-avatar",{handleFormSubmit:function(e){x.changeUserAvatar(e).then((function(e){A.setUserInfo(e)}))}});N.setEventListeners(),new h(t,".popup-avatar").enableValidation();var J=new E(".popup-profile",{handleFormSubmit:function(e){x.changeUserInfo(e).then((function(e){A.setUserInfo(e)}))}});J.setEventListeners(),new h(t,".popup-profile").enableValidation();var H=new E(".popup-card",{handleFormSubmit:function(e){x.createUserCard(e).then((function(e){D([e],!1)}))}});H.setEventListeners();var z=new h(t,".popup-card");z.enableValidation(),r.addEventListener("click",(function(){var e=A.getUserInfo();N.openPopup(),N.setInputsValues(e)})),o.addEventListener("click",(function(){var e=A.getUserInfo();J.openPopup(),J.setInputsValues(e)})),i.addEventListener("click",(function(){H.openPopup(),z.disableSubmitButton()}))})();