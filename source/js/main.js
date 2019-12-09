'use strict';

var ESC_KEYCODE = 27;

var onCallButtonElementClick = function (evt) {
  evt.preventDefault();

  if (modalCallElement && overlayElement && modalCloseElement) {
    modalCallElement.classList.add('modal--show');
    overlayElement.classList.add('modal--show');

    modalNameInputElement.focus();

    if (isStorageSupport) {
      modalNameInputElement.value = storage.name;
      modalTelInputElement.value = storage.tel;
      modalAreaElement.value = storage.text;
    }

    modalCloseElement.addEventListener('click', oNmodalCloseElementClick);
    overlayElement.addEventListener('click', onOverlayElementClick);
    window.addEventListener('keydown', onWindowKeydown);
    modalFormElement.addEventListener('submit', onModalFormElementSubmit);
  }
};

var oNmodalCloseElementClick = function (evt) {
  evt.preventDefault();

  modalCallElement.classList.remove('modal--show');
  overlayElement.classList.remove('modal--show');

  modalCloseElement.removeEventListener('click', oNmodalCloseElementClick);
  overlayElement.removeEventListener('click', onOverlayElementClick);
  window.removeEventListener('keydown', onWindowKeydown);
  modalFormElement.removeEventListener('submit', onModalFormElementSubmit);
};

var onOverlayElementClick = function (evt) {
  evt.preventDefault();

  modalCallElement.classList.remove('modal--show');
  overlayElement.classList.remove('modal--show');

  modalCloseElement.removeEventListener('click', oNmodalCloseElementClick);
  overlayElement.removeEventListener('click', onOverlayElementClick);
  window.removeEventListener('keydown', onWindowKeydown);
  modalFormElement.removeEventListener('submit', onModalFormElementSubmit);
};

var onWindowKeydown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();

    modalCallElement.classList.remove('modal--show');
    overlayElement.classList.remove('modal--show');

    modalCloseElement.removeEventListener('click', oNmodalCloseElementClick);
    overlayElement.removeEventListener('click', onOverlayElementClick);
    window.removeEventListener('keydown', onWindowKeydown);
    modalFormElement.removeEventListener('submit', onModalFormElementSubmit);
  }
};

var onModalFormElementSubmit = function () {
  if (modalNameInputElement.value && modalTelInputElement.value && modalAreaElement.value) {

    if (isStorageSupport) {
      localStorage.setItem('name', modalNameInputElement.value);
      localStorage.setItem('tel', modalTelInputElement.value);
      localStorage.setItem('text', modalAreaElement.value);
    }
  }
};

var callButtonElement = document.querySelector('.button--header');
var modalCloseElement = document.querySelector('.modal__close');
var overlayElement = document.querySelector('.modal--overlay');

var modalCallElement = document.querySelector('.modal--call');
var modalFormElement = modalCallElement.querySelector('form');
var modalNameInputElement = modalFormElement.querySelector('input[type="text"]');
var modalTelInputElement = modalFormElement.querySelector('input[type="tel"]');
var modalAreaElement = modalFormElement.querySelector('textarea');

var storage;
var isStorageSupport = true;

try {
  storage = localStorage;
} catch (err) {
  isStorageSupport = false;
}

if (callButtonElement) {
  callButtonElement.addEventListener('click', onCallButtonElementClick);
}
