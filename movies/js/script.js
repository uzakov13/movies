'use strict';

import { movies } from "../modules/movies.js";
import { modal, modalBg, openModal, closeModal, movieBg } from "../modules/modal.js";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// Selected movie charachteristics
const moviesListArea = document.querySelector('.promo__interactive-list')
const movieGenre = document.querySelector('.promo__genre')
const movieName = document.querySelector('.promo__title')
const moviePlot = document.querySelector('.promo__descr')
const movieImbd = document.querySelector('.imbd')
const moviePoisk = document.querySelector('.kinopoisk')
// Filtered movie list (found/selected)
let field = document.querySelector('.found')
field.onkeyup = () => {
    let found = movies.filter(item => item.Title.toLowerCase().includes(field.value.toLowerCase().trim()))
    reload(found)
}
function reload(arr) {
    moviesListArea.innerHTML = ''
    movieBg.style.backgroundImage = `url(${arr[0].BgImgage})`
    movieName.innerHTML = arr[0].Title
    moviePlot.innerHTML = arr[0].Plot.slice(0, 100) + ' ...'
    movieGenre.innerHTML = arr[0].Genre
    movieImbd.innerHTML = `IMDb: ${arr[0].imdbRating}`
    for (let item of arr) {
        // Creating list
        let li = document.createElement('li')
        let del = document.createElement('div')
        // Decorating it
        li.classList.add('promo__interactive-item')
        li.innerHTML = item.Title
        del.classList.add('delete')
        // Appending each of them to other (connecting)
        moviesListArea.append(li)
        li.append(del)
        // Events
        li.onclick = () => {
            openModal(item)
            movieGenre.innerHTML = item.Genre
            moviePlot.innerHTML = item.Plot.slice(0, 130) + ' ...'
            movieName.innerHTML = item.Title
            movieImbd.innerHTML = `IMDb: ${item.imdbRating}`
        }
    }
}
const movieTypes = document.querySelectorAll('.promo__menu-item')
movieTypes.forEach(type => {
    type.onclick = () => {
        movieTypes.forEach(t => {
            t.classList.remove('promo__menu-item_active')
        })
        type.classList.add('promo__menu-item_active')
    }
})
reload(movies)