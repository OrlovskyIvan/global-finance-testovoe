import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import InvestmentIdea from "../../components/InvestmentIdea"
import * as FetchDataActions from "../../actions/FetchDataActions";
import * as SortActions from "../../actions/SortActions";
import * as InvestmentIdeasContainerActions from "../../actions/InvestmentIdeasContainerActions";
import "./style/style.sass"

class InvestmentIdeasContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchUrl: `https://68.183.217.11/api/ideas`
        }
    }

    componentDidMount = () => {

        let { fetchDataRequest } = this.props.fetchDataActions,
            fetchUrl = this.state.fetchUrl;

        /* Когда компонент смонтирован, делаем запрос на юрл */
        fetchDataRequest(fetchUrl);
    }

    componentDidUpdate = (prevProps, prevState) => {

        let { iIData, dataReceived } = this.props.fetchData,
            { dataMass, updatedIdeasMass } = this.props.investmentIdeasContainer,
            { changeFetchStatus } = this.props.fetchDataActions,
            { saveReceivedData, updateIdeasMass } = this.props.investmentIdeasContainerActions;

        /* Проверяем получены ли данные, если да, сохраняем их в стейт идей и очищаем стейт fetchData для реюзабильности */
        if (dataReceived) {
            saveReceivedData(iIData);
            changeFetchStatus([], false);
        }

        /* Проверяем, если массив с данными сохранен в стейте контейнера, дополняем его данными для сортировки */
        if (dataMass.length > 0 && !updatedIdeasMass) {

            dataMass.map((currentValue, index) => {

                let sellPrice = currentValue.sellPrice,
                    buyPrice = currentValue.buyPrice,
                    projectedIncome = +((((sellPrice - buyPrice) * 100) / buyPrice).toFixed(2));

                /* Добавляем доход */
                dataMass[index].projectedIncome = projectedIncome;

            })

            updateIdeasMass(dataMass, true);
        }

    }

    render() {

        let { dataMass } = this.props.investmentIdeasContainer,
            ideasTemplate = [];

        console.log(dataMass)

        /* Из полученых данных Формируем список идей для отрисовки */
        ideasTemplate = dataMass.map((currentValue, index) => {

            const InvestmentIdeaDataObj = {};

            InvestmentIdeaDataObj.id = currentValue._id;
            InvestmentIdeaDataObj.buyPrice = currentValue.buyPrice;
            InvestmentIdeaDataObj.ideaDate = currentValue.ideaDate;
            InvestmentIdeaDataObj.logoSrc = currentValue.logoSrc;
            InvestmentIdeaDataObj.name = currentValue.name;
            InvestmentIdeaDataObj.period = currentValue.period;
            InvestmentIdeaDataObj.price = currentValue.price;
            InvestmentIdeaDataObj.sellPrice = currentValue.sellPrice;
            InvestmentIdeaDataObj.status = currentValue.status;
            InvestmentIdeaDataObj.projectedIncome = currentValue.projectedIncome;

            return (<InvestmentIdea key={InvestmentIdeaDataObj.id} InvestmentIdeaDataObj={InvestmentIdeaDataObj}/>)
        })

        return(
            <section className="ii__investment-ideas-container">
                {ideasTemplate}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        sort: state.sort,
        fetchData: state.fetchData,
        investmentIdeasContainer: state.investmentIdeasContainer
    }
}

function mapDispatchToProps(dispatch) {

    return {
        sortActions: bindActionCreators(SortActions, dispatch),
        fetchDataActions: bindActionCreators(FetchDataActions, dispatch),
        investmentIdeasContainerActions: bindActionCreators(InvestmentIdeasContainerActions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentIdeasContainer)

/*
 […]
​
    0: {…}
    ​​
        _id: "5a0ac367f270706b0348a513"
        buyPrice: 220.97
        ideaDate: "2017-11-13T13:09:00Z"
        logoSrc: "images/20/292f4cde8164fbc2afecf12b6dfabb8f.png"
        name: "Идея по акциям компании Сбербанк"
        period: "6 месяцев"
        price: 215
        sellPrice: 260
        status: true
        <prototype>: Object { … }
    ​
    1: Object { _id: "5aaa90949d2050393e6a99dd", price: 45, status: false, … }
    2: Object { _id: "5a3253825bd2093fb9e735ef", price: 530, status: false, … }
    3: Object { _id: "5a05ce8123fe4d3fcc1a7d30", price: 193.2, status: true, … }
    4: Object { _id: "5a2eab88c11f8e68187808ba", price: 170, status: true, … }
    5: Object { _id: "5a05829bc4dd29550f5c9882", price: 257, status: false, … }
    6: Object { _id: "5ab3abbce138653491a7f83c", price: 12.25, status: false, … }
    7: Object { _id: "5a1ecfed62451b176e35867d", price: 920, status: true, … }
 */