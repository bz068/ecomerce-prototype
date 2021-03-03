import React, { Component } from 'react'
import './style.css';


export class Loader extends Component {
    render() {
        return (
            <div className='spinner'>
                <div className="lds-dual-ring"></div>
            </div>
        )
    }
}

export default Loader
