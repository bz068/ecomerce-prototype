import axios from 'axios';
import {returnErrors} from './errorActions'
import {USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/types';


// check token and lead user
export const loadUser = () => (dispatch, getState) =>{
    // user loading
    dispatch({ type: USER_LOADING});


    axios.get('https://sambros.herokuapp.com/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            });
        });
    
    };



    // register
    export const register = ({name, email, password})=>dispatch=>{
        const config = {
            headers:{
                "Content-type": "application/json"
            }
        }
        // request body
        const body = JSON.stringify({name, email, password});
       

        axios.post('https://sambros.herokuapp.com/api/users', body, config)
            .then(res=> dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            }))
            .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
            dispatch({
                    type:REGISTER_FAIL
                });
            });

    }
    // login
    export const login = ({email, password}) =>dispatch =>{
        const config = {
            headers:{
                "Content-type": "application/json"
            }
        }
        // request body
        const body = JSON.stringify({email, password});
       

        axios.post('https://sambros.herokuapp.com/api/auth', body, config)
            .then(res=> dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            }))
            .catch(err=>{
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
            dispatch({
                    type: LOGIN_FAIL
                });
            });
    }

    // logout
    export const logout = () =>{
        return{
            type: LOGOUT_SUCCESS
        };
    };

    // setup config headers

    export const tokenConfig = getState =>{
            // get token from LS
    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if(token){
        config.headers['x-auth-token'] = token;
    }
    return config;
    }

