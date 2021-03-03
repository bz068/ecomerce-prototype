import React, { Component } from 'react'
import {  Link } from 'react-router-dom'
import './style.css';


import pic from '../../uploads/image.jpg'





export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ''}}

    defualtSrc(e){
        e.target.src = pic;
    }

    render() {

        return (
            <div>
                <Link className='link' to={`products/product/${this.props.item._id}`}>
                <div className="productCard">
                    <img  src={`/images/${this.props.item.img}`} onError={this.defualtSrc} alt=""/>
                    <h3>{this.props.item.title}</h3>
                     <h4>£{this.props.item.price}</h4>
                    
                    
                </div>
                </Link>

            
            </div>
        )
    }
}
