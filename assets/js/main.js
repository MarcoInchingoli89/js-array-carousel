/* MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. */

// Creare un array con le immagini
const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
];

//Selezioniamo il div dove vogliamo inserire le immagini
const slidesEl = document.querySelector('.slides');

//Crea un ciclo for con le immagini
for (let i = 0; i < images.length; i++) {
    const imagesEl = images[i];
    //Vado a selezionare il mio markup
    const slidesMarkUp = `<img width="500" src="${imagesEl}" alt="">`
    //Stampo su console il markup
    console.log(slidesMarkUp);
    //Stampo su pagina il mio markup
    slidesEl.insertAdjacentHTML('beforeend', slidesMarkUp);
    //Stampo su console tutte le immagini
    /* console.log(imagesEl); */
    
}

// Selezioniamo la prima immagine di quelle inserite in pagina
const imgActive = document.images[0];
//Applica la classe "active" alla prima immagine
imgActive.className = "active";
console.log(imgActive)