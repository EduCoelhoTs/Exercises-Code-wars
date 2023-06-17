// // return masked string
// function maskify(cc) {
//     const word = cc.split('');
//     const newWord = [];
//     word.forEach((char, i) => {
//         if (i < word.length - 4) { 
//             newWord.push('#');
//         } else {
//             newWord.push(char);
//         }
//     });
//     return newWord.join('');
// }

console.log(maskify('12345678'))

//outras soluções:

// card numbers is good
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

//slice, pega os 4 ultimos => padstart completa o restante com '#';

// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }