import React from 'react'
import './style/style.sass'

export default function CurrentIncome(props) {

    let { buyPrice, sellPrice, price } = props,
        currentIncome = (((price - buyPrice) * 100) / buyPrice).toFixed(2);

    return (
        <div className="investment-idea__current-income current-income">

            <div className="current-income__item current-income__buy-price">

                <div className="current-income__money">$ {buyPrice}</div>

                <div className="current-income__caption">цена покупки</div>

            </div>

            <div className="current-income__item current-income__sell-price">

                <div className="current-income__money">$ {sellPrice}</div>

                <div className="current-income__caption">цена продажи</div>

            </div>

            <div className="current-income__item current-income__current-price">

                <div className="current-income__money">$ {price}</div>

                <div className="current-income__caption">текущая цена</div>

            </div>

            <div className="current-income__item current-income__current-income-money">

                <div className={`current-income__money ${currentIncome > 0 ? "current-income__money--green" : "current-income__money--red"}`}>
                    {currentIncome > 0 ? "+" : ""}
                    {currentIncome}%
                </div>

                <div className="current-income__caption">текущий доход</div>

            </div>

        </div>
    )

}