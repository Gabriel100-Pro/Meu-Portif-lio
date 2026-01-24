const codeText = `
const developer = {
  name: "Gabriel Carlos",
  role: "Dev Júnior",
  stack: ["JavaScript", "HTML", "CSS"],
  lookingFor: "Estágio"
};

const developer = {
  name: "Gabriel Carlos",
  role: "Dev Júnior",
  education: "Estudante de Ciência da Computação",
  about:
    "Sou apaixonado por tecnologia e desenvolvimento web. " +
    "Gosto de aprender coisas novas, escrever código limpo " +
    "e evoluir um pouco todos os dias como desenvolvedor.",
  skills: ["JavaScript", "HTML", "CSS"],
  currentFocus:
    "Construindo projetos pessoais e buscando minha primeira 
    oportunidade como estagiário.",
  mindset:
    "Curioso, dedicado e sempre disposto a aprender algo novo"
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