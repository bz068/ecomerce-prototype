
import React, { Component, useState, useEffect, Fragment} from 'react'
import './style.css';
import {  Link } from 'react-router-dom'
import logo from './logo.png'
import { connect} from "react-redux";
import PropTypes from "prop-types";




function Nav(props) {
    
   const [toggle, setToggle] = useState(false);

    function barsToggle(){
        const ul = document.querySelector('#ul');
        if(toggle){
            ul.classList.add('show-ul');
        }else{
            ul.classList.remove('show-ul');
        }}

        useEffect(()=>{
            barsToggle()
        },[toggle])

        console.log(props.auth);



        

    return (
        <div>
        <div className="navbar">

        <nav>
        <Link to='/' >
        <img className='logo' src={logo} alt=""/>
        </Link>

        <ul id="ul">
        <Link className='link' to='/'><li className='link' >Home</li></Link>
        <Link className='link' to='/products'><li className='link' >Products</li></Link>
        <Link className='link' to='/contact'><li className='link' >Contact</li></Link>
        
        {(props.auth)?
        <Fragment>
        <Link className='link' to='/admin/register'><li className='link loginBtn' >Register User</li></Link>
        <Link className='link' to='/admin/messages'><li className='link loginBtn' >Messages</li></Link>
        </Fragment>
         :<Link className='link' to='/admin/login'><li className='link loginBtn' >Login</li></Link> }
        

        
        </ul>
            
        <i id="bars" onClick={()=>setToggle(!toggle)} className="fa fa-bars fa-2x"></i>
        </nav>
         </div>
         </div>
    )
}

Nav.protoTypes ={
    auth: PropTypes.bool,
}

const mapStateToProps = (state)=>({
    auth: state.auth.isAuth
    
})

export default connect(mapStateToProps, {})(Nav)
