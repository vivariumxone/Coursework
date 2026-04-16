// @ts-check
/** @type {import('./types').Enemy} */


const Enemy = {
    name: 'Красный еж',
    health: 20,
    maxHealth: 20,
    damage: 2,
}
/** @type {import('./types').Player} */
const Player = {
    name: '',
    maney: 100,
    lvl: 1,
    health: 20,
    maxHealth: 100,
    damage: 4,
    radiation: 0,
    inventory: [
        {id: 'needle', count: 1},
        {id: 'medkit', count: 2},
        {id: 'guitar', count: 1},
    ],
}   

// предметы игры
const items = {
    'needle': {name: 'Иголка', price: 5},
    'medkit': { name: 'Аптечка', price: 30},
    'guitar': { name: 'Гитара', price: 200},

}

// диалоги игры
const Dialog = {
    dialoguesPlayed: {
        darklane: false,
    }
}
