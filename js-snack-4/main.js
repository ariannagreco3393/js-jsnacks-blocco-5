/* 
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const colori = ['rosso', 'giallo', 'blu']
const forme = ['quadrato', 'rombo', 'triangolo']

function mergeArray(array1, array2) {
    const newArray = []

    if (array1.length === array2.length) {
        array1.forEach((element, index) => {
            newArray.push(element)
            newArray.push(array2[index])
        })
        return newArray

    } 
}


console.log(mergeArray(colori,forme));

// sfrutto index per selezionarne un altro nell altro array

