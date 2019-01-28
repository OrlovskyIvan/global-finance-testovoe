import React from 'react'
import ProjectedIncome from '../ProjectedIncome'
import CurrentIncome from '../CurrentIncome'
import PercentageOfImplementation from '../PercentageOfImplementation'
import Invest from '../../containers/Invest'
import './style/style.sass'

export default function InvestmentIdea(props) {

    // let { InvestmentIdeaDataObj } = props.InvestmentIdeaDataObj;
    let InvestmentIdeaDataObj = props.InvestmentIdeaDataObj,
        /* Формируем строку в нужном формате из полученных данных о времени */
        dateAsString = InvestmentIdeaDataObj.ideaDate,
        dateMass = dateAsString.split('-'),
        date = `${dateMass[2].substring(0,2)}.${dateMass[1]}.${dateMass[0]}`,
        /* Ссылка на лого */
        logoUrl = `https://68.183.217.11/${InvestmentIdeaDataObj.logoSrc}`,
        /* Имя идеи */
        name = InvestmentIdeaDataObj.name,
        /* Период */
        period = InvestmentIdeaDataObj.period,
        /* Цена покупки */
        buyPrice = InvestmentIdeaDataObj.buyPrice,
        /* Цена продажи */
        sellPrice = InvestmentIdeaDataObj.sellPrice,
        /* Текущая цена */
        price = InvestmentIdeaDataObj.price,
        /* Статус */
        status = InvestmentIdeaDataObj.status,
        /* Прогнозируемый доход */
        projectedIncome = InvestmentIdeaDataObj.projectedIncome;

    return (
        <article className="ii__investment-idea investment-idea">

            <div className="investment-idea__date">{date}</div>

            <div className="investment-idea__top">
                <div className="investment-idea__logo-wrap">
                    <img src={logoUrl} alt="logo" className="investment-idea__logo-img"/>
                </div>

                <h3 className="investment-idea__title">{name}</h3>

            </div>

            <ProjectedIncome projectedIncome={projectedIncome} period={period}/>

            <CurrentIncome buyPrice={buyPrice} sellPrice={sellPrice} price={price} />

            <PercentageOfImplementation buyPrice={buyPrice} sellPrice={sellPrice} price={price} />

            <Invest status={status}/>

        </article>
    )

}
