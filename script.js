// Palidroma
// Chiedere all’utente di inserire una parola
const userWord = parseInt (prompt('Inserisci una parola'));
// Creare una funzione per capire se la parola inserita è palindroma













// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//chiedo all'utente di scegliere tra pari e dispari
const userChoice = prompt('Scegli tra pari e dispari');
console.log({userChoice});

if (userChoice === 'pari' || userChoice === 'dipari') {
    //chiedo un numero all'utente e lo salvo in una variabile
    const userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));

    if (userNumber >= 1 && userNumber <= 5) {
        console.log({userNumber});
        //genero un numero random tra 1 e 5 (funzione) e lo salvo in una variabile
        const cpuNumber = getRndInteger(1, 5);
        console.log({cpuNumber});

        const sum = userNumber + cpuNumber;
        console.log({sum});

        //const isSumEvenOrOdd = sum % 2 === 0 //true/false
        const result = isEvenOrOdd(sum) //'pari' 'dispari'
        console.log({result});

        if (userChoice === result) {
            console.log('Utente vince');
        }else {
            console.log('Cpu vince');
        }
    }
}