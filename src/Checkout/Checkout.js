import React from 'react'
import { useStateValue } from '../Data_Layer/StateProvider';
import './checkout.css';
import checkout_banner from '../Pictures/banner.png'
import { Title } from '@material-ui/icons';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal/Subtotal';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                 <img className="cehckout_ad" src={checkout_banner} alt="banner image"></img>
            {basket?.length === 0?(
                <div className="checkout_title">
                    <h2>
                        Your Shopping basket is empty
                    </h2>
                    <p>
                        You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                    </p>
                </div>
                ):(
            <div>
                 <h2 className="checkout_title">Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                                
                           
                       ))}
                    </div>
                )
        }
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal></Subtotal>
                  
                </div>
            )}
        </div>
    )
}

export default Checkout;
