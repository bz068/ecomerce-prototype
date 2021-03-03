import React, {  useState, useContext, useEffect} from 'react';
import './style.css';

import Product from './Product'
import { ProductContext } from "../context/ProductContext";


function Products()  {
    
       
        const [data, setData, handleChange, srt, catHandleChange, searchFunction] = useContext(ProductContext);

            let opt = 
                srt.map((item,i)=>{
                  return  <option key={i}  value={item.cat}>{item}</option>
        })
       
            

        return (
            <div className='Pmain'>
                <div className="productContainer">
                    <div className="filter">
                    <form  >
                         <label >Sort:</label>
                         <select name="sort" id="sort" onChange={handleChange} >
                          <option  value="p-select">Please Select</option> 
                          <option value="p-l-h">Price: Low - High</option>
                         <option value="p-h-l">Price: High-Low</option>
                         </select>
                         </form>

                         <form >

                         {/* <label >Shop by Category:</label>

                         <select name="category" id="category" onChange={catHandleChange}>
                <option  value="electronic">Please Select</option> 
                        
                       {opt}
                        
  </select> */}
  
</form>
                    </div>

                    <div className="products">
                        <div className="search">
                            <input onChange={searchFunction} placeholder='Search....' type="text" name="searchBox" id="searchBox"/>
                        </div>
                        <div className="productComponent">
                              <Product />
                        </div>
                  
                    </div>
                </div>
                
            </div>
        )
    }
    export default  Products;
