import React from 'react'
import logo from '../Pictures/amazon_logo1.png'
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../Data_Layer/StateProvider';
import { auth } from '../Firebase/firebase';
function Header() {

    const [{ basket ,user}] = useStateValue();
   
    const login = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <nav className="header">
            {/*Amazon logo on left side*/}
            <Link to="/">
             <img className="header_logo" src={logo} alt="Logo here"></img>
            </Link>
            {/* Search Box */}
            <div className="header_search">
                <input type="text" className="header_searchInput"></input>
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            {/* Three links */}
            <div className="header_nav">
                {/* Link 1 */}
                <Link to={!user && "/signin"} className="header_link">
                    <div onClick={login} className="header_option">
                                                            
                        <span className="headrer_optionLine1"> {user?.email} </span>
                        <span className="headrer_optionLine2">{user?'Sign Out' : 'Sign In'}</span>
                   </div>
                </Link>
                {/* Link 2 */}
                 <Link to="/" className="header_link">
                    <div className="header_option">
                     <span className="headrer_optionLine1">Returns</span>
                    <span className="headrer_optionLine2">& Orders</span>
                   </div>
                </Link>
                {/* Link 3 */}
                 <Link className="header_link">
                    <div className="header_option">
                     <span className="headrer_optionLine1">Your</span>
                    <span className="headrer_optionLine2">Prime</span>
                   </div>
                </Link>
                {/* Link 4 */}
                <Link to='/checkout' className="header_link">
                     <div className="header_basket" >
                    {/* Basket Icon */}
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    {/* Number of items in Basket */}
                        <span className="headrer_optionLine2 header_basketCount">{ basket?.length}</span>
                </div>
               </Link>
            </div>
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header
