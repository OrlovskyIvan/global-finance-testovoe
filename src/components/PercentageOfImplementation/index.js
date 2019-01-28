import React from 'react'
import './style/style.sass'

export default function PercentageOfImplementation(props) {

    let { buyPrice, sellPrice, price } = props,
        percentage = ((((price - buyPrice) * 100) / buyPrice) * 100) / (((sellPrice - buyPrice) * 100) / buyPrice),
        /* Длина капсулы */
        progressCapsuleWidth = 396,
        /* Длина прогрес-бара */
        barWidth = 0,
        /* Массив с точками на прогресс-баре */
        dotsTemplate = [],
        /* Шаг через которые расположены точки */
        dotsStep = progressCapsuleWidth / 8,
        /* Расстояние следующей точки */
        dotsCurrentLeft = dotsStep;

        for (let i = 0; i < 7; i++) {

            let dotsStyle = {
                left: dotsCurrentLeft
            }

            let dots = (<div key={i} className={"percentage__progress-dots"} style={dotsStyle}></div>);

            dotsTemplate.push(dots);

            dotsCurrentLeft = dotsCurrentLeft + dotsStep;
        }

    const barStyle = {
        width: barWidth
    };

    /* Устанавливаем длину прогресс-бара в зависимости от процента выполнения идеи */
    if (percentage >= 0) {

        /* Находим длину прогресс-бара */
        barWidth = progressCapsuleWidth * percentage / 100;

        /* Если длина бара больше капсулы, приравниваем её к длине капсулы */
        if (barWidth > progressCapsuleWidth) {
            barWidth = progressCapsuleWidth;
        }

        /* Устанавливаем длину бара*/
        barStyle.width = barWidth

    }

    return (
        <div className="investment-idea__percentage percentage">
            <p className="percentage__caption">Идея реализована на: <span className="percentage__caption-percent">{percentage.toFixed(2)}%</span></p>

            <div className="percentage__progress-wrap">

                <div className="percentage__progress-bar-caption percentage__progress-bar-caption--left">0%</div>

                    <div className="percentage__progress-capsule">
                        <div className="percentage__progress-bar" style={barStyle}>{dotsTemplate}</div>
                    </div>

                <div className="percentage__progress-bar-caption percentage__progress-bar-caption--right">100%</div>

            </div>
        </div>
    )

}