/* MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript. */

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