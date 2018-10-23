import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'

import products from './products'
import categories from './categories'
import users from './users'

export default combineReducers({
    router,
    products,
    categories,
    users
})