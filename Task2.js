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

const thirdCity = {}

for (let key in firstCity) {
    thirdCity[key] = firstCity[key];
}
thirdCity.name = 'Орегон';
thirdCity.foundationDate = new Date("02.14.1859");

const fourthCity = {}
Object.assign(fourthCity, secondCity);
fourthCity.name = 'Чикаго';
fourthCity.foundationDate = new Date("08.12.1833");

function showAllCitiesInformation(){
    firstCity.showFullInformation();
    secondCity.showFullInformation();
    thirdCity.showFullInformation();
    fourthCity.showFullInformation();
}

showAllCitiesInformation();

function showFullInformation() {
    console.log("Город " + this.name + " был основан в "
        + this.foundationDate.getDate() + "." + (this.foundationDate.getMonth() + 1) + "." + this.foundationDate.getFullYear()
        + " и расположен в стране " + this.country + ", численность населения города составляет " + this.population + " человек.");
}