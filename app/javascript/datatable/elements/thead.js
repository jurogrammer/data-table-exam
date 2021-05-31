export default class Thead {
    constructor({thead, thList, columns}) {
        this.thead = thead;
        this.columnByTh = new Map();
        thList.forEach((th, i) => this.columnByTh.set(th, columns[i]));
    }

    getColumnByTh(th) {
        return this.columnByTh.get(th);
    }
}