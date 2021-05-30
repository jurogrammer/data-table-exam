class CacheDB {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items.map(item => ({...item}));
    }

    create(item) {
        this.items = [item].concat(this.items);
    }
}