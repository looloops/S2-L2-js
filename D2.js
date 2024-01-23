/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 25;
const num2 = 17;

if (num1 > num2) {
  console.log(`Il numero più grande è ${num1}`);
} else {
  console.log(`Il numero più grande è ${num2}`);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (num1 !== 5) {
  console.log(`not equal`);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (num1 % 5 == false) {
  console.log(`divisibile per 5`);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8) {
  console.log("Il valore di uno di essi è 8 oppure la loro addizione/sottrazione è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 50;
const shippingCost = 10;

if (totalShoppingCart <= 50) {
  console.log(
    `Il totale è di ${totalShoppingCart} + ${shippingCost} di spedizione. Per ottenere la spedizione gratuita aggiungi ${
      51 - totalShoppingCart
    } euro al tuo carrello`
  );
} else {
  console.log("Complimenti hai ottento la spedizione gratuita!");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = 20;

totalShoppingCart = totalShoppingCart - (totalShoppingCart * blackFriday) / 100;

if (totalShoppingCart <= 50) {
  console.log(
    `E' Black Friday!! Il 20% di sconto è stato applicato. Il totale è di ${totalShoppingCart} + ${shippingCost} di spedizione. Per ottenere anche la spedizione gratuita aggiungi ${
      51 - totalShoppingCart
    } euro al tuo carrello`
  );
} else {
  console.log("E' Black Friday!! Il 20% di sconto è stato applicato. Complimenti hai ottento la spedizione gratuita!");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 2;
let b = 6;
let c = 7;
let ordinata = [];

if (a > b) {
  if (b > c) {
    ordinata = [a, b, c];
    console.log(ordinata);
  } else {
    ordinata = [a, c, b];
    console.log(ordinata);
  }
} else if (b > c) {
  if (a > c) {
    ordinata = [b, a, c];
    console.log(ordinata);
  } else {
    ordinata = [b, c, a];
    console.log(ordinata);
  }
} else {
  if (c > b) {
    ordinata = [c, b, a];
    console.log(ordinata);
  } else {
    ordinata = [c, a, b];
    console.log(ordinata);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
