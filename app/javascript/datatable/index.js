import {Tbody} from './elements/tbody'


let juTable = {}
juTable.start = function ({tableId, columns, items, searchOptionId, qId, searchFormId, conditionInfos}) {
    let tableElm = document.getElementById(tableId)
    let tbodyElm = tableElm.querySelector('tbody');
    let theadElm = tableElm.querySelector('thead');
    let thElmList = tableElm.querySelectorAll('th');
    let searchOptionElem = document.getElementById(searchOptionId);
    let qElem = document.getElementById(qId);
    let searchForm = document.getElementById(searchFormId);
    // let sexType = document.getElementById();


    let cacheDB = new CacheDB(items);
    let requester = new Requester('/users');
    let searchBar = new SearchBar({
        searchOption: searchOptionElem,
        q: qElem,
        conditionInfos: conditionInfos
    })
    let tbody = new Tbody({
        tbody: tbodyElm,
        columns: columns
    })
    let thead = new Thead({
        thead: theadElm,
        thList: thElmList,
        columns: columns,
    })

    let searchAction = new SearchAction({
        searchBar: searchBar,
        tbody: tbody,
        cacheDB: cacheDB
    })

    let tbodyAction = new TbodyAction({
        tbody: tbody,
        requester: requester,
        cacheDB: cacheDB
    })

    let theadAction = new TheadAction({
        tbody: tbody,
        thead: thead
    })

    let listener = new Listener({
        searchForm: searchForm,
        table: tableElm,
        searchAction: searchAction,
        tbodyAction: tbodyAction,
        theadAction: theadAction
    });

    listener.init();
    searchAction.search();
}

window.onload = function () {
    juTable.start({
        tableId: 'user-table',
        columns: ['id', 'name', 'phone_number'],
        items: [{id: 1, name: 'hello', phone_number: '010101'}],
        searchOptionId: 'searchOption',
        qId: 'q',
        searchFormId: 'searchForm',
        // conditionInfos: [  //[{condition :element, column :string}]
        //     ['sex',]
        // ]
    });
}