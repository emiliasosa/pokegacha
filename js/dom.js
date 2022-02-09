let btn = document.getElementById('Map')
btn.addEventListener('click', gacha)

let dine = document.getElementById('pago');
dine.addEventListener('submit', solicitarPago)

document.getElementById('cantidad').innerHTML = `Tienes un total de ${totalDeJugadas} jugadas`;
document.getElementById('premios').innerHTML = `Aun no tienes premios`;
