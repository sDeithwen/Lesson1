const city1 = {
    name: 'Гибралтар1',
    foundationDate: new Date("04.11.1713"),
    population: 34000,
    country: "Великобритания1",
}

const city2 = {
    name: 'Токио2',
    foundationDate: new Date("07.01.1943"),
    population: 14047594,
    country: "Япония2",
}

const city3 = {
    name: 'Гибралтар3',
    foundationDate: new Date("06.21.1713"),
    population: 1749069,
    country: "Великобритания3",
}

const city4 = {
    name: 'Токио4',
    foundationDate: new Date("05.25.1943"),
    population: 2521140,
    country: "Япония4",
}

const city5 = {
    name: 'Гибралтар5',
    foundationDate: new Date("01.14.1713"),
    population: 1382799,
    country: "Великобритания5",
}

const city6 = {
    name: 'Токио6',
    foundationDate: new Date("11.10.1943"),
    population: 1976313,
    country: "Япония6",
}

let cites = [city1, city2, city3, city4, city5, city6];
console.log(cites);

function sortByPopulation(cites) {
    cites.sort((a, b) => a.population - b.population);
}

sortByPopulation(cites);
console.log(cites);