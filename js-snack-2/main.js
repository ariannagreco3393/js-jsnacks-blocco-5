/* 
SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [
    {
        varieta: 'faenza',
        peso: 10,
        lunghezza: 10
    },
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 50,
        lunghezza: 6
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 8
    },
    {
        varieta: 'faenza',
        peso: 25,
        lunghezza: 10
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 25
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 30
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 45
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 15
    }
]

const lunghezza_15 = zucchine.filter((zucchina) => zucchina.lunghezza < 15) 
console.log(lunghezza_15);

const lunghezza_over_15 = zucchine.filter((zucchina) => zucchina.lunghezza > 15) 
console.log(lunghezza_over_15);

//fare la somma dei pesi dell array lunghezza_15

let sum = 0
lunghezza_15.forEach((zucchina) => {
    sum += zucchina.peso
})
console.log(sum);

//fare la somma dei pesi dell array lunghezza_over_15

let somma = 0
lunghezza_over_15.forEach((zucchina) => {
    somma += zucchina.peso
})
console.log(somma);