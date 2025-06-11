const listaFrases = ['Hola me llamo BMO', 'Me gusta comer', 'Me gusta ir al GYM', 'Me gusta jugar videojuegos', 'WEOW']

const creadorFrases = (arr) =>{
    let newLista = []
    let indiceRandom
    for(let i of listaFrases){
        indiceRandom = Math.floor(Math.random()*5)
        newLista.push(arr[indiceRandom])
    }
    return newLista.join(" ")
}

console.log(creadorFrases(listaFrases))