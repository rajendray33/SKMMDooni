document.querySelectorAll('.logo b').forEach((badge) => {
  const logo = document.createElement('img');
  logo.src = 'assets/images/college-logo-icon.png';
  logo.alt = 'Shri Krishna Mahila Mahavidyalaya logo';
  logo.className = 'college-logo';
  badge.replaceWith(logo);
});

const logoStyle = document.createElement('style');
logoStyle.textContent = '.college-logo{width:104px;height:104px;object-fit:cover;border-radius:50%;border:3px solid #d7a12d;flex:0 0 104px;background:#fffaf0}@media(max-width:760px){.college-logo{width:78px;height:78px;flex-basis:78px}}@media(max-width:420px){.college-logo{width:64px;height:64px;flex-basis:64px}}';
document.head.appendChild(logoStyle);

const themeStyle = document.createElement('style');
themeStyle.textContent = `
  :root{--navy:#102943;--red:#9b741f;--gold:#d7ae57;--cream:#fffaf0;--muted:#5e6b78}
  body{background:#fffdf8}.header{border-bottom-color:#e9dfca}.logo{color:#102943}.logo small{color:#8a6b31}
  .nav nav a:hover,.nav nav .active{color:#9b741f;border-color:#d7ae57}
  .btn{background:#9b741f;border-color:#9b741f;color:#fff}.btn:hover{background:#735515}.light{background:transparent;color:#9b741f}
  .slider{background:#f5efe2}.slide-one{background:linear-gradient(120deg,#fff5df,#fffaf0 60%,#dce5e7)}.slide-two{background:linear-gradient(120deg,#e4edf0,#fff8e9 58%,#d6b76e)}.slide-three{background:linear-gradient(120deg,#fff7e9,#e0ece8 60%,#bfcdd4)}
  .tag,.cards b{color:#9b741f}.slide h1 i{color:#9b741f}.quote{background:#102943;color:#d7ae57}.info,footer{background:#102943}.hero-card{background:#102943}.cream{background:#fff8e9}
  .slider-dots button.active{background:#9b741f}.gallery-item figcaption{background:#102943e8}.staff article{background:#fff8e9;border-bottom-color:#d7ae57}.staff article>b{background:#e7d2a1;color:#102943}
`;
document.head.appendChild(themeStyle);

document.querySelectorAll('.year').forEach((year) => year.textContent = new Date().getFullYear());
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('open'));

const form = document.querySelector('form');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.notice').textContent = 'Thank you! Your message has been recorded.';
  form.reset();
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots button');
let currentSlide = 0;
function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}
document.querySelector('.next')?.addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.previous')?.addEventListener('click', () => showSlide(currentSlide - 1));
dots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
if (slides.length > 1) setInterval(() => showSlide(currentSlide + 1), 5000);
