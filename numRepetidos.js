
//crie uma função, que retorna um array, que representa a diferença entre 2 arrays
function arrayDiff(a, b) {
  const result = [];
  a.forEach(
    el => b.includes(el) ? result : result.push(el)
  )
  return result
}

console.log(arrayDiff([1,2,3], [2]))

