'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal); // tell the browser call function  / call the function by reference ()
// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden'); //'.hidden'같이 앞에 .은 slector 에만 필요하다.
//     overlay.classList.remove('hidden');
//   });

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    //if Press key is escape and modal class doesn't include hidden)
    closeModal();
  }
});
