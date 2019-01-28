import { SET_SORT_TYPE, SORT_BY_DATE_AFTER_UPDATE } from '../constants/Sort'

const initialState = {
    sortType: "new",
    sortByDateAfterUpdate: false
}

export default function sort(state = initialState, action) {

    switch (action.type) {
        case SET_SORT_TYPE:
            return {...state, sortType: action.payload };
        case SORT_BY_DATE_AFTER_UPDATE:
            return {...state, sortByDateAfterUpdate: action.payload };
        default:
            return state;
    }

}