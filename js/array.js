class Prize{
    constructor(data){
        this.id = data.id
        this.nombre = data.nombre
        this.img = data.img
        this.articulo = data.articulo
        this.cantidad = data.cantidad
        this.categoria = data.categoria
    }


    probabilidad(){    
        let idVer = () =>{
            let num = 0;
            let random = Math.floor(Math.random()*100+1);
            
            if(random < 5) {
                num = 1;
            } else if (random < 20 ) {
                num = 2;
            } else if (random < 40) {
                num = 3;
            } else if (random < 60) {
                num = 4;
            } else {
                num = 5;  
            }
                return num;
        }

        let ver = idVer()
        console.log(ver)
        //let idItem = allPrizes.find((item) => item.id == ver)

        const requestInfo = async ()=>{
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${ver}`)
            const conversion = await result.json()
            let contador = 0;
            
            let obj = conversion.sprites.versions
            let arr = Object.keys(obj).map(function (key) {return [String(key), obj[key]];});
        
            let sprite = arr[4][1]
        
            let ultrafiltrado = Object.keys(sprite).map(function (key) {return [String(key), sprite[key]];});
            console.log(conversion.name)
            console.log(ultrafiltrado[0][1].animated.front_default)

            return `Felicidades, te ganaste ${conversion.name} <img src=" ${ultrafiltrado[0][1].animated.front_default}" > !! `
        }
        console.log(requestInfo())
        return requestInfo()
    }
}




const probabilidad = async()=>{   
    let ver = Math.floor(Math.random()*649+1)
    let descriptionFinal;

    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${ver}`)
    const conversion = await result.json()

    const description = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${ver}`)
    const conversionDescription = await description.json()

    const evolution = await fetch(conversionDescription.evolution_chain.url)
    const conversionEvolution = await evolution.json()

    let evoluciones = []

    if(conversionEvolution.chain.evolves_to.length != 0){
        if(conversionEvolution.chain.evolves_to[0].evolves_to.length != 0 ){
            conversionEvolution.chain.species.name, conversionEvolution.chain.evolves_to[0].species.name,
                            conversionEvolution.chain.evolves_to[0].evolves_to[0].species.name
        }else if(conversionEvolution.chain.evolves_to.length != 0){
            evoluciones.push(conversionEvolution.chain.species.name, conversionEvolution.chain.evolves_to[0].species.name)
        }
    }else{
        evoluciones.push(conversionEvolution.chain.species.name)
    }

    let evolucionesFinales = []

    for (i of evoluciones){
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const conversion = await result.json()

        let evolucion = {
            "imagen_evolucion": conversion.sprites.front_default,
        }

        evolucionesFinales.push(evolucion)
        
    }

    
    for(let i = 0; i < 35; i++){
        if(conversionDescription.flavor_text_entries[i].language.name.includes('es')){
            descriptionFinal = conversionDescription.flavor_text_entries[i].flavor_text
            break
        }     
    }

    let ataquisisimis = []
    let ataquesFinales = []

    for(let i = 0; i < 5; i++){
        const atacks = await fetch(conversion.moves[i].move.url)
        const conversionAtacks = await atacks.json()
        ataquisisimis.push(conversionAtacks) 
    }
 

    for(i of ataquisisimis){
        if(i.flavor_text_entries[15].language.name == 'es'){
            let movimientos = {
                "nombre":  i.names[5].name,
                "precision":  i.accuracy,
                "efecto": i.flavor_text_entries[15].flavor_text,
                "tipo": i.meta.category.name,
                "cantidad": i.pp,
                "poder": i.power,
                "tipo_de_ataque": i.type.name
            }

            ataquesFinales.push(movimientos)
        }else{
            let movimientos = {
                "nombre":  i.names[5].name,
                "precision":  i.accuracy,
                "efecto": i.flavor_text_entries[16].flavor_text,
                "tipo": i.meta.category.name,
                "cantidad": i.pp,
                "poder": i.power,
                "tipo_de_ataque": i.type.name
            }

            ataquesFinales.push(movimientos)
        }
        
        
    }

    let obj = conversion.sprites.versions
    let arr = Object.keys(obj).map(function (key) {return [String(key), obj[key]];});
    
    let sprite = arr[4][1]
    
    let ultrafiltrado = Object.keys(sprite).map(function (key) {return [String(key), sprite[key]];});
    let ultrisimisFiltradisimis = ultrafiltrado[0][1].animated.front_default

    const pokemon = {
        "id": conversion.id,
        "nombre": conversion.name,
        "descripcion": descriptionFinal,
        "tipo": conversion.types[0].type.name,
        "imagen": ultrisimisFiltradisimis,
        "imagen_card": conversion.sprites.other.dream_world.front_default,
        "movimientos": ataquesFinales,
        "hp": conversion.stats[0].base_stat,
        "ataque": conversion.stats[1].base_stat,
        "peso": conversion.weight,
        "evoluciones": evolucionesFinales
    }

    let pokemons =[]
    pokemons.push(pokemon)

    let recoveredData = localStorage.getItem('Pokemon')
    if(recoveredData == null){
        localStorage.setItem('Pokemon', JSON.stringify(pokemons))
    } else {
        let data = JSON.parse(recoveredData)
        let newData = pokemon
        data.push(newData)
        localStorage.setItem('Pokemon', JSON.stringify(data))
    }


    let premioconteiner = document.getElementById('premios')
    premioconteiner.innerHTML = `
    <img  class="premios_img" src="${ultrisimisFiltradisimis}"> </div>  `
    
}