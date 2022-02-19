'use strict';
const moodel = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModel = document.querySelector('.close-modal')
const btnOpenModel = document.querySelectorAll('.show-modal')
for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', function() {
        moodel.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}


function closeModal() {
    moodel.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {

        if (!moodel.classList.contains('hidden')) {
            closeModal()
        }
    }
});