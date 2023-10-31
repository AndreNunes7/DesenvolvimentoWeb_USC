const array = ["Rangel", "Rangel", "Claudio", "Kayky"]


function buscaNome(array, nome){
    let procura = array.includes(nome)
    return procura
}

console.log(buscaNome(array,"Rangel"))