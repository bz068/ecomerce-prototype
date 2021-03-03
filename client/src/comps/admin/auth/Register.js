import React, { Component } from 'react'
import './style.css';
import {  Link, Redirect, useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../actions/authActions";



export class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        msg: null
    };

    static propTypes ={
        isAuth: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const { error, isAuth} = this.props;
        if(error !== prevProps.error){
            // check register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg: error.msg.msg});
            } else{
                this.setState({msg: null})
            }
        }
        
    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onSubmit(e){
        e.preventDefault();
        const {name, email, password} = this.state;

        // user
        const newUser = {
            name, 
            email, 
            password
        };
        this.props.register(newUser)
    }
       
    
    render() {
        if(!this.props.isAuth){
            return <Redirect to='/admin/login'/>
        }
        return (
            <div className="Mmain">
            <div className='main'>
               
                <form onSubmit={this.onSubmit}>
                        <i className="fa fa-user fa-6x"></i>
                        {this.state.msg ? <div className='errorAlert'><p>{this.state.msg}</p>
                     </div> : null }
                        <input onChange={this.onChange} value={this.state.name} type="text" placeholder='Name' name="name" id=""/>
                        <input onChange={this.onChange} value={this.state.email} type="text" placeholder='Email' name="email" id=""/>
                        <input onChange={this.onChange} value={this.state.password} type="password" placeholder='Password' name="password" id=""/>
                        <button type="submit">submit</button>

                        <Link className='link' to='/admin/login'><li>Dashboard</li></Link>
                    </form>
                    
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    error: state.error
});

export default connect(mapStateToProps, {register})(Register);
