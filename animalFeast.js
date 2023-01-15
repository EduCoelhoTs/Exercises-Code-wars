//esta tendo uma festa de animal. Cada animal tem de trazer um prato. A unica regra é que o nome do prato
//tenha a mesma inicial e ultima letra do nome do animal

function animalFeast(animal, dish) {
    const animalLetters = [...animal];
    const dishLetters = [...dish];
    console.log(animalLetters);
    console.log(dishLetters);

    console.log(animalLetters[0]);
    console.log(animalLetters[animal.length]);
    console.log(dishLetters[0]);
    console.log(dishLetters[dish.length]);
    // const haveParty = animalLetters[0] === dishLetters[0] && animalLetters[animalLetters.length] === dishLetters[dishLetters.length]
    console.log(animalLetters[0] === dishLetters[0]);
    console.log(animalLetters[animalLetters.length] === dishLetters[dishLetters.length]);
    // return haveParty;
}



// console.log(animalFeast('gato', 'galaa'));
animalFeast('gato', 'galaa')