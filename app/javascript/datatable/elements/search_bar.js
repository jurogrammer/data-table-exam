export default class SearchBar {
    constructor({searchOption, q, conditionInfos}) {
        this.searchOption = searchOption;
        this.q = q;
        this.conditionInfos = conditionInfos; // [{condition :element, column :string}]
    }

    presentData(items) {
        return items.filter(item => this.matchConditions(item) && this.matchSearchQ(item))
    }

    matchConditions(item) {
        return this.conditionInfos.reduce((accBoolean, curConditionInfo) => {
            let conditionValue = curConditionInfo.condition.value;
            return (conditionValue === 'ALL') ? accBoolean
                : accBoolean && (item[curConditionInfo.column] === conditionValue);
        }, true)
    }

    matchSearchQ(item) {
        return (this.q.value === '' ? true : this.isMatch(item[this.searchOption.value], this.q.value))
    }

    isMatch(optionValue, query) {
        // 정규표현식을 적용할 경우엔 소괄호 ()가 검색 안 되므로 indexOf로 처리한다.
        return optionValue.indexOf(query) >= 0;
    }
}