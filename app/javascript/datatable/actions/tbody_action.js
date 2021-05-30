class TbodyAction {
    constructor(tbody, requester, cacheData) {
        this.tbody = tbody;
        this.requester = requester;
        this.cacheData = cacheData;
    }


    create() {
        let item = {};
        this.requester.create(item)
            .then((res) => {
                let item = res.item;

                this.cacheData.create(item);
                this.tbody.create(item);
                this.tbody.renderTbody();

                alert("생성이 완료되었습니다.");
            })
    }
}