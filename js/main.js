const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  toggle.hidden = false;
  document.documentElement.classList.add('js');
  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(); toggle.focus();
    }
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  window.matchMedia('(max-width: 900px)').addEventListener('change', closeMenu);
}
document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Animate once on entry; content is never hidden while waiting for JavaScript.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const headline = document.querySelector('.hero-rotator');
const headlineControl = document.querySelector('.hero-motion-control');
if (headline && headlineControl) {
  headlineControl.hidden = motionPreference.matches;
  headlineControl.addEventListener('click', () => {
    const paused = !headline.classList.contains('is-paused');
    const phrases = [...headline.querySelectorAll('.hero-phrase')];
    if (paused) {
      const current = phrases.reduce((best, phrase) =>
        Number(getComputedStyle(phrase).opacity) > Number(getComputedStyle(best).opacity) ? phrase : best
      );
      current.classList.add('paused-current');
    } else {
      phrases.forEach(phrase => phrase.classList.remove('paused-current'));
    }
    headline.classList.toggle('is-paused', paused);
    headlineControl.setAttribute('aria-pressed', String(paused));
    headlineControl.textContent = paused ? 'Resume headline animation' : 'Pause headline animation';
  });
  motionPreference.addEventListener('change', event => {
    headlineControl.hidden = event.matches;
  });
}

// Five supplied discipline graphics form a self-contained, keyboard-friendly carousel.
const carousel = document.querySelector('.capability-carousel');
if (carousel) {
  const slides = [...carousel.querySelectorAll('.capability-slide')];
  const selectors = [...carousel.querySelectorAll('[data-slide]')];
  const pauseButton = carousel.querySelector('.carousel-pause');
  const slideRegion = carousel.querySelector('.capability-slides');
  let selected = 0;
  let paused = false;
  let hovered = false;
  let focused = false;
  let timer;
  carousel.querySelector('.carousel-controls').hidden = false;
  carousel.querySelector('.carousel-selectors').hidden = false;

  function showSlide(index, manual = false) {
    selected = (index + slides.length) % slides.length;
    slideRegion.setAttribute('aria-live', manual ? 'polite' : 'off');
    slides.forEach((slide, number) => {
      slide.hidden = number !== selected;
      slide.classList.toggle('is-entering', number === selected);
    });
    selectors.forEach((button, number) => button.setAttribute('aria-pressed', String(number === selected)));
    carousel.querySelector('.carousel-count').textContent = `${String(selected + 1).padStart(2, '0')} / 05`;
  }

  function schedule() {
    clearTimeout(timer);
    if (paused || hovered || focused || motionPreference.matches || document.hidden) return;
    timer = setTimeout(() => { showSlide(selected + 1); schedule(); }, 6000);
  }

  selectors.forEach(button => button.addEventListener('click', () => {
    showSlide(Number(button.dataset.slide), true);
    schedule();
  }));
  carousel.querySelectorAll('[data-direction]').forEach(button => button.addEventListener('click', () => {
    showSlide(selected + Number(button.dataset.direction), true);
    schedule();
  }));
  pauseButton.addEventListener('click', () => {
    paused = !paused;
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.textContent = paused ? 'Play slides' : 'Pause slides';
    schedule();
  });
  carousel.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showSlide(selected + (event.key === 'ArrowRight' ? 1 : -1), true);
    schedule();
  });
  carousel.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  carousel.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  carousel.addEventListener('focusin', () => { focused = true; schedule(); });
  carousel.addEventListener('focusout', event => {
    focused = carousel.contains(event.relatedTarget);
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  motionPreference.addEventListener('change', schedule);
  schedule();
}
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.service-card, .split-feature, .preview-pair > a, .process li, .industries-list article, .gallery figure, .two-columns article').forEach(item => observer.observe(item));
}

// Native dialog supplies keyboard focus containment and Escape-to-close.
const galleryLinks = document.querySelectorAll('.gallery figure > a');
if (galleryLinks.length && typeof HTMLDialogElement !== 'undefined') {
  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Engineering photograph');
  const bar = document.createElement('div');
  bar.className = 'lightbox-bar';
  const caption = document.createElement('p');
  const close = document.createElement('button');
  close.type = 'button';
  close.textContent = 'Close ×';
  const photograph = document.createElement('img');
  bar.append(caption, close);
  dialog.append(bar, photograph);
  document.body.append(dialog);
  galleryLinks.forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    photograph.src = link.href;
    photograph.alt = link.querySelector('img').alt;
    caption.textContent = link.closest('figure').querySelector('h2').textContent;
    dialog.showModal();
  }));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
}
