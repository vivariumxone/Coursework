// @ts-check
/** @type {import('./types').Player} */
const Player = {
    name: '',
    many: 100,
    lvl: 1,
    health: 100,
    maxHealth: 100,
    damage: 4,
    radiation: 0,
    inventory: [],
    map:() => desert()
}

const Enemy = {
    name: 'Красный еж',
    health: 20,
    maxHealth: 20,
    damage: 2,
}
