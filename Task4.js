order = {
    name: "Первый заказ",
    description: "Вкусный обед",
    cost: 200,
    curr: "RUB",
    company: "GOMOREZKA Yandex Eda",
    date: new Date("04.25.2022")
}

unfilledOrder = {
    name: "Первый заказ",
    company: "GOMOREZKA Yandex Eda",
    date: new Date("04.25.2022")
}

function fullInfo(obj) {
    let { name: orderName = "defName", description: orderDescr = "defDescr", cost: orderCost = 10,
        curr: orderCurr = "defCurr", company: orderCompany = "defCompany", date: orderDate = new Date("11.11.2011") } = obj;
    
        console.log("Название: " + orderName + "\nОписание: " + orderDescr + "\nЦена: "
        + orderCost + "\nВалюта: " + orderCurr + "\nПроизводитель: " + orderCompany + "\nДата: " + orderDate);
}

fullInfo(order);
fullInfo(unfilledOrder);