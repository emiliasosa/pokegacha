let dinero = parseInt(prompt("Ingrese su dinero, 1 jugada tiene el valor de 3 usd"));

/*let dinero;

do{
    dinero = parseInt(prompt("Ingrese su dinero, 1 jugada tiene el valor de 3 usd"));
}while(dinero != isNaN);*/

let jugadas = (dinero) =>{
    let totalDeJugadas = 0;

    if(dinero % 3 == 0){
        totalDeJugadas = dinero / 3;
        return totalDeJugadas
    }else{
        return false;
    }
}

let tiros = jugadas(dinero);

let gacha = () => {
    let aceptar = prompt("Deseas realizar la jugada?")

    if(aceptar == "si"){
        for (let i = 1; i <= tiros; i++) {
            let total = tiros - i

            if(i < tiros && aceptar == "si"){
                aceptar = prompt(`Haz sacado un gashapon! Te quedan ${total} jugadas. Deseas realizar otra jugada?`)
            }else if (i == tiros){
                alert("Haz sacado un gashapon! Te quedaste sin jugadas, gracias por jugar!")
                break;
            }else{
                alert("Puedes realizar tu tirada cuando quieras");
                break;
            }
        }
    } else {
        alert("Puedes realizar tu tirada cuando quieras");
    }
}

if(dinero < 3 /*|| tiros == false*/){
    do{
        dinero = Number(prompt("No te alcanza, debes ingresar mas dinero. Una jugada tiene el valor de 3 usd"));
    } while (dinero < 3 /*|| tiros == false*/)
} 

if (tiros > 1){
    alert(`Tienes un total de ${tiros} jugadas`)
    alert(gacha())
} else if (tiros == 1){
    alert("Puedes realizar una jugada")
    alert(gacha())
}
    
