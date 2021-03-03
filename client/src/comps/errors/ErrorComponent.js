import React, { Component } from 'react'
import './style.css';

 class ErrorComponent extends Component {
     
    render() {
        console.log(12222);
        return (
            <div className='main'>
            <div className='ErrorComp'>
                <i className="far fa-frown fa-10x" ></i>
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            </div>
        )
    }
}

export default ErrorComponent
