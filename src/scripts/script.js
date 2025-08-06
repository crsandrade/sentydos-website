const texto = "PSICOTERAPIA E DESENVOLVIMENTO PESSOAL"; // tem 33 caracteres
const container = document.querySelector('.container-titles')

// Função para gerar letras com transform aleatório
function gerarLetras() {
  container.innerHTML = '';
  for (let i = 0; i < texto.length; i++) {
    const letra = document.createElement('span');
    letra.textContent = texto[i] === ' ' ? '\u00A0' : texto[i]; // substitui espaço por espaço visível
    const tx = Math.floor(Math.random() * 100 - 50);
    const ty = Math.floor(Math.random() * 100 - 50);
    const rot = Math.floor(Math.random() * 60 - 30);
    letra.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
    container.appendChild(letra);
  }
}

function espalhar() {
  const letras = container.querySelectorAll('span');
  letras.forEach(letra => {
    const tx = Math.floor(Math.random() * 100 - 50);
    const ty = Math.floor(Math.random() * 100 - 50);
    const rot = Math.floor(Math.random() * 60 - 30);
    letra.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
    letra.style.opacity = 0;
  });
}

function organizar() {
  const letras = container.querySelectorAll('span');
  letras.forEach((letra, i) => {
    letra.style.transform = `translate(0px, 0px) rotate(0deg)`;
    letra.style.opacity = 1;
  });
}

gerarLetras(); // chama ao iniciar a página

// Funcionalidade do menu responsivo
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', function() {
  this.classList.toggle('menu-open');
  navList.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('menu-open');
    navList.classList.remove('active');
  });
});

// Adicionar animação de entrada aos cards de serviço
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  observer.observe(card);
});

// Botão voltar ao topo
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});