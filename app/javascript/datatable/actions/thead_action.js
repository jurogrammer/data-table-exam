export default class TheadAction {
    constructor({tbody, thead}) {
        this.tbody = tbody;
        this.thead = thead;
    }

    sort(th) {
        let column = this.thead.getColumnByTh(th);
        this.tbody.sort(column);

        this.tbody.renderTbody();
    }
}