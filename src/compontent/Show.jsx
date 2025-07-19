import React, { useEffect, useState } from 'react'
import axios from '../utilis/axios';

const Show = () => {
    const [product, setProduct] = useState([]);
    const getproduct = () => {
      const api = "products";
      axios
        .get(api)
        .then((product) => {
        //   console.log(product);
          setProduct(product.data);
        })
        .catch((err) => console.log(err));
    }
    useEffect(()=>{
        getproduct()
        })
  return (
    <>
   
       <ul className="m-5">
    {product.length > 0 ? (
      product.map((p,ele) => (
        <li key={ele} className="w-1/2 bg-red-300 rounded-md px-3 m-3">{p.title}</li>
      ))
    ) : (
      <h1>Loading</h1>
    )}
  </ul>
    </>
 
  )
}

export default Show
