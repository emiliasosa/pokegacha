let localStoragePokemon = JSON.parse(localStorage.getItem('Pokemon'))


let container = document.getElementById("pokemon_aside_info_cambioHora_btncontainer")
container.addEventListener('click', ()=>{
    let moverFondos = document.getElementById("pokemon_fondo_dia_noche")
    moverFondos.classList.toggle("pokemon_horario_cambio")
    let moverTacho = document.getElementById("pokemon_tacho_div")
    moverTacho.classList.toggle("pokemon_tacho_div")
    container.classList.toggle("pokemon_aside_info_cambioHora_btncontainer-cambio")
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


let agregarAlDom = (idContainer, id)=>{
    let pokemonsContainer = document.getElementById(idContainer)
    let div = document.createElement("div");
    div.id = "element-"+id                   
    div.innerHTML= `<img  class="pokemon_drag_img" src="${i.imagen}" onclick="cardOnePokemon(${i.id})" id="${i.id}"> `                                          
    pokemonsContainer.appendChild(div); 

    eventoDraggable(div)

}

let colocarEvolucion = ()=>{
    const evo = document.getElementById("pokemon_card_evoluciones")
    i.evoluciones.forEach(e => {
        evo.insertAdjacentHTML(
            "beforeend",`<img class="pokemon_card_evoluciones_img" src="${e.imagen_evolucion}")>`)
    });
}

let colocarMovimientos = ()=>{
    const evo = document.getElementById("pokemon_card_movimientos_container")
    i.movimientos.forEach(e => {
        evo.insertAdjacentHTML(
            "beforeend",`
            <div class="pokemon_card_movimiento">
                <p class="pokemon_card_descripcion">${e.nombre} :</p>
                <p class="pokemon_card_descripcion">${e.efecto}</p>
            </div>`)
    });
}


let cardOnePokemon = (id)=>{
    for(i of localStoragePokemon){
        if(i.id == id){
            let nombreUpperCase = i.nombre.toUpperCase()
            let tipoUpperCase = i.tipo.toUpperCase()
        
            let container = document.getElementById("mi_pokemon_card")
            container.style.visibility = "visible"
            let cardCerrar = document.getElementById('mi_pokemon_card');
            cardCerrar.style.opacity = "1"
            cardCerrar.style.transition = "1s"
            container.innerHTML = `
                <div id="one_pokemon_card">
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
                        
                        <div id="pokemon_card_movimientos_container">
                        </div>

                        <div class="pokemon_card_evolucion_container">
                            <div class="pokemon_card_movimiento pokemon_card_movimientos_ttl">
                                <p class="pokemon_card_descripcion--ttl ">EVOLUCIONES</p>
                            </div>
                            <div id="pokemon_card_evoluciones">
                            </div>
                        </div>
                    </div>
                </div>
            `
            coloresPorTipo(i.tipo)
            colocarEvolucion()
            colocarMovimientos()
        }
    }
 
}

let colocarPokemon = ()=>{
    let id = 0;
    for(i of localStoragePokemon){
        
        if(i.tipo.includes("dark") || i.tipo.includes("ghost") || i.tipo.includes("poison") || i.tipo.includes("dragon")){
            agregarAlDom("pokemon_noche_img", id)
        }else{
            agregarAlDom("pokemon_dia_img", id)
        }
        id ++
    }
}

let cerrarCard = () =>{
    let container = document.getElementById('mi_pokemon_card');
    container.addEventListener('click', ()=>{
        let containerCard = document.getElementById('mi_pokemon_card');
        containerCard.style.opacity = "0"
        containerCard.style.transition = "1s"
        containerCard.style.visibility = "hidden"
        
    })
}

colocarPokemon()
cerrarCard()

