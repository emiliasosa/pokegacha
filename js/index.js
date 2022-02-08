let gacha = () => {
    let aceptar = prompt("Deseas comenzar el juego?")

    if(aceptar.toLowerCase() == "si"){
        for (let i = 1; i <= totalDeJugadas; i++) {
            if(i < totalDeJugadas && aceptar.toLowerCase() == "si" ){
                aceptar = prompt(`Haz sacado un gashapon! Te quedan ${totalDeJugadas - i} jugadas. Deseas realizar otra jugada?`)
            }else if (i == totalDeJugadas && aceptar.toLowerCase() == "si" ){
                alert("Haz sacado un gashapon! Te quedaste sin jugadas, gracias por jugar!")
            }else {
                saltear = `Puedes realizar tu tirada cuando quieras,aun tienes ${i}`;
                break;
            }
        }
    } else {
        alert(`Vuelve en otra ocasion, aun tienes ${totalDeJugadas}`);
    }
}

let dinero = 0;
let totalDeJugadas = 0;
let cortarDo = false;
let saltear = "";

console.log(saltear)

do{
    dinero = parseInt(prompt("Ingrese su dinero, 1 jugada tiene el valor de 3 usd"));
    if(dinero % 3 == 0 && dinero != 0){
        totalDeJugadas = dinero / 3;
        cortarDo = true;
    } 
}while(cortarDo == false);

gacha()





/*if (totalDeJugadas > 1){
    alert(`Tienes un total de ${totalDeJugadas} jugadas`)
} else if (totalDeJugadas == 1){
    alert("Puedes realizar una jugada")
}*/
