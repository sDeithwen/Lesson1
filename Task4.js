order = {
    name: "Первый заказ",
    description: "Вкусный обед",
    cost: 200,
    curr: "RUB",
    company: "Yandex Eda",
    date: new Date("04.25.2022")
}

unfilledOrder = {
    name: "Первый заказ",
    company: "Yandex Eda",
    date: new Date("04.25.2022")
}

function fullInfo(obj) {
    function checkOrder() {
        if (!obj.name || !obj.description || !obj.cost || obj.cost < 0 || !obj.curr || !obj.company || !obj.date)
            return false;
        return true;
    }

    if (checkOrder()) {
        let { name: orderName = "defName", description: orderDescr = "defDescr", cost: orderCost = 10,
            curr: orderCurr = "defCurr", company: orderCompany = "defCompany", date: orderDate = new Date("11.11.2011") } = obj;
        console.log("Название: " + orderName + "\nОписание: " + orderDescr + "\nЦена: "
            + orderCost + "\nВалюта: " + orderCurr + "\nПроизводитель: " + orderCompany + "\nДата: " + orderDate);
    } else
        console.log("Error: unfilled order");
}

fullInfo(order);
fullInfo(unfilledOrder);