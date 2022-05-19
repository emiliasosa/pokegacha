let btn = document.getElementById('Map')
btn.addEventListener('click', gacha)

let dine = document.getElementById('pago');
dine.addEventListener('submit', solicitarPago)



let acumulador2 = JSON.parse(localStorage.getItem('Jugadas'))
document.getElementById('gacha_function_play').innerHTML = `Tienes un total de <span class="premios_txt-nombre">${acumulador2}</span> jugadas`;

