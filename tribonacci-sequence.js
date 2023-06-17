function tribonacci(signature, n) {
    if(n <= 3 ) {
      return signature.slice(0, n);
    }else {
      const s = tribonacci(signature, n-1);
      return [...s, s[s.length -1 ] + s[s.length - 2] + s[s.length - 3]];
    }
   }

console.log(tribonacci([1, 2,3,4], 5));
