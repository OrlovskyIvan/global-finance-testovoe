import { SAVE_RECEIVED_DATA, UPDATED_RECEIVED_DATA } from '../constants/InvestmentIdeasContainer'

export const saveReceivedData = (dataMass) => {
    return {
        type: SAVE_RECEIVED_DATA,
        payload: dataMass
    }
}

export const updateIdeasMass = (dataMass, updatedStatus) => {

    return (dispatch) => {

        dispatch({
            type: SAVE_RECEIVED_DATA,
            payload: dataMass
        })

        dispatch({
            type: UPDATED_RECEIVED_DATA,
            payload: updatedStatus
        })

    }

}