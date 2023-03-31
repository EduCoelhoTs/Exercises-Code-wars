function digitPow(number, pow){
    let pot = pow;
    let num = 0;
    let k = 0;
    let nums = number.toString().split('');
    nums.forEach((el)=> { 
        num += Math.pow(el, pow)
        pow++;
    });
    k = num/number;
    if(k === pot) {
        return k;
    } 
    return -1;
}

console.log(digitPow(695,2));