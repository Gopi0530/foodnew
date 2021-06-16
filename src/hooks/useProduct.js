import { useState } from 'react';
import yelp from '../api/yelp'
import { useEffect } from 'react';
export default () => {

    const [products, setProducts] = useState([])
    const [errorMessage,setErrorMessage] = useState('')
    
    const loadProducts = () => {
        yelp.get("/products").then(response => {
            setProducts(response.data)
            
        }).catch(error => {
            console.log("Error",error)
            setErrorMessage("Something went wrong")
        })
    }

    useEffect(() => {
        loadProducts()
    },[])
    
    return [products,errorMessage]
}