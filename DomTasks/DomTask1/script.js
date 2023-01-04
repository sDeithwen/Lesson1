let tbl;
let goodsTable = [
    ["Название", "Цена", "Действие"],
    ["Чай", 10],
    ["Кофе", 30],
    ["Кола", 45],
    ["Ведьмак 3", 450],
    ["Булочка", 60],
]

function removeRow(rowId) {
    let row = document.getElementById(rowId);

    row.remove();
}

function createButton(rowId) {
    return `<button class = 'btn btn-danger' onclick ="removeRow('${rowId}')">Удалить</button`;
}

function createTable() {
    tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    tbl.classList.add('table');
    document.body.appendChild(tbl);
    tbl.appendChild(tblBody);

    for (let i = 0; i < goodsTable.length; i++) {
        const row = document.createElement("tr");
        row.id = `row${i}`;

        tblBody.appendChild(row);

        if (i === 0)
            row.style.fontWeight = 'bold';

        for (let j = 0; j < goodsTable[0].length; j++) {
            const cell = document.createElement("td");

            if (j === 2 && i !== 0) {
                cell.innerHTML = createButton(row.id);
            } else {
                cell.innerText = goodsTable[i][j];
            }

            row.appendChild(cell);
        }
    }
}