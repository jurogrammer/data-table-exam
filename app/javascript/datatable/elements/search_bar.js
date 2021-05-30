class SearchBar {
    constructor({searchBar, searchOption, q, conditionInfos}) {
        this.searchBar = searchBar;
        this.searchOption = searchOption;
        this.q = q;
        this.conditionInfos = conditionInfos; // [{condition :element, column :string, value :string or integer}]
    }

    presentData(items) {
        return items.filter(item => this.matchConditions(item) && this.matchSearchQ(item))
    }

    matchConditions(item) {
        this.conditionInfos.reduce((accBoolean, curConditionInfo) => {
            if (curConditionInfo.value === 'ALL') return accBoolean
            return accBoolean && (item[curConditionInfo.column] === curConditionInfo.value)
        }, true)
    }

    matchSearchQ(item) {
        return (this.q.value === '' ? true : this.isMatch(item[this.searchOption.value], this.q.value))
    }

    isMatch(optionValue, query) {
        // 정규표현식을 적용할 경우엔 소괄호 ()가 검색 안 되므로 indexOf로 처리한다.
        return optionValue.indexOf(query) >= 0;
    }

    changeConditionValue(condition, value) {
        let targetConditionInfo = this.conditionInfos.find(conditionInfo => conditionInfo.condition === condition)
        targetConditionInfo.value = value;
    }
}