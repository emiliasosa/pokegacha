let solicitarPago = (e) =>{
    e.preventDefault();
    let formulario = e.target
    
    dinero = parseInt(formulario.children[0].value);
    
    if(dinero % 3 == 0 && dinero != 0){
        jugadasInicial = dinero / 3; 
        totalDeJugadas += jugadasInicial
        localStorage.setItem('Jugadas', totalDeJugadas)
        acumulador = JSON.parse(localStorage.getItem('Jugadas'))
        document.getElementById('cantidad').innerHTML = `Tienes un total de ${acumulador} jugadas`;
    }else{
        document.getElementById('cantidad').innerHTML = 'Dinero insuficiente, ingrese mas dinero';
    }
}

let gacha = (e) => {
    e.preventDefault();
    if(1 <= acumulador) {
        mostrarPremio()
        acumulador -=1 
        document.getElementById('cantidad').innerHTML = `Tienes un total de ${acumulador} jugadas`;
        localStorage.setItem('Jugadas', acumulador)
        if(acumulador === 0){
            localStorage.removeItem('Jugadas');
        }
    }else{
        document.getElementById('premios').innerHTML = `No ingresaste dinero para realizar una jugada`;
    }
}

let mostrarPremio = () =>{ 
    allPrizes.forEach((e) => { 
        document.getElementById('premios').innerHTML = `${e.probabilidad()}`
    })
};


let totalDeJugadas = 0;
let jugadasInicial = 0;
let dinero = 0;
let acumulador = 0;

