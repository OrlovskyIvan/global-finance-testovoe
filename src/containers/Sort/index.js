import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Select from 'react-select';
import "./style/style.sass"

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

export default class Sort extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {

        const { selectedOption } = this.state;

        return (
            <div className="ii__sort">

                <div className="ii__sort-inner-wrap">

                    <div className="ii__sort-select-wrap">

                        <h5 className="ii__sort-select-title">Показывать</h5>

                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            className={"ii__sort-select"}
                            classNamePrefix={"ii__sort-select-item"}
                        />
                    </div>

                </div>

            </div>
        )
    }

}