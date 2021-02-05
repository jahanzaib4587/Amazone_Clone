import React from 'react'
import './subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../../Data_Layer/StateProvider';
import {getBasketTotal} from '../../Data_Layer/reducer';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        
        <div className="subtotal">
            
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal(
                        {basket.length} items): <strong>{`${value}`}</strong>

                        </p>
                        <div className="subtotal_gift">
                            <input type="checkbox" className="subtotal_checkbox"></input>
                                <small>
                              
                            This order contains a gift for you
                            
                        </small>
                        </div >
                        
                       
                        
                    </div>
                )}

                decimalScake={2}
                value={ getBasketTotal(basket)} 
               
                displayType={"text"}
                thousandseprator={true}
                prefix={"$"}
            />
          
            <button className="subtotal_button">
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal
