import * as TYPE from '../actionTypes'
import {
    fetchProducts as fetchProductsApi,
    fetchCategories as fetchCategoriesApi,
    fetchUsers as fetchUsersApi
} from '../api/index'

export const fetchProducts = () => {
    return async dispatch => {
        dispatch({type: TYPE.FETCH_PRODUCTS_START})

        try {
            const products = await fetchProductsApi()
            dispatch({
                type: TYPE.FETCH_PRODUCTS_SUCCESS,
                payload: products
            })
        } catch (error) {
            dispatch({
                type: TYPE.FETCH_PRODUCTS_FAILURE,
                payload:error,
                error: true
            })
        }
    }
}

export const fetchCategories = () => {
    return async dispatch => {
        dispatch({type: TYPE.FETCH_PRODUCTS_START})
        try{
            const categories = await fetchCategoriesApi()
            dispatch({
                type: TYPE.FETCH_CATEGORIES_SUCCESS,
                payload: categories
            })
        } catch (error){
            dispatch({
                type: TYPE.FETCH_CATEGORIES_FAILURE,
                payload: error,
                error: true
            })
        }
    }
}

export const fetchUsers = () => {
    return async dispatch => {
        dispatch({type: TYPE.FETCH_USERS_START})
        try {
            const users = await fetchUsersApi()
            dispatch({
                type: TYPE.FETCH_USERS_SUCCESS,
                payload: users
            })
        } catch (err) {
            dispatch({
                type: TYPE.FETCH_USERS_FAILURE,
                payload: err,
                error: true
            })
        }
    }
}
