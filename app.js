class Bil{
    constructor (brand, color, id){
        this.brand = brand
        this.color = color
        this.id = id
    }
}

let billista = [];

const addbutton = document.getElementById("addbutton");
const brand = document.getElementById("brand");
const color = document.getElementById("color");
const lista_bilar_div = document.getElementById("listabilarDiv");

addbutton.addEventListener("click", addbuttonClick);

function addbuttonClick(){
    

    const now = Date.now()
    const id = now.toString()
    
    //console.log("id=" + id)

    let brandname = brand.value

    console.log(`id= ${id} brand= ${brandname}`)
}