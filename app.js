// -------------------------------------
// Gestión de pestañas (NO MODIFICAR)
// -------------------------------------

const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

for (const button of tabButtons) {
    button.addEventListener("click", function () {
        const targetId = button.dataset.tab;

        for (const tabButton of tabButtons) {
            tabButton.classList.remove("active");
        }

        for (const panel of panels) {
            panel.classList.remove("active");
        }

        button.classList.add("active");
        document.getElementById(targetId).classList.add("active");
    });
}

// -------------------------------------
// 1. Adivina el número
// -------------------------------------

//DOM 
const numero = document.querySelector("#inputNumero");
const btnComprobar = document.querySelector("#btnComprobarNumero");
const btnReiniciarNumero = document.querySelector("#btnReiniciarNumero");
const mensaje = document.querySelector("#mensajeNumero");
const intentosNumero = document.querySelector("#intentosNumero");
const timeOut = 2000;
let numeroAdivinar;
let numeros = [];


function init() {
    numeroAdivinar = generarNumeroAleatorio(100); 

    btnComprobar.addEventListener("click", () => {
        if(!validad()) {
            return;
        }  
        comprobarNumero();
    })

    btnReiniciarNumero.addEventListener("click", () => {
        numeroAdivinar = generarNumeroAleatorio(100);
        numero.value = "";
        intentosNumero.value = 0;
    })
}

init();

function generarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function validad() {
    if(!numero.checkValidity()) {
        mostrarMensaje("Debes introducir un número entre 1 y 100");
        return false;
    }
    if(numero.value.trim() == "") {
         mostrarMensaje("Debes introducir un número");
         return false;
    }

    return true;
}

function almacenarNumeros() {
    if(numero.value != numeroAdivinar.value) {
        numeros.push(numero);
    }
}

function repetido() {
    for(let i = 0; i < numeros.length; i++) {
        
    }
}

function comprobarNumero() {
    if(numero.value != numeroAdivinar.value) {
        if(Math.abs(numero.value - numeroAdivinar.value) > 20) {
            mostrarMensaje("Frío, frío");
        } 
        if (Math.abs(numero.value - numeroAdivinar.value) >= 10 && Math.abs(numero.value - numeroAdivinar.value) <= 20) {
            mostrarMensaje("Caliente! Caliente");
        } 
        if (Math.abs(numero.value - numeroAdivinar.value) < 10) {
            mostrarMensaje("Te quemas!!!");
        }
    } else {
        mostrarMensaje("Felicidades, has acertado el número secreto");
    }
}

function mostrarMensaje(texto) {
    mensaje.innerHTML = `${texto}<br>`
    setTimeout(function() {
        limpiarMensaje();
    }, timeOut);
}

function limpiarMensaje() {
    mensaje.textContent = "";
}


// -------------------------------------
// 2. Siete y medio
// -------------------------------------

// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego


// -------------------------------------
// 3. Piedra, papel o tijera
// -------------------------------------

const btnPiedra = document.querySelector("#btnPiedra");
const btnPapel = document.querySelector("#btnPapel");
const btnTijera = document.querySelector("#btnTijera");
const btnReiniciarPPT = document.querySelector("#btnReiniciarPPT");
const eleccionJugador = document.querySelector("#eleccionJugador");
const eleccionMaquina = document.querySelector("#eleccionMaquina");
const totalPPT = document.querySelector("#totalPPT");
const ganadasPPT = document.querySelector("#ganadasPPT");
const perdidasPPT = document.querySelector("perdidasPPT");
const empatadasPPT = document.querySelector("#empatadasPPT");
const listaHistorialPPT = document.querySelector("#listaHistorialPPT");

let jugadas = [];

function init() {
    btnTijera.addEventListener("click", () => {

    })
    btnPapel.addEventListener("click", () => {

    })
    btnPiedra.addEventListener("click", () => {

    })
    btnReiniciarPPT.addEventListener("click", () => {

    })
}

init();



// TODO: Variables del juego

// TODO: Funciones del juego

// TODO: Eventos del juego