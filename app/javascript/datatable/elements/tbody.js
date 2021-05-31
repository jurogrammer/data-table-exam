export class Tbody {
    constructor({tbody, columns}) {
        this.tbody = tbody;
        this.columns = columns; //column name을 받도록 합니다.
        this.items = null;
        this.sortOrder = columns
            .map(column => {
                let obj = {}
                obj[column] = -1;
                return obj
            }).reduce((acc, cur) => Object.assign(acc, cur))
    }

    setItems(items) {
        this.items = items;
    }

    sort(column) {
        this.sortOrder[column] = (-1) * this.sortOrder[column];

        this.items = this.items.sort(this.getCompareFunction(column, this.sortOrder[column]));
    }

    getCompareFunction(column, order) {
        let keyValue = this.items[0][column];

        if (typeof keyValue === 'string') {
            return (a, b) => order * a[column].localeCompare(b[column])
        } else {
            return (a, b) => order * (a[column] - b[column])
        }
    }

    renderTbody() {
        this.tbody.innerHTML = this.tbodyHTML();
    }

    #tbodyHTML() {
        return this.items.map((item) => this.rowHTML(item)).join("");
    }

    #rowHTML(item) {
        return `<tr>${this.columns.map((column) => `<td>${item[column]}</td>`).join("")}</tr>`
    }
}