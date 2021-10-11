const km = prompt("Quanti chilometri devi percorrere?");
console.log(km);

const age = prompt("Quanti anni hai?");
console.log(age);

var basePrice = (km * 0.21);
console.log(basePrice);

if (age < 18) {
    var finalPrice = (basePrice * 0.8);
}

if (age > 65) {
    var finalPrice = (basePrice * 0.6);
}

if (age >= 18 && age <= 65) {
    var finalPrice = basePrice;
}

var finalPrice = parseFloat(finalPrice).toFixed(2);

console.log(finalPrice + " €")

document.getElementById("ticketCost").innerHTML = "Il costo del tuo biglietto è di " + finalPrice + " €";