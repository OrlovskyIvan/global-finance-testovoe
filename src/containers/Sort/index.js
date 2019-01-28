import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Select from 'react-select';
import arraySort from "array-sort";
import * as SortActions from "../../actions/SortActions";
import * as InvestmentIdeasContainerActions from "../../actions/InvestmentIdeasContainerActions";
import "./style/style.sass"

const options = [
    { value: 'new', label: 'Новые' },
    { value: 'income', label: 'По доходу' },
    { value: 'price', label: 'По цене' }
];

class Sort extends Component {

    componentDidUpdate = (prevProps, prevState) => {

        /* Первая сортировка массива по дате производится после обновления массива данными о прогнозируемом доходе */
        let { dataMass, updatedIdeasMass } = this.props.investmentIdeasContainer,
            { saveReceivedData } = this.props.investmentIdeasContainerActions,
            { setSortByDateAfterUpdate } = this.props.sortActions,
            { sortByDateAfterUpdate } = this.props.sort,
            sortedMassByDate = [];

        /* Если массив заполнен и первой сортировки по дате еще не было */
        if (updatedIdeasMass && !sortByDateAfterUpdate) {

            /* Сортируем массив */
            sortedMassByDate = arraySort(dataMass, 'ideaDate', {reverse: true});
            /* Сохраняем состояние и отсортированный массив */
            setSortByDateAfterUpdate(true);
            saveReceivedData(sortedMassByDate);
        }

    }

    handleChange = (selectedOption) => {

        let { setSortType } = this.props.sortActions,
            { saveReceivedData } = this.props.investmentIdeasContainerActions,
            { dataMass } = this.props.investmentIdeasContainer,
            sortedMass = [],
            selectValue = selectedOption.value;

        /* Отправляем выбранную опцию в стейт */
        setSortType(selectedOption);

        switch (selectValue) {
            case "new":
                sortedMass = arraySort(dataMass, 'ideaDate', {reverse: true});
                saveReceivedData(sortedMass);
                break;
            case "income":
                sortedMass = arraySort(dataMass, 'projectedIncome', {reverse: true});
                saveReceivedData(sortedMass);
                break;
            case "price":
                sortedMass = arraySort(dataMass, 'buyPrice', {reverse: true});
                saveReceivedData(sortedMass);;
                break;
            default:
                return false;
        }

    }

    render() {

        const { sortType } = this.props.sort;

        return (
            <div className="ii__sort">

                <div className="ii__sort-inner-wrap">

                    <div className="ii__sort-select-wrap">

                        <h5 className="ii__sort-select-title">Показывать</h5>

                        <Select
                            value={sortType}
                            onChange={this.handleChange}
                            options={options}
                            className={"ii__sort-select"}
                            classNamePrefix={"ii__sort-select-item"}
                            placeholder={"Новые"}
                        />
                    </div>

                </div>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        sort: state.sort,
        investmentIdeasContainer: state.investmentIdeasContainer
    }
}

function mapDispatchToProps(dispatch) {

    return {
        sortActions: bindActionCreators(SortActions, dispatch),
        investmentIdeasContainerActions: bindActionCreators(InvestmentIdeasContainerActions, dispatch)

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)