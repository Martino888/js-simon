// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
//  (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine,
//  uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let listaCasuali = [];
let btn = document.getElementById('btn');
let inputNum;
let punteggio;




btn.addEventListener('click', function () {
    casuali();
    console.log(listaCasuali);
    setTimeout(function () {
        punteggio = 0;
        document.getElementById("casuali").innerHTML = '';
        document.getElementById("risultato").innerHTML = ''
        for (let i = 0; i < document.getElementById("quanti").value; i++) {
            inputNum = prompt("inserisci i numeri in sequenza ");
            if (inputNum == listaCasuali[i]) {
                punteggio++;
                document.getElementById('risultato').innerHTML = ("esatti: " + listaCasuali[i]);
                console.log("esatti: " + listaCasuali[i]);
            }else if(inputNum != listaCasuali[i]) {
                punteggio--;
                document.getElementById('risultato').innerHTML = ("sbagliati: " + listaCasuali[i]);
                console.log("sbagliati: " + listaCasuali[i]);
            }
        }
    }, 3000)
})


function casuali() {
    n = parseInt(document.getElementById("quanti").value);
    if (n > 0 && n <= 100) {
        str = "";
        for (i = 0; i < n; i++) {
            num = Math.round(Math.random() * 100 + 1);
            listaCasuali.push(num);
            if (i > 0) {
                str += ", ";
            }
            str += num;
        }
        document.getElementById("casuali").innerHTML = "Hai 30' secondi per memorizarli: " + str;
    } else {
        document.getElementById("casuali").innerHTML = "Inserisci un numero maggiore di 0 e inferiore a 100";
    }
}