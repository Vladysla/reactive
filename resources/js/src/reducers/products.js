import * as TYPE from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case TYPE.FETCH_PRODUCTS_SUCCESS:
            return payload
        default:
            return state
    }
}