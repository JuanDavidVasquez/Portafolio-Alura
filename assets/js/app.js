/*
    Codigo Secreto
*/
'use strict'
function animar() {
  gsap.fromTo(
    "#resultado",
    { duration: 1, ease: "bounce.out", opacity: 0, y: "-200%" },
    { duration: 1, ease: "bounce.out", opacity: 1, y: "0%" }
  );
}
function encriptar() {
    gsap.fromTo(
        "#resultado",
        { duration: 1, ease: "bounce.out", opacity: 0},
        { duration: 1, ease: "bounce.out", opacity: 1}
      );
  var texto = document.getElementById("texto").value;
  const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  let textoEncriptado = texto;
  for (let letra in llaves) {
    textoEncriptado = textoEncriptado.replace(
      new RegExp(letra, "g"),
      llaves[letra]
    );
  }
  document.getElementById("resultado").innerHTML = textoEncriptado;
  return false;
}

function dencriptar() {
  animar();
  var dtexto = document.getElementById("texto").value;
  const dllaves = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  let dtextoEncriptado = dtexto;
  for (let dletra in dllaves) {
    dtextoEncriptado = dtextoEncriptado.replace(
      new RegExp(dletra, "g"),
      dllaves[dletra]
    );
  }
  document.getElementById("resultado").innerHTML = dtextoEncriptado;
  return false;
}

function copiando() {
  const copiarResultado = document.getElementById("resultado");
  document.getElementById("texto").value = copiarResultado.textContent;
}

const encriptadorAction = document.querySelector(".accione");
const encriptadorActions = document.querySelector(".acciones");
const copiar = document.querySelector(".copiar");

//EventListeners
encriptadorAction.addEventListener("click", encriptar);
encriptadorActions.addEventListener("click", dencriptar);
copiar.addEventListener("click", copiando);

var textarea = document.querySelector('textarea');
textarea.addEventListener("keydown", function(e) {
    encriptar();
});

textarea.addEventListener("input", () => {
  const currentValue = textarea.value;
  textarea.value = currentValue.toLowerCase();
});
textarea.addEventListener("input", () => {
  const currentValue = textarea.value;
  const newValue = currentValue.replace(/[^a-zA-Z\s]/g, "");
  textarea.value = newValue;
});

/*
    Ahorcado
*/

var animals = ["elefante", "tigre", "jirafa", "cocodrilo", "pinguino", "leopardo", "rinoceronte", "hipopotamo"];
var selectedWord = animals[Math.floor(Math.random() * animals.length)];
var guessedWord = new Array(selectedWord.length).fill("_");
var attemptsLeft = 3;

var wordElement = document.getElementById("word");
var guessInput = document.getElementById("guess");
var messageElement = document.getElementById("message");

wordElement.textContent = guessedWord.join(" ");

function guessLetter() {
  var letter = guessInput.value.toLowerCase();

  if (!letter.match(/[a-z]/)) {
    messageElement.textContent = "Ingrese solo letras de la A a la Z.";
    return;
  }

  if (letter.length !== 1) {
    messageElement.textContent = "Ingrese solo una letra a la vez.";
    return;
  }

  if (guessedWord.includes(letter)) {
    messageElement.textContent = "Ya has adivinado esa letra. Intenta con otra.";
    return;
  }

  var found = false;

  for (var i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === letter) {
      guessedWord[i] = letter;
      found = true;
    }
  }

  wordElement.textContent = guessedWord.join(" ");

  if (found) {
    messageElement.textContent = "¡Adivinaste una letra!";
  } else {
    attemptsLeft--;

    if (attemptsLeft === 0) {
      messageElement.textContent = "¡Perdiste! La palabra era: " + selectedWord;
      guessInput.disabled = true;
    } else {
      messageElement.textContent = "Letra incorrecta. Te quedan " + attemptsLeft + " intentos.";
    }
  }

  guessInput.value = "";
}