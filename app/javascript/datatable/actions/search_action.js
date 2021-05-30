class SearchAction {
    constructor(searchBar, tbody, cacheDB) {
        this.searchBar = searchBar;
        this.tbody = tbody;
        this.cacheDB = cacheDB;
    }

    search() {
        this.tbody.setItems(
            this.searchBar.presentData(
                this.cacheDB.getItems()));

        this.tbody.renderTbody();
    }
}