function hittaBilligasteBok(bocker) {
    let billigaste = bocker[0];
    for (let i = 1; i < bocker.length; i++) {
        if (bocker[i].pris < billigaste.pris) {
            billigaste = bocker[i];
        }
    }
    return billigaste;
}

const bocker = [
    {titel: "Bok A", pris: 100},
    {titel: "Bok B", pris: 80},
    {titel: "Bok C", pris: 120}
];

const billigast = hittaBilligasteBok(bocker);
console.log(`Billigaste boken är "${billigast.titel}" och kostar ${billigast.pris} kr.`);
