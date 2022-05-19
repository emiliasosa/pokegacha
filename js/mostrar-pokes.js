let localStoragePokemon = JSON.parse(localStorage.getItem('Pokemon'))


let container = document.getElementById("pokemon_dropzone_info_cambioHora_btncontainer")
container.addEventListener('click', ()=>{
    let moverFondos = document.getElementById("pokemon_fondo_dia_noche")
    moverFondos.classList.toggle("pokemon_horario_cambio")
    container.classList.toggle("pokemon_dropzone_info_cambioHora_btncontainer-cambio")
    cardCerrar.style.visibility = "hidden"
})


let coloresPorTipo = (tipo)=>{
    let container = document.getElementById("pokemon_card_descripcion_container_tipo")
    
    if(tipo == "ground" || tipo == "rock" || tipo == "normal"){
        container.style.backgroundColor = "#ae9556"
    }else if(tipo == "dark" || tipo == "steel"){
        container.style.backgroundColor = "#9e9e9e"
    }else if(tipo == "fairy" || tipo == "psychic"){
        container.style.backgroundColor = "#e3afe6"
    }else if(tipo == "dragon" || tipo == "ice"){
        container.style.backgroundColor = "#afcde6"
    }else if(tipo == "water" || tipo == "flying"){
            container.style.backgroundColor = "#9e9be2"
    }else if(tipo == "ghost" || tipo == "poison"){
        container.style.backgroundColor = "#a964bd"
    }else if(tipo == "bug" || tipo == "grass"){
        container.style.backgroundColor = "#7cc68a"
    }else if(tipo == "fire" || tipo == "fighting"){
        container.style.backgroundColor = "#d62f2f"
    }else{
        container.style.backgroundColor = "#d5ed4b"
    }

    if(i.tipo.length > 5){
        document.getElementById("pokemon_card_descripcion-tipo").style.letterSpacing = "0.2rem"
    }
}

let agregarAlDom = (id)=>{
    let pokemonsContainer = document.getElementById(id)
    let div = document.createElement("div");                      
    div.innerHTML= `<img  class="pokemon_muestra_img" src="${i.imagen}" onclick="cardOnePokemon(${i.id})"> `                                            
    pokemonsContainer.appendChild(div); 
}

let colocarEvolucion = (opcion)=>{
    for(j of opcion){
        `<img  class="pokemon_card_img" src="${i.evoluciones[j].imagen_evolucion}")>`
    }
}




let cardOnePokemon = (id)=>{
    cardCerrar.style.visibility = "visible"
    
    for(i of localStoragePokemon){
        if(i.id == id){
            let nombreUpperCase = i.nombre.toUpperCase()
            let tipoUpperCase = i.tipo.toUpperCase()
        
            

            let container = document.getElementById("mi_pokemon_card")
            container.innerHTML = `
            <div class="one_pokemon_card">
                <div class="pokemon_card_principal">
                    <h3 class="pokemon_card_ttl">${nombreUpperCase}</h3>
                    <img  class="pokemon_card_img" src="${i.imagen_card}")>
                    <div id="pokemon_card_descripcion_container_tipo">
                         <p id="pokemon_card_descripcion-tipo"> ${tipoUpperCase}</p>
                    </div>
                    <p class="pokemon_card_descripcion-descripcion">Peso: ${i.peso} gramos</p>
                    <p class="pokemon_card_descripcion-descripcion">${i.descripcion}</h3>
                </div>
               
                <div id="pokemon_card_movimientos">
                    <div class="pokemon_card_movimiento pokemon_card_movimientos_ttl">
                        <p class="pokemon_card_descripcion--ttl ">MOVIMIENTOS</p>
                    </div>
                    
                    <div class="pokemon_card_movimiento">
                        <p class="pokemon_card_descripcion">${i.movimientos[0].nombre} :</p>
                        <p class="pokemon_card_descripcion">${i.movimientos[0].efecto}</p>
                    </div>
                    <div class="pokemon_card_movimiento">
                        <p class="pokemon_card_descripcion">${i.movimientos[1].nombre} :</p>
                        <p class="pokemon_card_descripcion">${i.movimientos[1].efecto}</p>
                    </div>
                    <div class="pokemon_card_movimiento">
                        <p class="pokemon_card_descripcion">${i.movimientos[2].nombre} :</p>
                        <p class="pokemon_card_descripcion">${i.movimientos[2].efecto}</p>
                    </div>
                    <div class="pokemon_card_movimiento">
                        <p class="pokemon_card_descripcion">${i.movimientos[3].nombre} :</p>
                        <p class="pokemon_card_descripcion">${i.movimientos[3].efecto}</p>
                    </div>
                    <div class="pokemon_card_movimiento">
                        <p class="pokemon_card_descripcion">${i.movimientos[4].nombre} :</p>
                        <p class="pokemon_card_descripcion">${i.movimientos[4].efecto}</p>
                    </div>

                    
                    <div class="pokemon_card_movimiento pokemon_card_movimientos_ttl">
                        <p class="pokemon_card_descripcion--ttl ">EVOLUCIONES</p>
                    </div>
                    <div id="pokemon_card_evoluciones">
                        <img  class="pokemon_card_img" src="${i.evoluciones[0].imagen_evolucion}")>
                        <img  class="pokemon_card_img" src="${i.evoluciones[1].imagen_evolucion}")>
                    </div>
                </div>
            </div>
            `
            coloresPorTipo(i.tipo)
        }
    }
    
}

let colocarPokemon = ()=>{
    for(i of localStoragePokemon){
        if(i.tipo.includes("dark") || i.tipo.includes("ghost") || i.tipo.includes("poison") || i.tipo.includes("dragon")){
            agregarAlDom("pokemon_noche_img")
        }else{
            agregarAlDom("pokemon_dia_img")
        }
    }
}

colocarPokemon()

let cardCerrar = document.getElementById('mi_pokemon_card');
cardCerrar.addEventListener('click', ()=>{
    cardCerrar.style.visibility = "hidden"
})