import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  //useState declare
  const [product,setProduct] = useState([]);


  const fetchData = async()=>{
       const response = await axios.get("https://fakestoreapi.com/products");
       setProduct(response.data);
  }
    useEffect(()=>{
      fetchData();
    },[])
  return (
    <div>
      {
        product.map((value,index)=>{
            return (
                <div>
                  <p>{value.price}</p>
                  <p>{value.title}</p>
                 <img src={value.image} alt="" />
                </div>
            )
        })
      }
    </div>
  )
}

export default App