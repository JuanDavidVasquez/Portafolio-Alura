/*
    Codigo Secreto
*/
'use strict'
alert("trest");
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
