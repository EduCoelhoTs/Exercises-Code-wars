function hero(bullets, dragons) {
    const isPossibleKillTheDragon = bullets === 2 * dragons || bullets >= 2 * dragons;
    return isPossibleKillTheDragon;
}

console.log(hero(21,10));