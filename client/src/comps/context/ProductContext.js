import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

import products from './products.json'

export const ProductContext = createContext();

export function ProductProvider(props) {
    const [data,setData]=useState([]);
    const [sortType, setSortType] = useState('')
    const [sortCatType, setSortCatType] = useState('')
    const [srt, setSrt] = useState(['household', 'toilet', 'drink'])
    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState('');


    const handleChange = (event) =>{
      const value = event.target.value;
      

      if(value=== "p-l-h"){
        const newData=  data.sort(function(a, b){return a.price-b.price});
        setSortType(value)
      
    }
    if(value=== "p-h-l"){
      const newData=  data.sort(function(a, b){return b.price-a.price});
      setSortType(value)
      setData(newData)
  }}

  const catHandleChange = (event)=>{
    const value = event.target.value;

    if(value=== value){
      const newData = products.filter(item=> item.cat == value)
      // console.log(newData);
      setSortCatType(value)
      setData(newData)
  
  }}
  const searchFunction = (event)=>{
    const value = event.target.value.toLowerCase();
    setSearchText(value)
    const newData = searchData.filter((product)=>{
      return(
      product.title.toLowerCase().includes(value)
    );})
    setData(newData)
}



    useEffect(()=>{
            

      axios
      .get('https://sambros.herokuapp.com/api/products')
      .then(res => {
         setData(res.data)
         setSearchData(res.data)
      })
      .catch(
          err => console.log( err)
      );
       
   },[ ]);
   



    return (
      <ProductContext.Provider value={[data, setData, handleChange, srt, catHandleChange, searchFunction]}>
          {props.children}
      </ProductContext.Provider>
    )
}



