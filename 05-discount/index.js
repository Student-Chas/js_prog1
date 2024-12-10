const prisPerBok = 100;
const antalBocker = 3;
let totalPris = prisPerBok * antalBocker;

if (antalBocker > 2) {
    totalPris = totalPris * 0.9;
}
console.log("Pris efter ev rabatt: " + totalPris + " kr");
