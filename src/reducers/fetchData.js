import { FETCHING_DATA, DATA_RECEIVED, FETCHED_DATA } from '../constants/FetchData.js'

const initialState = {
    fetchingData: false,
    iIData: [],
    dataReceived: false
}

export default function fetchData(state = initialState, action) {

    switch (action.type) {
        case FETCHING_DATA:
            return {...state, fetchingData: action.payload };
        case FETCHED_DATA:

            /* Копирование массива или объекта */

            return {...state, iIData: action.payload };
        case DATA_RECEIVED:
            return {...state, dataReceived: action.payload };

        default:
            return state;
    }

}