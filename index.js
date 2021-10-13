'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const buttonsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const modalOperation = (arg) => {
    arg === 'openModal' ? `${modal.classList.remove('hidden')} ${overlay.classList.remove('hidden')}`
        : `${modal.classList.add('hidden')} ${overlay.classList.add('hidden')}`;  // Close modal window
}

for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener('click', () => {
        modalOperation('openModal');
    })
}

btnCloseModal.addEventListener('click', () => {
    modalOperation('closeModal');
})

overlay.addEventListener('click', () => {
    modalOperation('closeModal');
})

document.addEventListener('keypress', (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) modalOperation('closeModal');
})