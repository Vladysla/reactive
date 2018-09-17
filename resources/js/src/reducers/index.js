import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'

import products from './products'

export default combineReducers({
    router,
    products
})