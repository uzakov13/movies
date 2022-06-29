let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modal__bg')
let closers = document.querySelectorAll('.closer')
let movieBg = document.querySelector('.promo__bg')
let ratingBox = document.querySelector('.rating')

function openModal (data) {
    ratingBox.innerHTML = ''
    modal.style.display = 'flex'
    modalBg.style.display = 'block'
    setTimeout(() => {
        modal.style.opacity = '1'
        modalBg.style.opacity = '1'
        modal.style.transform = 'translate(-50%, -50%) scale(1)'
    }, 300)

    let currentMovie = modal.querySelector('img')
    let title = modal.querySelector('h3')
    let plot = modal.querySelector('p')
    let genre = modal.querySelector('i')
    let releasedDate = modal.querySelector('span')
    let movieDuration = modal.querySelector('.duration')
    let lang = modal.querySelector('.lang')
    movieBg.style.backgroundImage = `url(${data.BgImgage})`
    currentMovie.src = data.Poster
    title.innerHTML = data.Title
    plot.innerHTML = `The plot: ${data.Plot}`
    genre.innerHTML = `Genre: ${data.Genre}`
    releasedDate.innerHTML = `Released date: </br> ${data.Released}`
    movieDuration.innerHTML = `Duration: </br> ${data.Runtime}`
    lang.innerHTML = `Language: ${data.Language}`
    for (let i = 1; i <= Math.round(data.imdbRating); i++) {
        let stars = document.createElement('img')
        stars.src = '../icons/Star.svg'
        ratingBox.append(stars)
    }
}
function closeModal (closers) {
    closers.forEach(closer => {
        closer.onclick = () => {
            modal.style.opacity = '0'
            modalBg.style.opacity = '0'
            modal.style.transform = 'translate(-50%, -50%) scale(0)'
            setTimeout(() => {
                modal.style.display = 'none'
                modalBg.style.display = 'none'
            }, 300);
        }
    });
}
closeModal(closers)
export {modal, modalBg, openModal, closeModal, movieBg}