function langstaTitel(titlar) {
    let longest = titlar[0];
    for (let i = 1; i < titlar.length; i++) {
        if (titlar[i].length > longest.length) {
            longest = titlar[i];
        }
    }
    return longest;
}

const testTitlar = ["Kort", "Mellanlång titel", "En väldigt väldigt lång titel"];
console.log(langstaTitel(testTitlar));
