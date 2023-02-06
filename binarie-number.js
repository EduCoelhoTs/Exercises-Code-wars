function binaryToDecimal(number) {
   let newNumber = number.toString().split('');
   let result = 0;
   for (let i = 0; i < newNumber.length; i++) {
    result += parseInt(newNumber[i]*(Math.pow(2, i)));
   }

   return result;
}

console.log(binaryToDecimal(1001));


function decimalToBinary(number) {
    let result = 1;
    let quociente = number;
    if(number >= 1){
    while (quociente > 1) {
        if (quociente % 2 === 1) {
            result += 1;
        }

        quociente = Math.floor(quociente / 2);
    }
    return result;
    } if (number === 0){
        return 0;
    } else {
        return "numero nao pode ser negativo"
    } 
    
}

console.log(decimalToBinary(-2))

//Outra forma de fazer:

export function countBits(n) {
    return n.toString(2).split('').filter(c => c === '1').length
  }

//toString(2) => o argumento toString(argumento) pega a base;