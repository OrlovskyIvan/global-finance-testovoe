import { SET_SORT_TYPE, SORT_BY_DATE_AFTER_UPDATE } from '../constants/Sort'

export const setSortType = (sortType) => {

    return {
        type: SET_SORT_TYPE,
        payload: sortType
    }
        
}

export const setSortByDateAfterUpdate = (sortStatus) => {

    return {
        type: SORT_BY_DATE_AFTER_UPDATE,
        payload: sortStatus
    }

}

