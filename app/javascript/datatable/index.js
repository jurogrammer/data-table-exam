import {Tbody} from './elements/tbody'


let juTable = {}
juTable.start = function() {
    const tbody = new Tbody({
        tableId: 'user-table',
        columns: [
            'id',
            'name',
            'phone_number'
        ]
    })

    tbody.setItems([
        {
            id: 1,
            name: 'ju',
            phone_number: '1010'
        },
        {
            id: 2,
            name: 'hell',
            phone_number: '01010'
        },
        {
            id: 3,
            name: 'abll',
            phone_number: '010123420'
        }
    ])

    tbody.renderTbody();

    tbody.sort('id');
    tbody.sort('id');
    tbody.renderTbody();
}

window.onload = function () {
    juTable.start();
}