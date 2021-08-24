let senhaInput = document.getElementById("mostraSenha");
let copiar = document.getElementById("copy");
let tamanhoSenha = document.getElementById("tamanho");
let letrasMaisculas = document.getElementById("maiuscula");
let letrasMinusculas = document.getElementById("minuscula");
let numero = document.getElementById("numeros");
let simbolo = document.getElementById("simbolos");
let botaoGerar = document.getElementById("gerar");

let maisculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minusculas = "abcdefghijklmnopqrstuvwxyz";
let numeros = "0123456789";
let simbolos = "!@#$%¨&*=+_-";

function getMaiscula() {
  return maisculas[Math.floor(Math.random() * maisculas.length)];
}
function getMinuscula() {
  return minusculas[Math.floor(Math.random() * minusculas.length)];
}
function getNumero() {
  return numeros[Math.floor(Math.random() * numeros.length)];
}
function getSimbolo() {
  return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function gerarSenha() {
  senhaInput.innerText = "";

  const tam = tamanhoSenha.value;
  let senha = "";

  if (letrasMaisculas.checked) {
    senha += getMaiscula();
  }
  if (letrasMinusculas.checked) {
    senha += getMinuscula();
  }
  if (numero.checked) {
    senha += getNumero();
  }
  if (simbolo.checked) {
    senha += getSimbolo();
  }

  for (let i = senha.length; i < tam; i++) {
    const x = gerarX();
    senha += x;
  }

  senhaInput.innerText += senha;
}

function gerarX() {
  const xs = [];

  if (letrasMaisculas.checked) {
    xs.push(getMaiscula());
  }

  if (letrasMinusculas.checked) {
    xs.push(getMinuscula());
  }
  if (numero.checked) {
    xs.push(getNumero());
  }
  if (simbolo.checked) {
    xs.push(getSimbolo());
  }

  if (xs.length === 0) return "";
  console.log(xs)
  return xs[Math.floor(Math.random() * xs.length)];
  
}

botaoGerar.addEventListener("click", gerarSenha);

copiar.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const senha = senhaInput.innerText;

  if (!senha) {
    return;
  }

  textarea.value = senha;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("TextoCopiado");
});
