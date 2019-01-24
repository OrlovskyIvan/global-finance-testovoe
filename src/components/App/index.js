import React, { Component } from 'react'
import Sort from '../../containers/Sort';

import './style/style.sass'

class App extends Component {

    render() {
        return (

                <div className="ii">

                    <section className="ii__header">
                        <h4 className="ii__header-title">Инвестиционные идеи</h4>
                    </section>

                    <Sort/>

                </div>

        )
    }
}

export default App;