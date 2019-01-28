import { SAVE_RECEIVED_DATA, UPDATED_RECEIVED_DATA } from '../constants/InvestmentIdeasContainer.js'

const initialState = {
    dataMass: [],
    updatedIdeasMass: false
}

export default function fetchData(state = initialState, action) {

    switch (action.type) {
        case SAVE_RECEIVED_DATA:
            return {...state, dataMass: action.payload };
        case UPDATED_RECEIVED_DATA:
            return {...state, updatedIdeasMass: action.payload };
        default:
            return state;
    }

}