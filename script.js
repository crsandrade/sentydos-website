const texto = "PSICOTERAPIA E DESENVOLVIMENTO PESSOAL"; // tem 33 caracteres
const container = document.querySelector('#container-titles')

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