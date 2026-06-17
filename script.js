// ===== ARTICLE MODALS =====
function openArticle(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeArticle(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}
function closeArticleOnOverlay(e, id) {
  if (e.target === e.currentTarget) closeArticle(id);
}

function openPaywall() {
  openArticle('paywallModal');
}

// ===== TESTIMONIALS =====
const testimonials = [
  { name: 'Nicole', message: '"Nem todos temos de andar de fralda como tu."' },
  { name: 'Polícia', message: '"Estás presa em nome da lei, por roubar tantos corações."' },
  { name: 'Sapo', message: '"Ché princesa, dá aí um beijo."' },
  { name: 'Membro da família anónimo', message: '"Se não fosses minha filha violava-te."' },
];

let currentTestimonial = 0;
let testimonialTimer = null;

const nameEl    = document.getElementById('testimonial-name');
const messageEl = document.getElementById('testimonial-message');
const dotsEl    = document.getElementById('testimonial-dots');

function buildDots() {
  dotsEl.innerHTML = '';
  testimonials.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goToTestimonial(i));
    dotsEl.appendChild(d);
  });
}

function updateDots(index) {
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

function showTestimonial(index) {
  const t = testimonials[index];

  // Fade out
  nameEl.style.opacity = '0';
  messageEl.style.opacity = '0';

  setTimeout(() => {
    // Show name first
    nameEl.textContent = t.name;
    nameEl.style.opacity = '1';
    messageEl.textContent = '';
    messageEl.style.opacity = '1';

    // Show message after 1.5s
    setTimeout(() => {
      messageEl.textContent = t.message;
    }, 1500);

    updateDots(index);
  }, 300);
}

function goToTestimonial(index) {
  currentTestimonial = index;
  showTestimonial(index);
  resetTimer();
}

function resetTimer() {
  if (testimonialTimer) clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 6000);
}

buildDots();
showTestimonial(0);
resetTimer();

// ===== ORGASM COUNTER =====
let orgasmCount = 25946;
const counterEl = document.getElementById('orgasm-counter');

function formatNumber(n) {
  return n.toLocaleString('pt-PT');
}

function updateCounter() {
  orgasmCount++;
  counterEl.textContent = formatNumber(orgasmCount);
  // Flash animation
  counterEl.style.transform = 'scale(1.08)';
  counterEl.style.color = '#FFF3B0';
  setTimeout(() => {
    counterEl.style.transform = 'scale(1)';
    counterEl.style.color = 'var(--yellow)';
  }, 300);
}

counterEl.style.transition = 'transform 0.25s, color 0.25s';
setInterval(updateCounter, 5000);

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 24px rgba(255,217,61,0.3)';
  } else {
    nav.style.boxShadow = '0 2px 20px rgba(255,217,61,0.2)';
  }
});
