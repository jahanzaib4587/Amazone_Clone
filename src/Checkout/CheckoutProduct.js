import React from 'react'
import { useStateValue } from '../Data_Layer/StateProvider';
import './checkoutproduct.css';
function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
        
    }
    return (
       
        <div className="checkoutProduct">
            <div>
                <img className="checkoutProduct_image" src={image}></img>
            </div>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
</p>
                   <p className="checkoutProduct_price"> 
                    <small>$</small>
                    <strong>{ price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                     {Array(rating).fill().map((_) => (
                    <p>⭐</p>
                ))}
                </div>
                <button onClick={removeFromBasket } className="checkoutProduct_button">Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
