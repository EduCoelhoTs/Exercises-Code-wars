const word = 'Meu nome é Eduardo e eu gosto muito de basquete';

function revertePalavraComMaisDeCincoCar(frase) {
    return frase.split(' ').map(
        palavra =>  palavra.length > 4 ? palavra.split('').reverse().join('') : palavra
    ).join(' ');
}

console.log(revertePalavraComMaisDeCincoCar(word));