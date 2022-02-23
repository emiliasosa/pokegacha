let btn = document.getElementById('Map')
btn.addEventListener('click', gacha)

let dine = document.getElementById('pago');
dine.addEventListener('submit', solicitarPago)

let acumulador2 = JSON.parse(localStorage.getItem('Jugadas'))

document.getElementById('cantidad').innerHTML = `Tienes un total de ${acumulador2} jugadas`;
document.getElementById('premios').innerHTML = `Aun no tienes premios`;

