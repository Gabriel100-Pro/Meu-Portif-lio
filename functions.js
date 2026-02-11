const codeText = `
const developer = {
  name: "Gabriel Carlos",
role: "Dev Júnior",
education: "Estudante de Ciência da Computação",
about:
  "Sou apaixonado por tecnologia e desenvolvimento web. " +
  "Gosto de aprender coisas novas, escrever código limpo, " +
  "buscar boas práticas e evoluir constantemente 
  como desenvolvedor.",
skills: [ "HTML", "CSS", "JavaScript", "React (Basic)", 
"Git", "GitHub", ],
currentFocus:
  "Construindo projetos pessoais, aprofundando meus 
  conhecimentos em JavaScript " +
  "e iniciando meus estudos em React para desenvolvimento 
  de aplicações modernas.",
mindset:
  "Curioso, dedicado, disciplinado e sempre disposto a 
  aprender algo novo e " +
  "encarar desafios que contribuam para meu 
  crescimento profissional."

};

console.log("Hello, world!");
`;

const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < codeText.length) {
    typingElement.textContent += codeText.charAt(index);
    index++;
    setTimeout(typeEffect, 15);
  }
}

typeEffect();

window.addEventListener("load", () => {

  // Código digitando
  // Texto do portfólio digitando
  const elements = document.querySelectorAll(".typing");
  let index = 0;

  function typeElement(el, speed = 40) {
    const text = el.dataset.text;
    let c = 0;
    el.innerHTML = "";

    function type() {
      if (c < text.length) {
        el.innerHTML += text[c] === "\n" ? "<br>" : text[c];
        c++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  function startTyping() {
    if (index < elements.length) {
      typeElement(elements[index]);
      setTimeout(() => {
        index++;
        startTyping();
      }, elements[index].dataset.text.length * 40 + 300);
    }
  }

  startTyping();
});


// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const menuBackdrop = document.getElementById('menu-backdrop');
const navLinks = navMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('mobile-open');
  menuBackdrop.classList.toggle('active');
});

// Fechar o menu quando um link é clicado
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('mobile-open');
    menuBackdrop.classList.remove('active');
  });
});

// Fechar o menu quando clicar no backdrop
menuBackdrop.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('mobile-open');
  menuBackdrop.classList.remove('active');
});

// Fechar o menu quando clicar fora
document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navMenu.contains(event.target) && !menuBackdrop.contains(event.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('mobile-open');
    menuBackdrop.classList.remove('active');
  }
});

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


document.getElementById("downloadCV").addEventListener("click", function () {
    document.getElementById("spinner").style.display = "flex";

    setTimeout(() => {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("successBox").style.display = "flex";
    }, 2000); // tempo curto, só feedback visual
});

document.getElementById("okBtn").addEventListener("click", function () {
    document.getElementById("successBox").style.display = "none";
});






















