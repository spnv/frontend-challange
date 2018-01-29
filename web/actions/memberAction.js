import axios from 'axios';

export function signIn(_email, _password, cb) {
    return function (dispatch) {
        axios.post('http://localhost:3000/api/login', {
                email: _email,
                password: _password
            })
            .then(function (response) {
                dispatch({
                    type: "STORE_MEMBER",
                    payload: response.data
                })
            }).catch(function (err) {
                dispatch({
                    type: "STORE_MEMBER_REJECTED",
                    payload: err.response.data
                })
            }).then(function () {
                cb()
            })
    }
}