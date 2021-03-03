import React, { Component } from 'react'
import './style.css';
import {  Link, Redirect } from 'react-router-dom'
import { login } from "../../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";





export class Login extends Component {
    state = {
        email: "",
        password: "",
        msg: null
    };

    static propTypes ={
        isAuth: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const { error, isAuth} = this.props;
        if(error !== prevProps.error){
            // check register error
            if(error.id === 'LOGIN_FAIL'){
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

        const {email , password} = this.state;

        const user = {
            email,
            password
        };
        this.props.login(user);
    }
       
    
    render() {
        if(this.props.isAuth){
            return <Redirect to='/admin'/>
        }
        return (
            <div className="Mmain">
            <div className='main'>
                <form onSubmit={this.onSubmit}>
                        <i className="fa fa-user fa-6x"></i>
                        {this.state.msg ? <div className='errorAlert'><p>{this.state.msg}</p>
                     </div> : null }
                        <input onChange={this.onChange} value={this.state.email} type="text" placeholder='Email' name="email" id=""/>
                        <input onChange={this.onChange} value={this.state.password} type="password" placeholder='Password' name="password" id=""/>
                        <button type="submit">submit</button>

                        
                    </form>
            </div></div>
        )
    }
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    error: state.error
});

export default connect(mapStateToProps, {login})(Login);
