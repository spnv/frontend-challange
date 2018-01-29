"use strict"
//MEMBER REDUCERS
export function memberReducers(state = {
    mymember: {}
}, action) {
    switch (action.type) {
        case "STORE_MEMBER":
            return { ...state,
                mymember: {
                    msg: action.payload.msg
                }
            }
            break;
        case "STORE_MEMBER_REJECTED":
            return { ...state,
                mymember: {
                    msg: action.payload.msg
                }
            }
            break;
    }
    return state
}