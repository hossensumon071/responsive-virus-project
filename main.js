/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const header = document.querySelector(".header");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const allSections = document.querySelectorAll(".section");
const section1 = document.querySelector("#section--1");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
const cookieBody = document.querySelector(".cookie");
const cookieCloseBtn = document.querySelector(".cookie__close");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

/////////////////////////////////////////////////////////////
// Cookie
/////////////////////////////////////////////////////////////
cookieCloseBtn.addEventListener("click", () => {
  cookieBody.classList.add("hidden");
  cookieBody.style.bottom = "-12rem";
});


// Stick navbar 
// navs height 
const navHeight = nav.getBoundingClientRect().height
// console.log(navHeight)

function sticky(entries) {
  const entry = entries[0];


if (!entry.isIntersecting) nav.classList.add('sticky');
else nav.classList.remove('sticky')
}

const hearderObserver = new IntersectionObserver(sticky, {
  root: null, //viewport
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
hearderObserver.observe(header);


//reveal section
function revealSection(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
}

const sectionObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(section => {
  sectionObs.observe(section);
  section.classList.add("section--hidden");
})