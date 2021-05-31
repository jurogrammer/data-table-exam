export default class Thead {
    constructor({thead, thList, columns}) {
        this.thead = thead;
        this.columnByTh = Object.fromEntries(thList.map((_, i) => [thList[i], columns[i]]))
    }

    getColumnByTh(th) {
        return this.columnByTh[th];
    }
}