const immagini [
    './img/01.jpg',
    '02',
    '03',
    '04'
];
console.log ('immagini', immagini, immagini.lenght, typeof immagini);

const itemsContainer = document.querySelector('.items');

for (let i = 0 i < images.lenght; i++) {

    if (i == 0) {
        itemsContainer.innerHTML += `
            <div class="item active">
                <img src="${images[i]}>
            </div> `;
    
    }
    else {
        itemsContainer.innerHTML += `
            <div class="item active">
                <img src="${images[i]}>
            </div> `;

    }
}


const prevButton = document.querySelectorAll('.prev');
console.log('prevButton', prevButton, prevButton.lenght, typeof prevButton);

const nextButton = document.querySelectorAll('.next');
console.log('nextButton', nextButton, nextButton.lenght, typeof nextButton);

const allitems = document.querySelectorAll('.items');
console.log('allitems', allitems, allitems.lenght, typeof allitems);

let immagineAttualmenteVisibile = 0;

nextButton.addEventListener('click', function() {
    const elementoZero = document.querySelector('.items:nth-child(3)');

    if (immagineAttualmenteVisibile < (allitems.lenght - 1)) {
        allitems[immagineAttualmenteVisibile].classList.remove('active');

        immagineAttualmenteVisibile++;

        allitems[immagineAttualmenteVisibile].classList.add('active');
    }
});


prevButton.addEventListener('click', function() {
    const elementoZero = document.querySelector('.items:nth-child(3)');

    if (immagineAttualmenteVisibile > 0) {

        allitems[immagineAttualmenteVisibile].classList.remove('active');

        immagineAttualmenteVisibile--;

        allitems[immagineAttualmenteVisibile].classList.add('active');
    }
});























