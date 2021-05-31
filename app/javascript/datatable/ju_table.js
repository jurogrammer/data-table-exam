import Thead from './elements/thead'
import Tbody from './elements/tbody'
import CacheDB from './elements/cache_db'
import Requester from './elements/requester'
import SearchBar from './elements/search_bar'
import SearchAction from './actions/search_action'
import TbodyAction from './actions/tbody_action'
import TheadAction from './actions/thead_action'
import Listener from './listeners/listener'


window.juTable = {}

window.juTable.start = function ({
                                     url,
                                     tableElem,
                                     columns,
                                     items,
                                     searchOptionElem,
                                     qElem,
                                     searchFormElem,
                                     conditionInfos
                                 }) {
    let tbodyElem = tableElem.querySelector('tbody');
    let theadElem = tableElem.querySelector('thead');
    let thElemList = Array.from(tableElem.querySelectorAll('th'));

    let cacheDB = new CacheDB(items);
    let requester = new Requester(url);
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
//     fetch('/users', {
//         headers: {
//             Accept: 'application/json'
//         }
//     }).then(response => response.json()).then(data => {
//         juTable.start({
//             url: '/users',
//             items: data.items,
//             tableElem: document.getElementById('user-table'),
//             searchOptionElem: document.getElementById('search-option'),
//             qElem: document.getElementById('q'),
//             searchFormElem: document.getElementById('search-form'),
//             columns: ['id', 'name', 'phone_number', 'sex', 'department'], // 서버측으로 받은 columnName
//             conditionInfos: [
//                 {condition: document.getElementById('sex-type'), column: 'sex'},
//                 {condition: document.getElementById('department-type'), column: 'department'}
//             ]
//         })
//     })
// }