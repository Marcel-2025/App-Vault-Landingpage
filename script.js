const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const reveal = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  reveal.forEach(el => observer.observe(el));
} else reveal.forEach(el => el.classList.add('visible'));

const screens = document.querySelector('.screens');
const prev = document.querySelector('.slider-button.prev');
const next = document.querySelector('.slider-button.next');
function moveScreens(dir){ if(!screens) return; screens.scrollBy({left: dir * Math.min(330, screens.clientWidth * .8), behavior:'smooth'}); }
if(prev) prev.addEventListener('click',()=>moveScreens(-1));
if(next) next.addEventListener('click',()=>moveScreens(1));
