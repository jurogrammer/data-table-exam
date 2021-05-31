class Listener {
    constructor({searchForm, table, searchAction, tbodyAction, theadAction}) {
        this.searchForm = searchForm;
        this.table = table;
        this.searchAction = searchAction;
        this.tbodyAction = tbodyAction;
        this.theadAction = theadAction;
    }

    init() {
        this.submitSearching();
        this.clickThead();
    }

    submitSearching() {
        this.searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.searchAction.search()
        })
    }

    clickThead() {
        this.table.querySelector('thead').addEventListener('click', (e) => {
            this.theadAction.sort(e.target.closest('th'));
        })
    }
}