import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className='four wide column' key={id}>
                <div className="container">
                    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="ui cards">
                            <div className="card">
                                <div className="image" >
                                    <img src={image} alt={title} />
                                </div>
                                <div className="card-body">
                                    <div className="header">{title}</div>
                                    <div className="meta price">${price}</div>
                                    <div className="meta">{category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    });
    return (
        <> {renderList}</>
    )
}

export default ProductComponent;
