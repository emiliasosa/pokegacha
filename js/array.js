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
        let idItem = allPrizes.find((item) => item.id == ver)

        return `Felicidades, te ganaste ${idItem.articulo} ${idItem.nombre} !! `
        
    }
}

const allPrizes = [];




//let buscador = prompt("Que categoria estas buscando?")

const gasha1 = new Prize ({id: 1, nombre: "Anana", articulo: "un", img: 40, cantidad: 10, categoria: "frutas"})
const gasha2 = new Prize ({id: 2, nombre: "Sandia", articulo: "una", img: 50, cantidad: 15, categoria: "frutas"})
const gasha3 = new Prize ({id: 3, nombre: "Naranja", articulo: "una", img: 70, cantidad: 20, categoria: "frutas"})
const gasha4 = new Prize ({id: 4, nombre: "Frutilla", articulo: "una", img: 80, cantidad: 15, categoria: "frutas"})
const gasha5 = new Prize ({id: 5, nombre: "Mandarina", articulo: "una", img: 90, cantidad: 20, categoria: "frutas"})
const gasha6 = new Prize ({id: 1, nombre: "Goku", articulo: "a", img: 40, cantidad: 10, categoria: "dragonball"})
const gasha7 = new Prize ({id: 2, nombre: "Trunks", articulo: "a", img: 50, cantidad: 15, categoria: "dragonball"})
const gasha8 = new Prize ({id: 3, nombre: "Bulma", articulo: "a", img: 70, cantidad: 20, categoria: "dragonball"})
const gasha9 = new Prize ({id: 4, nombre: "Vegeta", articulo: "a", img: 80, cantidad: 15, categoria: "dragonball"})
const gasha10 = new Prize ({id: 5, nombre: "Gohan", articulo: "a", img: 90, cantidad: 20, categoria: "dragonball"})

allPrizes.push(gasha1, gasha2, gasha3, gasha4, gasha5, gasha6, gasha7, gasha8, gasha9, gasha10)

//const categoriasFiltradas = allObjetc.filter((item) => item.categoria.includes(buscador));

//let premios = JSON.parse(localStorage.setItem('Premios', mostrarPremio()))
