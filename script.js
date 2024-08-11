'use strict';

const account1 = {
  email: 'ksarosh123@gmail.com',
  password: 1234,
};

const icon = document.querySelector('.click');
const main = document.querySelector('main');
const loginEmail = document.querySelector('.login__input--email');
const loginPass = document.querySelector('.login__input--pass');
const loginBtn = document.querySelector('.login__btn');
const afterlogin = document.querySelector('h1');
const body = document.querySelector('body');

icon.addEventListener('click', function () {
  main.classList.add('hidden');
});

loginBtn.addEventListener('click', function () {
  if (
    loginEmail.value === account1.email &&
    Number(loginPass.value) === account1.password
  ) {
    main.classList.add('hidden');
    afterlogin.classList.remove('hidden');
  } else {
    console.log('incorrect');
  }
});
