'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const feature  = document.querySelector('#section--1')
const scrollTo= document.querySelector('.btn--scroll-to')
const nav = document.querySelector('.nav')
const section1 = document.querySelector('#section--1')


const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn =>btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//smooth scroll

scrollTo.addEventListener('click',() => {
  feature.scrollIntoView({behavior: "smooth"})
})

//page navigation
// document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click',function (e) {
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: "smooth"})
//   })
// })

//1.add event listener to common parent element
//2.determine what element originated the event
document.querySelector('.nav__links').addEventListener('click',function (e){
  e.preventDefault()

  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
}
})
//operation tap
const tabs = document.querySelectorAll('.operations__tab')
const tabContainer = document.querySelector('.operations__tab-container')
const tabContent = document.querySelectorAll('.operations__content')

tabContainer.addEventListener('click',function (e){
  const clicked = e.target.closest('.operations__tab')
  //Guard clause :사전 조건이 거짓이라면 ( 다음 단계로 진행하기 위한 올바른 실행 조건이 아니라면 ) 예외처리를 하여 더이상 다음 단계가 실행되지 않도록 하는것입니다.= early return
  if(!clicked) return

  //remove tab
  tabs.forEach(t=>t.classList.remove('operations__tab--active'))
  tabContent.forEach(c=>c.classList.remove('operations__content--active'))
//active tab
  clicked.classList.add('operations__tab--active')

  //active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})
//made fade nav animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//nav.addEventListener('mouseover', handleHover( e,0.5)) -> 이렇게 하면 handleHover 을 call 하게 되는데, handleHover 이 run 되긴하나 아무것도 return 하지 않는다. 그래서 undefined 이기 때문에 작동하지 않음

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
// nav.addEventListener('mouseout',function (e){
//   handleHover(e,1)})


//sticky navigation
// const initialCoords = section1.getBoundingClientRect()
// window.addEventListener('scroll',function (e){
//   console.log(scrollY)
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
//
// })

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//reveal section
const allSections = document.querySelectorAll('.section')
const revealSection = function (entries,observer){
  const [entry] = entries
  if(!entry.isIntersecting) return

  entry.target.classList.remove('section__hidden')
  observer.unobserve(entry.target)

}
const sectionObserver = new IntersectionObserver(
  revealSection,{
    root: null,
    threshold: 0.15,
    rootMargin:'200px',
  });

allSections.forEach(function (section){
  sectionObserver.observe(section)
  section.classList.add('section__hidden')
})

// lazy loading images
const imgTargets = document.querySelector('img[data-src]')
const loadImg = function (entries,observer){
  const  [entry] = entries
  if(!entry.isIntersecting) return
  //replace src with data-src
  entry.target.src = entry.target.dataset.src
  entry.target.addEventListener('load',function (){
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0
});
imgTargets.forEach((img) => imgObserver.observe(img))

//----------------------------------------------
/*
// Selecting, Creating, and Deleting Elements

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Event Propagation in Practice
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
});


// DOM Traversing
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';


// Sticky navigation: Intersection Observer API

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
//whenever first section (our target section1) intersecting the viewport (root) as a threshold(%)
// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

 */