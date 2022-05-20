import {totalDeJugadas, gacha, solicitarPago} from "./js/funcion.js"


let btn = document.getElementById('Map')
btn.addEventListener('click', gacha)

let dine = document.getElementById('pago');
dine.addEventListener('submit', solicitarPago)

document.getElementById('gacha_function_play').innerHTML = `Tienes un total de <span class="premios_txt-nombre">${totalDeJugadas}</span> jugadas`;
