import React, {  useContext } from 'react'
import Card from './Card'
import './style.css';

import { ProductContext } from "../context/ProductContext";


function Product(){
    const [data] = useContext(ProductContext);

        return data.map((item)=>(
            <Card key={item._id} item={item} data ={data}/>
        ))
        

    
    
}

export default  Product;
