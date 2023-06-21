const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', () => {
    // Remove a classe 'active' de todos os links
    links.forEach(link => {
      link.classList.remove('active');
    });
    // Adiciona a classe 'active' ao link clicado
    link.classList.add('active');
  });
});


// modal

const link = document.querySelector('.sobre');
const modal = document.querySelector('.modalsobre');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

link.addEventListener('click', () => {
  modal.classList.add('open');
  overlay.classList.add('open');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('open');
  overlay.classList.remove('open');
});

// Modal da ancora eventos

const linkevento = document.querySelector('.evento');
const modalevento = document.querySelector('.modalevento');
const overlayevento = document.querySelector('.overlayevento');
const closeModalevento = document.querySelector('.close-modalevento');

linkevento.addEventListener('click', () => {
  modalevento.classList.add('open');
  overlayevento.classList.add('open');
});

closeModalevento.addEventListener('click', () => {
  modalevento.classList.remove('open');
  overlayevento.classList.remove('open');
});

// Modal da ancora confirme

const linkconfirme = document.querySelector('.confirme');
const modalconfirme = document.querySelector('.modalconfirme');
const overlayconfirme = document.querySelector('.overlayconfirme');
const closeModalconfirme = document.querySelector('.close-modalconfirme');

linkconfirme.addEventListener('click', () => {
  modalconfirme.classList.add('open');
  overlayconfirme.classList.add('open');
});

closeModalconfirme.addEventListener('click', () => {
  modalconfirme.classList.remove('open');
  overlayconfirme.classList.remove('open');
});

// Modal da ancora proximos eventos

const linkprox = document.querySelector('.prox');
const modalprox = document.querySelector('.modalprox');
const overlayprox = document.querySelector('.overlayprox');
const closeModalprox = document.querySelector('.close-modalprox');

linkprox.addEventListener('click', () => {
  modalprox.classList.add('open');
  overlayprox.classList.add('open');
});

closeModalprox.addEventListener('click', () => {
  modalprox.classList.remove('open');
  overlayprox.classList.remove('open');
});