import * as TYPE from '../actionTypes'
import {
    fetchProducts as fetchProductsApi
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
