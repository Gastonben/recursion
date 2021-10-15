const lista = [4, 5, 1, 3, 6, 7, 9, 0, 3]
let log = console.log
let par = 0
let impar = 0
let count = 0

function paresEimpares(list) {
  if (list.length === 0) return log(`${par} numeros pares y ${impar} impares`)
    if(list[0] % 2 !== 0){
        impar++;
        }else{
        par++;
    }
  return paresEimpares(list.slice(1))
}
paresEimpares(lista)

//////////////////////////////

function contarElTres(list){
    if(list.length === 0) return log(`el 3 se repite ${count} veces`)
    if(list[0] === 3){
        count++;
    }
    return contarElTres(list.slice(1))
}
contarElTres(lista)

////////////////////////////////

function buscarNum(n,list){
    if(n === list[0]) return log(`Se encontro el ${n}`)
    if(list.length === 0) return log(`No se encontro el ${n} :(`)

    return buscarNum(n, list.slice(1))
}

buscarNum(7, lista)