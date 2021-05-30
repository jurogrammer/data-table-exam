class TbodyAction {
    constructor({tbody, requester, cacheDB}) {
        this.tbody = tbody;
        this.requester = requester;
        this.cacheDB = cacheDB;
    }


    create() {
        let item = {};
        this.requester.create(item)
            .then((res) => {
                let item = res.item;

                this.cacheDB.create(item);
                this.tbody.create(item);
                this.tbody.renderTbody();

                alert("생성이 완료되었습니다.");
            })
    }
}