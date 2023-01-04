const firstCity = {
    name: 'Гибралтар',
    foundationDate: new Date("04.11.1713"),
    population: 34000,
    country: "Великобритания",
    showFullInformation,
}

const secondCity = {
    name: 'Токио',
    foundationDate: new Date("07.01.1943"),
    population: 14047594,
    country: "Япония",
    showFullInformation,
}

function compareNames(cityFirstName, citySecondName) {
    let str = "Название города " + cityFirstName;

    if (cityFirstName.length > citySecondName.length) {
        str += " длиннее ";
    } else {
        str += " короче ";
    }

    str += "названия города " + citySecondName;
    console.log(str);
}

function compareFoundDates(cityFirst, citySecond) {
    let str = "Город " + cityFirst.name + " был основан";

    if (cityFirst.foundationDate < citySecond.foundationDate) {
        str += " раньше ";
    } else {
        str += " позже ";
    }

    str += "города " + citySecond.name;
    console.log(str);
}

function comparePopulation(cityFirst, citySecond) {
    let str = "Численность населения в городе " + cityFirst.name;

    if (cityFirst.population > citySecond.population) {
        str += " больше ";
    } else {
        str += " меньше ";
    }

    str += "чем в городе " + citySecond.name;
    console.log(str);
}

function showFullInformation() {
    console.log("Город " + this.name + " был основан в "
        + this.foundationDate.getDate() + "." + (this.foundationDate.getMonth() + 1) + "." + this.foundationDate.getFullYear()
        + " и расположен в стране " + this.country + ", численность населения города составляет " + this.population + " человек.");
}

// comparePopulation(firstCity, secondCity);
// comparePopulation(secondCity, firstCity);

// compareNames(firstCity.name, secondCity.name);
// compareNames(secondCity.name, firstCity.name);

// compareFoundDates(firstCity, secondCity);
// compareFoundDates(secondCity, firstCity);

// firstCity.showFullInformation();
// secondCity.showFullInformation();