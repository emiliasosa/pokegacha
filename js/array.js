class Object{
    constructor(data){
        this.id = data.id
        this.nombre = data.nombre
        this.img = data.img
        this.articulo = data.articulo
        this.probabilidad = data.probabilidad
        this.cantidad = data.cantidad
        this.categoria = data.categoria
    }
    info(){
        return `${this.img} <br> Felicidades, te ganaste ${this.articulo} ${this.nombre} !! `
    }
    probabilidad(){

    }
}

const allObjetc = [];

const gasha1 = new Object ({id: 1, nombre: "Anana", articulo: "un", probabilidad: 40, cantidad: 10, categoria: "frutas"})
const gasha2 = new Object ({id: 2, nombre: "Sandia", articulo: "una", probabilidad: 70, cantidad: 15, categoria: "frutas"})
const gasha3 = new Object ({id: 3, nombre: "Naranja", articulo: "una", probabilidad: 80, cantidad: 20, categoria: "frutas"})

allObjetc.push(gasha1, gasha2, gasha3)