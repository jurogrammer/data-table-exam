class Requester {
    //db data와 서버의 싱크를 맞춰야 하므로 의존성을 강제한다.,, 예측할 수 없게 되네. 지워!
    constructor(url) {
        this.url = url;
    }

    async create(item, url = this.url) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return response.json();
    }
}