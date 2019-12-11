'use strict';

var ESC_KEYCODE = 27;
var TABLET_WIDTH = 767;

var onCallButtonElementClick = function (evt) {
  evt.preventDefault();

  if (modalCallElement && overlayElement && modalCloseElement) {
    var currentWidth = document.documentElement.clientWidth;

    modalCallElement.classList.add('modal--show');
    overlayElement.classList.add('modal--show');

    if (modalNameInputElement && modalTelInputElement && modalAreaElement) {

      modalNameInputElement.focus();

      if (currentWidth < TABLET_WIDTH) {
        bodyElement.style.position = 'fixed';
      }

      if (typeof (storage.name) === 'undefined') {
        modalNameInputElement.value = '';
      } else {
        modalNameInputElement.value = storage.name;
      }

      if (typeof (storage.tel) === 'undefined') {
        modalNameInputElement.value = '';
      } else {
        modalTelInputElement.value = storage.tel;
      }

      if (typeof (storage.name) === 'undefined') {
        modalNameInputElement.value = '';
      } else {
        modalAreaElement.value = storage.text;
      }
    }
  }

  modalCloseElement.addEventListener('click', oNmodalCloseElementClick);
  overlayElement.addEventListener('click', onOverlayElementClick);
  window.addEventListener('keydown', onWindowKeydown);
  modalFormElement.addEventListener('submit', onModalFormElementSubmit);
};

var oNmodalCloseElementClick = function (evt) {
  evt.preventDefault();

  bodyElement.style.position = 'static';

  modalCallElement.classList.remove('modal--show');
  overlayElement.classList.remove('modal--show');

  modalCloseElement.removeEventListener('click', oNmodalCloseElementClick);
  overlayElement.removeEventListener('click', onOverlayElementClick);
  window.removeEventListener('keydown', onWindowKeydown);
  modalFormElement.removeEventListener('submit', onModalFormElementSubmit);
};

var onOverlayElementClick = function (evt) {
  evt.preventDefault();

  bodyElement.style.position = 'static';

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

    bodyElement.style.position = 'static';

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

var onNavOpenElementClick = function (evt) {
  evt.preventDefault();

  if (navListElements) {
    navListElements.forEach(function (elem) {
      elem.classList.toggle('footer__nav-list--show');
    });
  }
};

var bodyElement = document.querySelector('body');
var callButtonElement = document.querySelector('.button--header');
var modalCloseElement = document.querySelector('.modal__close');
var overlayElement = document.querySelector('.modal--overlay');

var modalCallElement = document.querySelector('.modal--call');
var modalFormElement = modalCallElement.querySelector('form');
var modalNameInputElement = modalFormElement.querySelector('input[type="text"]');
var modalTelInputElement = modalFormElement.querySelector('input[type="tel"]');
var modalAreaElement = modalFormElement.querySelector('textarea');

var navOpenElement = document.querySelector('.footer__nav');
var navListElements = document.querySelectorAll('.footer__nav-list');

var storage = {
  name: '',
  tel: '',
  text: ''
};

var isStorageSupport = true;

try {
  storage = localStorage;
} catch (err) {
  isStorageSupport = false;
}

if (callButtonElement && modalFormElement) {
  callButtonElement.addEventListener('click', onCallButtonElementClick);
}

if (navOpenElement) {
  navOpenElement.addEventListener('click', onNavOpenElementClick);
}
