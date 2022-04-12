/* 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

function oppositeWord(string) {
    return string.split("").reverse().join("")
}

console.log(oppositeWord('ciao'));