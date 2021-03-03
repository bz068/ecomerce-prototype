import React, { Component, useState, useEffect, useContext } from 'react'
import './style.css';

import pic1 from '../home/img/pic1.jpg'
import pic from '../../uploads/image.jpg'
import { ProductContext } from "../context/ProductContext";

import Loader from '../loader/Loader'



function ProductInfo(props) {

    const [data] = useContext(ProductContext);
    const [id, setId] = useState(props.match.params.id);
    const [product, setProduct] = useState();

    useEffect(()=>{
        setProduct(data.filter((item)=>{return item._id == id}))
    },[data])

    const defualtSrc= (e)=>{
        e.target.src = pic;
    }

    console.log(product);

    if(product == undefined || product.length == 0 ){
      return  <Loader/>
    } else{
        return (
            <div className='main'>
                   <div className="infoContainer">
                       <div className="proImage">
                        <img src={`/images/${product[0].img}`} onError={defualtSrc} alt=""/>
                       </div>
    
                       <div className="proInfo">
                           <div className="proHead">
                           <h1>{product[0].title}</h1>
                           <h2>{product[0].price}</h2>
                           </div>
                           <p>{product[0].info}</p>
                       </div>
                       
                   </div>
                </div>
        )
    }

  
}

export default ProductInfo

