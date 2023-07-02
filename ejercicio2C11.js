delincuentes = ['Juan', 'Santiago', 'Luis', 'Carlos', 'Miguel', 'Jorge', 'Fernando', 'Pedro', 'Andrés', 'Daniel']
let i 

function detectarDelincuente(listaDelincuentes, i){
    if (listaDelincuentes [i] == 'Juan' || listaDelincuentes [i] == 'Pedro'){
        console.log (`${listaDelincuentes [i]} es el hacker!!`)
    }
}

detectarDelincuente (delincuentes, 3)
detectarDelincuente (delincuentes, 7)

/*este código busca en los indices 3 y 7, que son los números favoritos del hacker, si hay coincidencia 
con los nombres Juan o Pedro*/