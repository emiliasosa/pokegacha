let dinero = parseInt(prompt("Ingrese su dinero, 1 jugada tiene el valor de 3 usd"));

let jugadas = (dinero) =>{
    let totalDeJugadas = 0;

    totalDeJugadas = dinero / 3;

    return totalDeJugadas
}

let tiros = jugadas(dinero);



while(dinero >= 3 || dinero <= 3){

    let gacha = () => {
        for (i = 0; i < tiros; i--) {
            let aceptar = prompt("Deseas realizar la jugada?")
    
            if(aceptar == "si"){
                alert("Haz sacado un gashapon!")
            } else {
                alert("Puedes realizar tu tirada cuando quieras")
            }
        }
    }
    
    if(dinero < 3 ){
        do{
            dinero = Number(prompt("No te alcanza, debes ingresar mas dinero. Una jugada tiene el valor de 3 usd"));
        } while (dinero < 3)
    } 

    if (dinero > 3){
        alert(`Tienes un total de ${tiros} jugadas`)
        alert(gacha())
    } else if (dinero === 3 ){
        alert("Puedes realizar una jugada")
        alert(gacha())
    }
    
}