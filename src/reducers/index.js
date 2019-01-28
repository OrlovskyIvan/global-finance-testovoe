import { combineReducers } from 'redux'
import sort from './sort'
import fetchData from './fetchData'
import investmentIdeasContainer from './investmentIdeasContainer'
// import authenticateLink from './authenticateLink'
// import popularMovies from './popularMovies'
// import fetchData from './fetchData'
// import movie from './movie'
// import profile from './profile'
// import search from './search'
// import popup from './popup'

export default combineReducers({

    sort,
    fetchData,
    investmentIdeasContainer
    // movieDBAuthentification,
    // authenticateLink,
    // popularMovies,
    // fetchData,
    // movie,
    // profile,
    // search

})