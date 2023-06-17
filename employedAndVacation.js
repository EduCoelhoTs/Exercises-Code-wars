// A função deve retornar true se employed === true e vacatio === false => Todos os outros cenarios devem retornar false

function setAlarm(employed, vacation) {
    return employed && !vacation
}

console.log(setAlarm(true, false));
console.log(setAlarm(true, true));
console.log(setAlarm(false, false));
console.log(setAlarm(false, true));