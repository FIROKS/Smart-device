'use strict';

var ESC_KEYCODE = 27;

var onCallButtonElementClick = function (evt) {
  evt.preventDefault();

  topScrollAmount = document.documentElement.scrollTop;

  if (modalCallElement && overlayElement && modalCloseElement) {

    modalCallElement.classList.add('modal--show');
    overlayElement.classList.add('modal--show');
    modalElement.classList.add('modal--show');

    if (modalNameInputElement && modalTelInputElement && modalAreaElement) {

      modalNameInputElement.focus();

      if (bodyElement) {
        bodyElement.style.top = '-' + topScrollAmount + 'px';
        bodyElement.classList.add('body--noscroll');
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

    modalCloseElement.addEventListener('click', oNmodalCloseElementClick);
    overlayElement.addEventListener('click', onOverlayElementClick);
    window.addEventListener('keydown', onWindowKeydown);

    modalFormElement.addEventListener('submit', onModalFormElementSubmit);
  }
};

var oNmodalCloseElementClick = function (evt) {
  evt.preventDefault();

  if (bodyElement) {
    bodyElement.classList.remove('body--noscroll');
    scrollTo(0, topScrollAmount);
  }

  modalCallElement.classList.remove('modal--show');
  overlayElement.classList.remove('modal--show');
  modalElement.classList.remove('modal--show');

  modalCloseElement.removeEventListener('click', oNmodalCloseElementClick);
  overlayElement.removeEventListener('click', onOverlayElementClick);
  window.removeEventListener('keydown', onWindowKeydown);
  modalFormElement.removeEventListener('submit', onModalFormElementSubmit);
};

var onOverlayElementClick = function (evt) {
  evt.preventDefault();

  if (bodyElement) {
    bodyElement.classList.remove('body--noscroll');
    scrollTo(0, topScrollAmount);
  }

  modalCallElement.classList.remove('modal--show');
  overlayElement.classList.remove('modal--show');
  modalElement.classList.remove('modal--show');

  modalCloseElement.removeEventListener('click', oNmodalCloseElementClick);
  overlayElement.removeEventListener('click', onOverlayElementClick);
  window.removeEventListener('keydown', onWindowKeydown);
  modalFormElement.removeEventListener('submit', onModalFormElementSubmit);
};

var onWindowKeydown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();

    if (bodyElement) {
      bodyElement.classList.remove('body--noscroll');
      scrollTo(0, topScrollAmount);
    }

    modalCallElement.classList.remove('modal--show');
    overlayElement.classList.remove('modal--show');
    modalElement.classList.remove('modal--show');

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

var onElementClick = function (evt) {
  evt.preventDefault();

  var element = evt.currentTarget;
  togglerElements.forEach(function (elem) {
    elem.classList.remove('show');
    elem.classList.add('hiden');
  });

  element.classList.add('show');
};

var bodyElement = document.querySelector('.body');
var callButtonElement = document.querySelector('.button--header');
var modalCloseElement = document.querySelector('.modal__close');
var overlayElement = document.querySelector('.modal__overlay');

var modalElement = document.querySelector('.modal');
var modalCallElement = document.querySelector('.modal__call');
var modalFormElement = document.querySelector('.form--modal form');
var modalNameInputElement = document.querySelector('.form--modal input[type="text"]');
var modalTelInputElement = document.querySelector('input[type="tel"]');
var modalAreaElement = document.querySelector('textarea');

var togglerElements = document.querySelectorAll('.footer__toggler');

var topScrollAmount;

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

if (modalElement && callButtonElement && modalFormElement) {
  callButtonElement.addEventListener('click', onCallButtonElementClick);
}

if (togglerElements.length) {
  togglerElements.forEach(function (elem) {
    elem.classList.add('hiden');
    elem.addEventListener('click', onElementClick);
  });
}
