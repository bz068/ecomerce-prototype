import {GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, PRODUCTS_LOADING} from '../actions/types';
import axios from 'axios';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getProducts = ()=> dispatch =>{
    dispatch(setProductLoading());
    axios
        .get('https://sambros.herokuapp.com/api/products')
        .then(res => dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        }))
        .catch(
            err => dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addProduct = (product) => (dispatch, getState) =>{
   axios.post('https://sambros.herokuapp.com/api/products', product, tokenConfig(getState))
    .then(res => dispatch({
        type: ADD_PRODUCT,
        payload: res.data
    }))
    .catch(
        err => dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteProduct = (id)=> (dispatch, getState) =>{
    axios.delete(`https://sambros.herokuapp.com/api/products/${id}`, tokenConfig(getState)).then(res => 
        dispatch({
                type: DELETE_PRODUCT,
                payload: id
        }))
        .catch(
            err => dispatch(returnErrors(err.response.data, err.response.status))
        );
};


export const setProductLoading = () =>{
    return {
        type: PRODUCTS_LOADING
    }
}