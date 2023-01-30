const firstModal = document.querySelector("#first-modal");
// const secondModal = document.querySelector('#second-modal')
const thirdModal = document.querySelector("#third-modal");
const fourthModal = document.querySelector("#fourth-modal");
const openFirstModal = document.querySelector(".first-project-button");
// const openSecondModal = document.querySelector('.second-project-button')
const openThirdModal = document.querySelector(".third-project-button");
const openFourthModal = document.querySelector(".fourth-project-button");
const closeModalOne = document.querySelector(".close-button-one");
// const closeModalTwo = document.querySelector('.close-button-two')
const closeModalThree = document.querySelectorAll(".close-button-three");
const closeModalFour = document.querySelector(".close-button-four");
const body = document.querySelector("body");

const fadeIn = document.querySelectorAll(".fade-in");
const fadeInGraphic = document.querySelectorAll(".fade-in-graphic");

const navMenu = document.querySelector(".navbar");
const startPage = document.querySelector(".start");

const hamburger = document.querySelector(".hamburger");
const navMenuMobile = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const sendForm = document.querySelector("form");
const successMsg = document.querySelector(".contact-email-send");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const modalJs = document.querySelector(".modal-js-project");
const modalReact = document.querySelector(".modal-react-project");
const modalJsButtons = document.querySelector(".modal-js-buttons");
const modalReactButtons = document.querySelector(".modal-react-buttons");

sendForm.addEventListener("submit", () => {
    successMsg.style.display = "flex";
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 1000);
});

function onClickOne(event) {
    if (event.target === firstModal) {
        firstModal.close();
        body.style.overflow = "auto";
    }
}

// function onClickTwo(event) {
//     if (event.target === secondModal) {
//         secondModal.close()
//         body.style.overflow = 'auto'
//     }
// }

function onClickThree(event) {
    if (event.target === thirdModal) {
        thirdModal.close();
        body.style.overflow = "auto";
    }
}

function onClickFour(event) {
    if (event.target === fourthModal) {
        fourthModal.close();
        body.style.overflow = "auto";
    }
}

openFirstModal.addEventListener("click", () => {
    firstModal.showModal();
    body.style.overflow = "hidden";
});

// openSecondModal.addEventListener('click', () => {
//     secondModal.showModal()
//     body.style.overflow = 'hidden'
// })

openThirdModal.addEventListener("click", () => {
    thirdModal.showModal();
    body.style.overflow = "hidden";
});

openFourthModal.addEventListener("click", () => {
    fourthModal.showModal();
    body.style.overflow = "hidden";
});

closeModalOne.addEventListener("click", () => {
    firstModal.close();
    body.style.overflow = "auto";
});

// closeModalTwo.addEventListener('click', () => {
//     secondModal.close()
//     body.style.overflow = 'auto'
// })

closeModalThree.forEach((closeBtn) =>
    closeBtn.addEventListener("click", () => {
        thirdModal.close();
        body.style.overflow = "auto";
    })
);

closeModalFour.addEventListener("click", () => {
    fourthModal.close();
    body.style.overflow = "auto";
});

firstModal.addEventListener("click", onClickOne);

// secondModal.addEventListener('click', onClickTwo)

thirdModal.addEventListener("click", onClickThree);

fourthModal.addEventListener("click", onClickFour);

const appearOnScroll = new IntersectionObserver(
    function (entries, appearOnScroll) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    {
        rootMargin: "0px 0px -150px 0px ",
    }
);

fadeIn.forEach((fader) => {
    appearOnScroll.observe(fader);
});

const appearOnScrollGraphic = new IntersectionObserver(
    function (entriesTwo, appearOnScrollGraphic) {
        entriesTwo.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScrollGraphic.unobserve(entry.target);
            }
        });
    },
    {
        rootMargin: "0px 0px -500px 0px ",
    }
);

fadeInGraphic.forEach((fader) => {
    appearOnScrollGraphic.observe(fader);
});

const navigationMenu = new IntersectionObserver(
    function (entriesThree, navigationMenu) {
        entriesThree.forEach((entry) => {
            if (!entry.isIntersecting) {
                navMenu.classList.add("nav-border");
            } else {
                navMenu.classList.remove("nav-border");
            }
        });
    },
    {
        rootMargin: "-50px 0px 0px 0px ",
    }
);

navigationMenu.observe(startPage);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenuMobile.classList.toggle("active");
});

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenuMobile.classList.remove("active");
    })
);

let isJsProject = true;

rightBtn.addEventListener("click", () => {
    if (isJsProject) {
        modalJs.style.display = "none";
        modalJsButtons.style.display = "none";
        modalReact.style.display = "block";
        modalReactButtons.style.display = "flex";
        isJsProject = false;
    } else {
        modalJs.style.display = "block";
        modalJsButtons.style.display = "flex";
        modalReact.style.display = "none";
        modalReactButtons.style.display = "none";
        isJsProject = true;
    }
    console.log(isJsProject);
});

leftBtn.addEventListener("click", () => {
    if (isJsProject) {
        modalJs.style.display = "none";
        modalJsButtons.style.display = "none";
        modalReact.style.display = "block";
        modalReactButtons.style.display = "flex";
        isJsProject = false;
    } else {
        modalJs.style.display = "block";
        modalJsButtons.style.display = "flex";
        modalReact.style.display = "none";
        modalReactButtons.style.display = "none";
        isJsProject = true;
    }
    console.log(isJsProject);
});
