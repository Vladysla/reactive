import * as TYPE from '../actionTypes'

export default (state = {}, {type, payload}) => {
    switch (type)
    {
        case TYPE.FETCH_USERS_SUCCESS:
            return payload
        default:
            return state
    }
}