window.onload = function () {
    fetch('/users', {
        headers: {
            Accept: 'application/json'
        }
    }).then(response => response.json()).then(data => {
        juTable.start({
            url: '/users',
            items: data.items,
            tableElem: document.getElementById('user-table'),
            searchOptionElem: document.getElementById('search-option'),
            qElem: document.getElementById('q'),
            searchFormElem: document.getElementById('search-form'),
            columns: ['id', 'name', 'phone_number', 'sex', 'department'], // 서버측으로 받은 columnName
            conditionInfos: [
                {condition: document.getElementById('sex-type'), column: 'sex'},
                {condition: document.getElementById('department-type'), column: 'department'}
            ]
        })
    })
}