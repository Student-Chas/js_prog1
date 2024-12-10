function sorteraBockerEfterPris(bocker) {
    return bocker.slice().sort((a, b) => a.pris - b.pris);
}

const bocker = [
    {titel: "Dyr bok", pris: 300},
    {titel: "Billig bok", pris: 50},
    {titel: "Mellanpris bok", pris: 150}
];

const sorterade = sorteraBockerEfterPris(bocker);
for (const bok of sorterade) {
    console.log(bok.titel + ": " + bok.pris);
}
