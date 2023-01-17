function alphabetPosition(text) {
    const alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

    const input = text.toLowerCase();
    const response = [];
    const data = input.split('').filter(el =>  el !== ' ' && alphabetLetters.includes(el));
    console.log(data);
    data.forEach(el => {
        response.push(alphabetLetters.indexOf(el) + 1);
    }) 

    return response.toString().split(',').join(' ');
}



console.log(alphabetPosition('The sunset sets at twelve o clock.'));