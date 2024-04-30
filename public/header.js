let closeNav = document.querySelector('.close')
let openNav = document.querySelector('.open')
let nav = document.querySelector('nav')

closeNav.addEventListener('click', () => {
    openNav.style.display = 'block'
    nav.style.marginLeft = '100vw'
    setTimeout(() => {
        nav.style.display = 'none'
    }, 300)
})

openNav.addEventListener('click', () => {
    openNav.style.display = 'none'
    nav.style.display = 'block'
    setTimeout(() => {
        nav.style.marginLeft = '50vw'
    }, 300)
})