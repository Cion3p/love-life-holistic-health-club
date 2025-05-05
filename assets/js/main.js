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

  // Subscription form handling
  const form = document.getElementById('subscription-form');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous messages
      formMessage.textContent = '';
      formMessage.style.color = 'green';

      // Validate inputs
      const firstName = form['firstName'].value.trim();
      const lastName = form['lastName'].value.trim();
      const email = form['email'].value.trim();
      const zipCode = form['zipCode'].value.trim();

      if (!firstName || !lastName || !email || !zipCode) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
        return;
      }

      // Simple email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
        return;
      }

      // Zip code validation (5 digits)
      const zipRegex = /^\d{5}$/;
      if (!zipRegex.test(zipCode)) {
        formMessage.textContent = 'Please enter a valid 5-digit zip code.';
        formMessage.style.color = 'red';
        return;
      }

      // Simulate form submission
      try {
        // Here you would normally send data to server
        formMessage.textContent = 'Thank you for signing up.';
        form.reset();
      } catch (error) {
        formMessage.textContent = 'An unexpected error has occurred. Please wait a few seconds and try again.';
        formMessage.style.color = 'red';
      }
    });
  }

  // Cookie consent banner
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const denyBtn = document.getElementById('deny-cookies');

  if (cookieBanner && acceptBtn && denyBtn) {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      cookieBanner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieBanner.style.display = 'none';
    });

    denyBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'denied');
      cookieBanner.style.display = 'none';
    });
  }

  // Carousel functionality for membership preview
  const carouselTrack = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');

  if (carouselTrack && prevButton && nextButton) {
    const cards = carouselTrack.children;
    const cardWidth = cards[0].offsetWidth + 24; // width + margin
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        carouselTrack.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
      }
    });

    nextButton.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        carouselTrack.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
      }
    });
  }
});
