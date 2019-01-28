import React from 'react'
import './style/style.sass'

export default function ProjectedIncome(props) {

    let { projectedIncome, period } = props;

    return (
        <div className="investment-idea__projected-income projected-income">
            <p className="projected-income__caption">Прогнозируемый доход:<span className="projected-income__percent">{ projectedIncome }%</span><span className="projected-income__period">за {period}</span></p>
        </div>
    )

}