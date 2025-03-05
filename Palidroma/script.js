// Palidroma
// Chiedere all’utente di inserire una parola
const userWord = parseInt (prompt('Inserisci una parola'));
// Creare una funzione per capire se la parola inserita è palindroma


const isWordPalindrome = isPalindrome(userWord);

if(isWordPalindrome) {
    console.log('Sono una parola palindroma');
}else {
    console.log('Non sono una parola palindroma');
}

//determina se una parola è palindroma
function isPalindrome(input) {
    
    //faccio in modo che le maiuscole diventino minuscole, non venendo quindi considerate nel conteggio
    const word = input.toLowerCase();

    //trasformo la parola in un array(perchè altrimenti non posso usare il reverse) e poi la faccio ritornare una stringa
    const reverse = word.split('').reverse().join('');

    //condizione di vero o falso confrontando word con reverse
    if(word === reverse) {
        return true;
    }else {
        return false;
    }
}







