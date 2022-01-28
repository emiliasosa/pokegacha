let dinero = 0;

let tiros;

do{
    dinero = parseInt(prompt("Ingrese su dinero, 1 jugada tiene el valor de 3 usd"));
}while(/\D/.test(dinero) || dinero == "" || dinero < 3 || tiros == false);

let jugadas = (dinero) =>{
    let totalDeJugadas = 0;

    if(dinero % 3 == 0){
        totalDeJugadas = dinero / 3;
        return totalDeJugadas
    }else{
        return false;
    }
}

tiros = jugadas(dinero);



let gacha = () => {
    let aceptar = prompt("Deseas realizar la jugada?")

    if(aceptar.toLowerCase() == "si"){
        for (let i = 1; i <= tiros; i++) {
            let total = tiros - i

            if(i < tiros && aceptar.toLowerCase() == "si"){
                aceptar = prompt(`Haz sacado un gashapon! Te quedan ${total} jugadas. Deseas realizar otra jugada?`)
            }else if (i == tiros && aceptar.toLowerCase() == "si"){
                alert("Haz sacado un gashapon! Te quedaste sin jugadas, gracias por jugar!")
            }else{
                alert("Puedes realizar tu tirada cuando quieras");
                break;
            }
        }
    } else {
        alert("Puedes realizar tu tirada cuando quieras");
    }
}

if (tiros > 1){
    alert(`Tienes un total de ${tiros} jugadas`)
    gacha()
} else if (tiros == 1){
    alert("Puedes realizar una jugada")
    gacha()
}
