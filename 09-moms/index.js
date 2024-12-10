function beräknaMoms(pris, momsSats) {
    return pris * (1 + momsSats);
}

const resultat = beräknaMoms(100, 0.25);
console.log(resultat);
