function hamtaTitel(bocker, index) {
    if (index < 0 || index >= bocker.length) {
        return "Fel: Ogiltigt index";
    }
    return bocker[index].titel;
}

const bocker = [
    {titel: "Bok1"}, 
    {titel: "Bok2"}
];

console.log(hamtaTitel(bocker, 0)); // Ska ge "Bok1"
console.log(hamtaTitel(bocker, 5)); // Ska ge felmeddelande
