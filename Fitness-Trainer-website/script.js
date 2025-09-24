// script.js - behavior for the FitForge demo site

// DOM helpers
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

// Mobile nav toggle
const navToggle = $('#nav-toggle');
const mainNav = $('#main-nav');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  const isOpen = mainNav.getAttribute('aria-hidden') === 'false';
  mainNav.setAttribute('aria-hidden', String(isOpen));
  // For small screens: show/hide
  if (window.innerWidth < 720) {
    mainNav.style.transform = isOpen ? null : 'translateX(0)';
    mainNav.setAttribute('aria-hidden', String(!isOpen));
  }
});

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href === '#') return;
  const target = document.querySelector(href);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile nav if open
    if (window.innerWidth < 720) {
      mainNav.style.transform = null;
      mainNav.setAttribute('aria-hidden', 'true');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }
});

// Year in footer
$('#year').textContent = new Date().getFullYear();

// Booking modal controls
const modal = $('#modal');
const modalClose = $('#modal-close');
const modalForm = $('#modal-form');
const modalTitle = $('#modal-title');
const modalMsg = $('#modal-msg');

// open modal for booking when "Book" buttons clicked
$$('.book-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const trainer = btn.dataset.trainer || 'Trainer';
    modalTitle.textContent = `Book: ${trainer}`;
    // reset form
    modalForm.reset();
    modalMsg.textContent = '';
    modal.setAttribute('aria-hidden', 'false');
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
  });
});

modalClose?.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function closeModal(){
  modal.setAttribute('aria-hidden', 'true');
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
}

// Modal form submission (simulated)
modalForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  modalMsg.textContent = 'Booking confirmed — trainer will contact you shortly!';
  setTimeout(closeModal, 1500);
});

// Booking form (main) validation & simulated submit
const bookingForm = $('#booking-form');
const bookingMsg = $('#form-msg');

bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  bookingMsg.textContent = '';
  const name = $('#name').value.trim();
  const email = $('#email').value.trim();
  const phone = $('#phone').value.trim();
  const date = $('#date').value;
  if (!name || !email || !phone || !date) {
    bookingMsg.textContent = 'Please fill required fields: name, email, phone, date.';
    return;
  }
  // simple phone pattern check
  if (!/^\+?\d{7,15}$/.test(phone.replace(/\s+/g,''))) {
    bookingMsg.textContent = 'Enter a valid phone number (digits only, include country code optional).';
    return;
  }
  bookingMsg.textContent = 'Thanks! Your booking request has been sent.';
  bookingForm.reset();
});

// Contact form
const contactForm = $('#contact-form');
const contactMsg = $('#contact-msg');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#c-name').value.trim();
  const email = $('#c-email').value.trim();
  const message = $('#c-message').value.trim();
  if (!name || !email || !message) {
    contactMsg.textContent = 'Please fill all fields.';
    return;
  }
  contactMsg.textContent = 'Message sent — we will reply within 1 business day.';
  contactForm.reset();
});

// Small accessible improvements: focus trap when modal opens (minimal)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});
