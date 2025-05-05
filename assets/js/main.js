// main.js - JavaScript for Love.Life clone interactivity

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuButton = document.querySelector('.mobile-menu-button');
  const nav = document.querySelector('.nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('hidden');
    });
  }
});
