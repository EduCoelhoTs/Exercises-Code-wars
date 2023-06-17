// desafio semaforo: se o input for red deve retornar green, se for yellow deve retornar red e se for gree deve retornar yellow

const lights = {
    green: 'yellow',
    yellow: 'red',
    red: 'green'
}

const updateLight = (current) => {
    return lights[current]
}

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))