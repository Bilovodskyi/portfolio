const firstModal = document.querySelector('#first-modal')
const secondModal = document.querySelector('#second-modal')
const thirdModal = document.querySelector('#third-modal')
const openFirstModal = document.querySelector('.first-project-button')
const openSecondModal = document.querySelector('.second-project-button')
const openThirdModal = document.querySelector('.third-project-button')
const closeModalOne = document.querySelector('.close-button-one')
const closeModalTwo = document.querySelector('.close-button-two')
const closeModalThree = document.querySelector('.close-button-three')
const body = document.querySelector('body')

const fadeIn = document.querySelectorAll('.fade-in')
const fadeInGraphic = document.querySelectorAll('.fade-in-graphic')

const navMenu = document.querySelector('nav')
const startPage = document.querySelector('.start')

const hamburger = document.querySelector('.hamburger')
const navMenuMobile = document.querySelector('.nav-menu')
const navLink = document.querySelectorAll('.nav-link')


function onClickOne(event) {
    if (event.target === firstModal) {
        firstModal.close()
        body.style.overflow = 'auto'
    }
}

function onClickTwo(event) {
    if (event.target === secondModal) {
        secondModal.close()
        body.style.overflow = 'auto'
    }
}

function onClickThree(event) {
    if (event.target === thirdModal) {
        thirdModal.close()
        body.style.overflow = 'auto'
    }
}

openFirstModal.addEventListener('click', () => {
    firstModal.showModal()
    body.style.overflow = 'hidden'
})

openSecondModal.addEventListener('click', () => {
    secondModal.showModal()
    body.style.overflow = 'hidden'
})

openThirdModal.addEventListener('click', () => {
    thirdModal.showModal()
    body.style.overflow = 'hidden'
})

closeModalOne.addEventListener('click', () => {
    firstModal.close()
    body.style.overflow = 'auto'
})

closeModalTwo.addEventListener('click', () => {
    secondModal.close()
    body.style.overflow = 'auto'
})

closeModalThree.addEventListener('click', () => {
    thirdModal.close()
    body.style.overflow = 'auto'
})

firstModal.addEventListener('click', onClickOne)

secondModal.addEventListener('click', onClickTwo)

thirdModal.addEventListener('click', onClickThree)

// appearOptions = { 
//     rootMargin: "0px 0px -150px 0px " 
// }

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
}, {
    rootMargin: "0px 0px -150px 0px "
})

fadeIn.forEach(fader => {
    appearOnScroll.observe(fader)
})

const appearOnScrollGraphic = new IntersectionObserver(function (entriesTwo, appearOnScrollGraphic) {
    entriesTwo.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear')
            appearOnScrollGraphic.unobserve(entry.target)
        }
    })
}, {
    rootMargin: "0px 0px -500px 0px "
})

fadeInGraphic.forEach(fader => {
    appearOnScrollGraphic.observe(fader)
})

const navigationMenu = new IntersectionObserver(function (entriesThree, navigationMenu) {
    entriesThree.forEach(entry => {
        if (!entry.isIntersecting) {
            navMenu.classList.add('nav-border')
        } else {
            navMenu.classList.remove('nav-border')
        }
    })
}, {
    rootMargin: "-50px 0px 0px 0px "
})

navigationMenu.observe(startPage)

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenuMobile.classList.toggle('active')
})

navLink.forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenuMobile.classList.remove('active')
}))
