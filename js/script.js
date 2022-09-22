'use strict';

const navContainer = document.querySelector('.right-header');

// Smooth scrolling

navContainer.addEventListener('click', e => {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
