import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { logout } from "../../../actions/authActions";
import {  Link} from 'react-router-dom'
import './style.css';
import PropTypes from "prop-types";





export class Logout extends Component {
    static propTypes = {
        logout : PropTypes.func.isRequired
    };
    render() {
        return (
           <Fragment>
               <Link to='#' onClick={this.props.logout} className='link logout'>
               <li>Logout</li>
               </Link>
           </Fragment>
        )
    }
}

export default connect(null, {logout})(Logout)
