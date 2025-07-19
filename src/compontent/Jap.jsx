import axios from '../utilis/axios';
import React, { useEffect, useState } from 'react'

const Jap = () => {
    const [product, setProduct] = useState([]);
    const getuser = () => {
      const api = "users";
      axios
        .get(api)
        .then((product) => {
          console.log(product);
        //   setProduct(product.data);
        })
        .catch((err) => console.log(err));
    }
    useEffect(()=>{
        getuser()
        })
  return (
    <div>
      
    </div>
  )
}

export default Jap
