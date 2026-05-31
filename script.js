// script.js – Interactivity for Macramé Keychain Educational Site
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Simple scroll‑to‑top button (appears after scrolling down)
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.setAttribute('aria-label', 'Scroll to top');
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '1.5rem';
scrollBtn.style.right = '1.5rem';
scrollBtn.style.padding = '0.5rem 0.8rem';
scrollBtn.style.fontSize = '1.2rem';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.background = 'var(--color-primary)';
scrollBtn.style.color = '#fff';
scrollBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.opacity = '0';
scrollBtn.style.transition = 'opacity 0.3s';
scrollBtn.style.zIndex = '1000';
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.body.appendChild(scrollBtn);
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.opacity = '0';
  }
});
// Placeholder for future gallery carousel – currently static grid.
/* style.css – Premium design for Macramé Keychain Educational Site */
/* ----- Design Tokens ----- */
:root {
  /* Color palette – teal‑blue gradient */
  --color-primary: hsl(185, 70%, 45%);   /* teal */
  --color-primary-dark: hsl(185, 70%, 35%);
  --color-accent: hsl(210, 80%, 55%);    /* bright blue */
  --color-bg: hsl(0, 0%, 100%);
  --color-bg-dark: hsl(0, 0%, 12%);
  --color-text: hsl(0, 0%, 12%);
  --color-text-dark: hsl(0, 0%, 92%);
  --gradient-hero: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  --radius: 0.75rem;
  --transition: 0.3s ease;
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: var(--color-bg-dark);
    --color-text: var(--color-text-dark);
  }
}
/* ----- Base Reset ----- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  scroll-behavior: smooth;
}
/* ----- Layout ----- */
.site-header {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
}
.nav-bar {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.nav-list a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  position: relative;
}
.nav-list a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition);
}
.nav-list a:hover::after {
  width: 100%;
}
/* ----- Hero Section ----- */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
  background: var(--gradient-hero);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.hero-content h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 0.5rem;
  animation: fadeInUp 0.8s var(--transition) both;
}
.hero-content p {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.8s var(--transition) 0.2s both;
}
.cta-button {
  display: inline-block;
  background: #fff;
  color: var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: transform var(--transition), background var(--transition);
}
.cta-button:hover {
  transform: translateY(-2px);
  background: var(--color-primary-light, hsl(185,70%,55%));
}
.hero-image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45%;
  max-width: 400px;
  opacity: 0.9;
  animation: float 6s infinite ease-in-out;
}
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}
/* ----- Sections ----- */
.section {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
.section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
}
.section h2::after {
  content: '';
  position: absolute;
  width: 3rem;
  height: 3px;
  background: var(--color-primary);
  left: 50%;
  bottom: -0.5rem;
  transform: translateX(-50%);
}
.tutorial-list,
.business-list {
  list-style: disc inside;
  margin-top: 1rem;
  font-size: 1.1rem;
}
.tutorial-list li a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition);
}
.tutorial-list li a:hover {
  color: var(--color-accent);
}
/* ----- Gallery ----- */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.gallery-grid img {
  width: 100%;
  height: auto;
  border-radius: var(--radius);
  object-fit: cover;
  transition: transform var(--transition), box-shadow var(--transition);
}
.gallery-grid img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
/* ----- Contact ----- */
.contact-button {
  display: inline-block;
  background: var(--color-primary);
  color: #fff;
  padding: 0.75rem 1.2rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
  transition: background var(--transition), transform var(--transition);
}
.contact-button:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}
/* ----- Footer ----- */
.site-footer {
  background: rgba(0,0,0,0.05);
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}
/* ----- Micro‑animations ----- */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
/* ----- Responsive tweaks ----- */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  .hero-image {
    position: static;
    width: 80%;
    margin-top: 1rem;
  }
}
