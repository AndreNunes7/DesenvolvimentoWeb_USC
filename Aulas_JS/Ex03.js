// Ex 03 




const array = ["Rangel", "Rangel", "Claudio", "Kayky"]



function apagarElementos(arr=[], elem){

    let pos = arr.indexOf(elem)
    
    while (pos != -1) {
        arr.Splice(pos, 1)
        let pos = arr.indexOf(elem)
    }
    return arr
    
}


  


console.log(apagarElementos(array, "Rangel"))
