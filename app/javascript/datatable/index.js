import {Tbody} from './elements/tbody'


window.juTable = {}
window.juTable.start = function ({tableElem, columns, items, searchOptionElem, qElem, searchFormElem, conditionInfos}) {
    let tbodyElem = tableElem.querySelector('tbody');
    let theadElem = tableElem.querySelector('thead');
    let thElemList = tableElem.querySelectorAll('th');
    // let sexType = document.getElementById();


    let cacheDB = new CacheDB(items);
    let requester = new Requester('/users');
    let searchBar = new SearchBar({
        searchOption: searchOptionElem,
        q: qElem,
        conditionInfos: conditionInfos
    })
    let tbody = new Tbody({
        tbody: tbodyElem,
        columns: columns
    })
    let thead = new Thead({
        thead: theadElem,
        thList: thElemList,
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
        searchForm: searchFormElem,
        table: tableElem,
        searchAction: searchAction,
        tbodyAction: tbodyAction,
        theadAction: theadAction
    });

    listener.init();
    searchAction.search();
}

// window.onload = function () {
//     juTable.start({
//         tableId: 'user-table',
//         columns: ['id', 'name', 'phone_number'],
//         items: [{id: 1, name: 'hello', phone_number: '010101'}],
//         searchOptionId: 'searchOption',
//         qId: 'q',
//         searchFormId: 'searchForm',
//         // conditionInfos: [  //[{condition :element, column :string}]
//         //     ['sex',]
//         // ]
//     });
// }