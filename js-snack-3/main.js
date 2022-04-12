/* 
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/



function reverse(string) {
    const splString = string.split("")
    const revString = splString.reverse()
    console.log(revString);
    return revString.join("")
}
console.log(reverse('ciao'));

//versione abbreviata

function oppositeWord(string) {
    return string.split("").reverse().join("")
}

console.log(oppositeWord('ciao'));