import React from 'react'
import { useStateValue } from '../Data_Layer/StateProvider';
import './product.css';

function Product({ id, title, price, rating, image }) {
    
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                 <p className="product_title">{ title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{ price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((_) => (
                    <p>⭐</p>
                ))}
            </div>
           </div>
            <div className="product_bottom">
                <img src={image} alt="product image" className="product_image"></img>
                <div className="btn">
                    <button onClick={addToBasket} className="product_button">Add to basket</button>
                    </div>
            </div>
        </div>
    )
}

export default Product
