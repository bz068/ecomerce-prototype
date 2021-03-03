import React, { Component } from 'react'
import './style.css';
import axios from 'axios'
import {  Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import PropTypes from "prop-types";




export class Messages extends Component {
    state = {
        messages: []
    };

    static propTypes ={
        isAuth: PropTypes.bool
    }

    componentDidMount(){
        axios
        .get('https://sambros.herokuapp.com/api/message')
        .then(res => {
            this.setState({
                messages : res.data
            })
        })
        .catch(
            err => console.log(err)
        );
    }

    render() {
        if(!this.props.isAuth){
            return <Redirect to='/admin'/>
        }
        return (
            <div className='Amain' >
                
                <div className="messagesContainer">
                    <h1>Messages</h1>
                    { this.state.messages.map((message, index)=>{
                        return <div key={index} className="message">
                            <h2>{message.subject}</h2>
                            <h3>{message.fullname}</h3>
                            <h3>{message.email}</h3>
                            <hr></hr>
                            <p>{message.message}</p>

                        </div>
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,{})(Messages)
