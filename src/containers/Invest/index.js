import React, { Component } from 'react';
import Inputmask from "inputmask";
import isE164PhoneNumber from 'is-e164-phone-number'
import axios from "axios/index"
import "./style/style.sass"

export default class Invest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sendUrl: `http://68.183.217.11/api/phone`,
            isSendPhoneVisible: false,
            isPhoneNumberValid: false,
            inputPhoneNumber: null
        }

        this.phoneInput = null;
        this.phoneMessage = null;

        this.setPhoneInput = element => {
            this.phoneInput = element;
        };

        this.setPhoneMessage = element => {
            this.phoneMessage = element;
        };
    }

    handleShowSendPhone = (e) => {
        /* Если статус кнопки не активен, она помечена серым и нажать её нельзя */
        let status = this.props.status;

        if (status) {
            this.setState({isSendPhoneVisible: !this.state.isSendPhoneVisible})
        }

    }

    handlePhoneInput = (e) => {

        let inputMask = new Inputmask("+99999999999");

            inputMask.mask(this.phoneInput);

        this.setState({inputPhoneNumber: e.target.value})

        if (isE164PhoneNumber(e.target.value)) {
            this.setState({isPhoneNumberValid: true})
        } else {
            this.setState({isPhoneNumberValid: false})
        }

    }

    sendRequest = (e) => {

        let inputPhoneNumber = this.state.inputPhoneNumber,
            self = this;

        axios.post(`http://68.183.217.11/api/${inputPhoneNumber}`).then(function (response) {

            /* В случае успешной отправки изменяем текст сообщения */
            self.phoneMessage.innerHTML = "Телефон отправлен";
            console.log(response);

        }).catch(function (error) {

            self.phoneMessage.innerHTML = "Ошибка";
            console.log(error.response);

        });

    }

    render() {

        let status = this.props.status,
            isSendPhoneVisible = this.state.isSendPhoneVisible,
            isPhoneNumberValid = this.state.isPhoneNumberValid;

        return(
            <div className="investment-idea__invest invest">

                <button className={`invest__invest-button invest__button ${status ? "" : "invest__button--disabled"} ${isSendPhoneVisible ? "invest__button--invisible" : ""}`} onClick={this.handleShowSendPhone}>Инвестировать</button>

                <div className={`invest__send-wrap ${isSendPhoneVisible ? "" : "invest__send-wrap--invisible"}`}>

                    <div className="invest__input-wrap">
                        <input ref={this.setPhoneInput} onChange={this.handlePhoneInput} type="text" className="invest__input"/>
                    </div>

                    <button onClick={this.sendRequest} className="invest__send-button invest__button">Оставить заявку</button>

                    {isPhoneNumberValid ? (
                        <div ref={this.setPhoneMessage} className="invest__valid-message invest__valid-message--valid">Номер введен верно</div>
                    ) : (
                        <div className="invest__valid-message invest__valid-message--invalid">Введите номер</div>
                    )}

                </div>

            </div>
        )
    }
}