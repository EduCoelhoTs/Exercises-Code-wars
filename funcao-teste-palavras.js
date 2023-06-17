function teste() {
    console.log('a é menor que 10')
}

function teste2() {
    console.log('a é maior que 10')
}

let a = 11;

function executaFuncao(a) {
    if (a < 10) {
        return teste();
    } else {
        return teste2();
    }
}

executaFuncao(a);