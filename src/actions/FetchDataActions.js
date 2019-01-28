import { FETCHING_DATA, DATA_RECEIVED, FETCHED_DATA } from '../constants/FetchData'
import axios from "axios/index";


const payloadFetchStatus = (fetchingStatus, data, receivedStatus) => {

    return (dispatch) => {

        dispatch({
            type: FETCHING_DATA,
            payload: fetchingStatus
        })

        dispatch({
            type: FETCHED_DATA,
            payload: data
        })

        dispatch({
            type: DATA_RECEIVED,
            payload: receivedStatus
        })

    }

}

export const changeFetchingStatus = (status) => {
    return {
        type: FETCHING_DATA,
        payload: status
    }
}

export const changeFetchStatus = (data, receivedStatus) => {

    return (dispatch) => {

        dispatch({
            type: FETCHED_DATA,
            payload: data
        })

        dispatch({
            type: DATA_RECEIVED,
            payload: receivedStatus
        })

    }

}

/* Функция загрузки данных */
const fetchDataFunc = (url) => {

    return (dispatch) => {

        /* Выставляем состояние загрузки данных в true */
        dispatch(changeFetchingStatus(true))

        axios.get(url).then(function (response) {

            /* В случае успешного получения данных сохраняем их в стор */
            dispatch(payloadFetchStatus(false, response.data, true))

        }).catch(function (error) {

            /* В случае ошибки сохраняем пустой массив */
            console.log(error);
            dispatch(payloadFetchStatus(false, [], false))

        });
    }


}

export const fetchDataRequest = (url) => {

    return (dispatch) => {

        dispatch(
            fetchDataFunc(url)
        );

    }

}

