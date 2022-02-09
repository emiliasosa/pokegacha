let gacha = () => {
    for (let i = 1; i <= totalDeJugadas; i++) {
        if(i < totalDeJugadas){
            // asi lo quiero poner
            //document.getElementById('premios').innerHTML = `${allObjetc.probabilidad()} Te quedan ${totalDeJugadas - i} jugadas`);
            alert(`Haz sacado un gashapon! Te quedan ${totalDeJugadas - i} jugadas`);
            break;
        }else if (i == totalDeJugadas){
            document.getElementById('premios').innerHTML = 'Haz sacado un gashapon! Te quedaste sin jugadas, gracias por jugar';
        }
    }
}

let solicitarPago = (e) =>{
    e.preventDefault();
    let formulario = e.target
    
    dinero = parseInt(formulario.children[0].value);

    if(dinero % 3 == 0 && dinero != 0){
        totalDeJugadas = dinero / 3;
        document.getElementById('cantidad').innerHTML = `Tienes un total de ${totalDeJugadas} jugadas`;
    }else{
        document.getElementById('cantidad').innerHTML = 'Dinero insuficiente';
    }
}


let dinero = 0;
let totalDeJugadas = 0;
let cortarDo = false;
let saltear = "";
