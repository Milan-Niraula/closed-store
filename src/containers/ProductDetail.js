import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const { title, image, category, description, price } = product
    const { productId } = useParams()
    const dispatch = useDispatch()
    console.log(product);

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("error:", err);
        })
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetails();
        }
    }, [productId]);

    return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ? (
                <div>...Loading </div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle alligned row">
                            <div className="column lp">
                                <img className='ui fluid image' src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className='ui teal tag label' href=''>${price}</a>
                                </h2>
                                <h3 className='ui brown block header'>{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex='0'>
                                    <div className="hidden content">
                                        <i className='shop icon'></i>
                                    </div>
                                    <div className="visible content">Add to cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail
