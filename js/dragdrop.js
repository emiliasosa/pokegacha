let dragElement;

let eventoDropzone = (divContenedor) =>{
    let dropzone = document.getElementById(divContenedor)
    dropzone.ondragover = (event)=>{
        event.preventDefault()
    }
    dropzone.ondrop = (event)=>{

        let id = event.dataTransfer.getData("id")
        let element = document.getElementById(id)

        dropzone.appendChild(element)

        if(divContenedor == "pokemon_tacho_div"){
            let idFinal = parseInt(id)

            let pokes =  JSON.parse(localStorage.getItem('Pokemon'))
            let pokemon = pokes.filter(item => item.id !== idFinal);

            for(i of pokes){
                let nombreUpperCase = i.nombre.toUpperCase()

                if(i.id == idFinal){
                    let container = document.getElementById("pokemon_liberado_card")
                    container.innerHTML = `
                        <div class="pokemon_modal_liberar">
                            <p>Liberaste a ${nombreUpperCase}!</p>
                        </div>`
                }
            }

            setTimeout(()=>{
                localStorage.setItem('Pokemon',JSON.stringify(pokemon));
                location.reload()
            }, 1500)
        }
            
    }
    
}
let pokes =  JSON.parse(localStorage.getItem('Pokemon'))

let eventoDraggable = (element) => {
    element.draggable = true
    
    element.ondragstart = (event)=>{
        event.dataTransfer.setData("id",event.target.id)
    }

    element.ondrag = ()=>{
        element.style.opacity = 0
    }
    element.ondragend = ()=>{
        element.style.opacity=1
    }
}


eventoDropzone("pokemon_dropzone")
eventoDropzone("pokemon_tacho_div")
eventoDropzone("pokemon_dia_img")
eventoDropzone("pokemon_noche_img")
