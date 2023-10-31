//Ex 01 - forma 01 de fazer

function procuraAmigo(procuraAmigo = [], nome){

    let procura = procuraAmigo.indexOf(nome)
    return `O elemento ${nome} esta na posição: ` + procura

}





console.log(procuraAmigo(["Rangel", "francisco"], "Rangel"))






// Forma 02 de fazer 


const arrayAmigos = [];
arrayAmigos.unshift("Avelino", "Guerra", "Rangel", "Guerra")


function procuraAmigo(procuraAmigo, nome){

    let procura = procuraAmigo.indexOf(nome)
    return `O elemento ${nome} esta na posição: ` + procura

}





console.log(procuraAmigo( arrayAmigos,"Rangel"))