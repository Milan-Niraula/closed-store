import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, setProduct } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const containerStyle = {
        marginTop: '10px'
    }

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("err", err);
        })
        dispatch(setProduct(response.data));
    };
    useEffect(() => {
        fetchProducts();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [])

    console.log("products:", products);
    return (
        <div className='ui grid container' style={containerStyle}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing
