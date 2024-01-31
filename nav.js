// recupere le menu
let menu = document.getElementById('menu')

// ajouter un evenement au clic
menu.addEventListener('click', () => {
    menu.classList.toggle('open')
})