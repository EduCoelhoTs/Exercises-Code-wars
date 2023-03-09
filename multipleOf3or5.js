function solution(number){
    if(number < 0 ) {
        return 0;
    }

    const array = [];
    for (let i = 0; i < number; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            array.push(i);
        }
    }
    console.log(array);

    return array.reduce(
        (cc, el) => {
           return cc + el
        }, 0 
    )
}

console.log(solution(10))