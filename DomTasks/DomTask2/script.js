
let goodsTable = [
    ["Название", "Цена", "Наличие", "Действие"],
    ["Чай", 4, 10],
    ["Кофе", 1, 30],
    ["Кола", 20, 45],
    ["Ведьмак 3", 5, 450],
    ["Булочка", 12, 60],
]

function removeRow(rowId) {
    let row = document.getElementById(rowId);

    row.remove();
}

function addRow() {
    const tblBody = document.getElementsByTagName("tbody")[0];
    const rows = tblBody.rows;
    const inputsArr = [document.getElementById('newRowName'), document.getElementById('newRowCost'), document.getElementById('newRowCount')];
    const row = document.createElement("tr");
    row.id = `row${parseInt(rows[rows.length - 2].id.substring(3)) + 1}`;

    for (let i = 0; i < 4; i++) {
        const cell = document.createElement("td");

        if (i < 3) {
            cell.innerText = inputsArr[i].value === null || inputsArr[i].value.trim() === '' ? inputsArr[i].placeholder : inputsArr[i].value.trim();
            inputsArr[i].value = '';
        } else
            cell.innerHTML = createRemoveButton(row.id);

        row.appendChild(cell);
    }
    tblBody.appendChild(row);
    tblBody.insertBefore(rows[rows.length - 1], rows[rows.length - 2]);
}

function createRemoveButton(rowId) {
    return `<button class = 'btn btn-danger' onclick ="removeRow('${rowId}')">Удалить</button`;
}

function createAddButton() {
    return `<button class = 'btn btn-primary' onclick ="addRow()">Добавить</button`;
}


function createAddRow(tblBody) {
    const row = document.createElement('tr');

    for (i = 0; i < 4; i++) {
        td = document.createElement('td');

        row.appendChild(td);
        if (i < 3) {
            let input = document.createElement('input');

            input.classList.add('form-control');

            if (i === 0) {
                input.type = 'text';
                input.id = 'newRowName';
                input.placeholder = 'Новый товар';
            } else {
                input.type = 'number';

                if (i === 1) {
                    input.id = 'newRowCost';
                    input.placeholder = '10';
                } else {
                    input.id = 'newRowCount';
                    input.placeholder = '50';
                }
            }
            td.appendChild(input);
        } else {
            td.innerHTML = createAddButton();
        }
    }
    tblBody.appendChild(row);
}

function createTable() {
    let tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    tbl.classList.add('table');
    document.body.appendChild(tbl);
    tbl.appendChild(tblBody);

    for (let i = 0; i < goodsTable.length; i++) {
        const row = document.createElement("tr");
        row.id = `row${i}`;

        tblBody.appendChild(row);

        if (i === 0) {
            row.style.fontWeight = 'bold';
        }

        for (let j = 0; j < goodsTable[0].length; j++) {
            const cell = document.createElement("td");

            if (j === 3 && i !== 0) {
                cell.innerHTML = createRemoveButton(row.id);
            } else {
                cell.innerText = goodsTable[i][j];
            }

            row.appendChild(cell);
        }
    }
    createAddRow(tblBody);
}