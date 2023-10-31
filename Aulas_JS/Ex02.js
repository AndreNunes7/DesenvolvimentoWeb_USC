// Ex 02


const arrayAmigos = [];
arrayAmigos.unshift("Avelino", "Guerra", "Rangel", "Guerra")


function excluirIndiceArray(array, nome){
   
    let procura = array.indexOf(nome);
    
    if (procura != -1){
        let amigos = array.splice(procura,1);
        return amigos;
    }
    else{
        return false;
    }

    

}



console.log(excluirIndiceArray(arrayAmigos, "Rangel"))