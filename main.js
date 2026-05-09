/* ============================================
   NAIRA SHIELDS — Main JavaScript
   File: js/main.js
   ============================================ */

/* ------------------------------------------
   STICKY BAR
   Shows the sticky CTA bar once the hero
   section scrolls out of view.
------------------------------------------ */
const stickyBar = document.getElementById('stickyBar');
const hero = document.querySelector('.hero');

const heroObserver = new IntersectionObserver(([entry]) => {
  stickyBar.classList.toggle('visible', !entry.isIntersecting);
}, { threshold: 0.1 });

heroObserver.observe(hero);


/* ------------------------------------------
   SMOOTH SCROLL
   All links pointing to #pricing scroll
   smoothly instead of jumping.
------------------------------------------ */
document.querySelectorAll('a[href="#pricing"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  });
});
