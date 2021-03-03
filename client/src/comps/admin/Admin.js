import React, { Component , Fragment} from 'react'
import  {v4 as uuid} from 'uuid';
import './style.css';
import { connect} from "react-redux";
import PropTypes from 'prop-types';
import { getProducts, deleteProduct } from "../../actions/productActions";
import AddProduct from './AddProduct'
import Logout from './auth/Logout';
import {  Redirect } from 'react-router-dom';

import Loader from '../loader/Loader'

export class Admin extends Component {
    
    componentDidMount(){
        this.props.getProducts();
    }

    removeProduct = (id) => {
        this.props.deleteProduct(id)
    }


    render() {
        const { products } = this.props.product;
        const { loading} = this.props.product;
        const {isAuth, user} = this.props.auth;

        if(!isAuth){
            return <Redirect to='/admin/login'/>
        }

        if(loading ){
            return  <Loader/>
          } else{
        return (
            <div className="Mmain">
            <div className='admin'>
                <Fragment>
                <span className='welcomeText'><strong>{user ? `Welcome ${user.name}` : ''}</strong></span>
                <Logout/>
                </Fragment>
                
                <AddProduct/>

                <div className="AdminProducts">
                    {products.map(({_id, title, price, info, img}) =>{
                        return <div key={_id} className="card">
                            <h3>{title}</h3>
                            <h3>{price}</h3>
                             <p>{info}</p>
                            <h3>{img}</h3>
                            <button onClick={this.removeProduct.bind(this, _id)}
                            type="submit"><i className="fa fa-times"></i>  </button>
                        </div>
                    })}
                </div>

            </div></div>
        )}
    }
}
Admin.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    product: state.product,
    auth: state.auth
    
})

export default connect(mapStateToProps, {getProducts, deleteProduct})(Admin);
