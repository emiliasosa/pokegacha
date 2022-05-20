import {obtenerPokemon} from "./pokemon.js"

setTimeout(()=>{
    let divHidden = document.getElementById("hero_video_texto")
    divHidden.style.visibility = "visible"
},12500)

window.addEventListener("scroll", ()=>{
    let ubicacion = document.getElementById("gacha_profesor_txt")
    let progreso = ()=>{
        let scroll = document.documentElement.scrollTop;
        let heigh = document.documentElement.scrollHeight - document.documentElement.clientHeight

        let progreso = (scroll/heigh)*100
        return progreso
    }

    if(progreso() > 32 && progreso() < 58){
        ubicacion.style.animation = "movertxt 15s alternate infinite"
    }else{
        ubicacion.style.animation = ""
    }
    
} )

let visibilidad = (id, visibilidad, id2, visibilidad2)=>{
    document.getElementById(id).style.visibility = visibilidad
    document.getElementById(id2).style.visibility = visibilidad2
}

let retraso = ()=>{
    setTimeout(() => {
        document.getElementById('gacha_function_img_img-2').style.visibility = 'hidden'
    }, 200)
}


let premiosC = document.getElementById("premios_container");
premiosC.onclick = ()=>{
    visibilidad('premios_container', 'hidden', 'premios_img_pkba', 'hidden')
    location.reload()
}

let solicitarPago = (e) =>{
    e.preventDefault();
    let formulario = e.target
    
    dinero = parseInt(formulario.children[0].value);
    
    if(dinero % 3 == 0 && dinero != 0){
        jugadasInicial = dinero / 3; 
        totalDeJugadas += jugadasInicial
        JSON.stringify(localStorage.setItem('Jugadas', totalDeJugadas))
        visibilidad('gacha_img_pikachu2', 'hidden', 'gacha_img_pikachu1', 'visible')
        document.getElementById('gacha_function_error').innerHTML = ``;
        document.getElementById('gacha_function_play').innerHTML = `Tienes un total de <span class="premios_txt-nombre">${totalDeJugadas}</span> jugadas`;
    }else{
        visibilidad('gacha_img_pikachu1', 'hidden', 'gacha_img_pikachu2', 'visible')
        document.getElementById('gacha_function_error').innerHTML = `<p class="premios_txt premios_txt-error">Dinero insuficiente, ingrese mas dinero</p>`;
    }
}

let mostrarPremio = () =>{
    let pokeCerrada = document.getElementById("premios_img_pkbc")

    let premioConteiner = document.getElementById('premios_container')
    premioConteiner.style.visibility = "visible"
    let premio = document.getElementById('premios')
    premio.innerHTML = ""
    
    pokeCerrada.style.visibility =  "visible"
    pokeCerrada.style.animation =  "pkbc 5s infinite"

    setTimeout(() => {
        obtenerPokemon()
    }, 2800)

    setTimeout(() => {
        visibilidad('premios_img_pkbc', 'hidden', 'premios_img_pkba', 'visible')
    }, 5000)
};

let gacha = (e) => {
    e.preventDefault();
    document.getElementById('gacha_function_img_img-2').style.visibility = 'hidden'
    if(1 <= totalDeJugadas) {
        document.getElementById('gacha_function_error').innerHTML = ``;
        mostrarPremio()
        totalDeJugadas -= 1
        
        document.getElementById('gacha_function_img_img-2').style.visibility = 'visible'
        retraso()
        visibilidad('gacha_img_pikachu2', 'hidden', 'gacha_img_pikachu1', 'visible')
        document.getElementById('gacha_function_play').innerHTML = `Tienes un total de <span class="premios_txt-nombre">${totalDeJugadas}</span> jugadas`;
        
    }else{
        document.getElementById('gacha_function_img_img-2').style.visibility = 'visible'
        retraso()
        visibilidad('gacha_img_pikachu1', 'hidden', 'gacha_img_pikachu2', 'visible')
        document.getElementById('premios_container').style.visibility = 'hidden';
        document.getElementById('gacha_function_error').innerHTML = `<p class="premios_txt premios_txt-error">No tienes jugadas! Ingresa dinero para tener jugadas.</p>`;

    }
    JSON.stringify(localStorage.setItem('Jugadas', totalDeJugadas))
    
}


let totalDeJugadas = JSON.parse(localStorage.getItem('Jugadas'));
let jugadasInicial = 0;
let dinero = 0;

export {totalDeJugadas, gacha, solicitarPago}
