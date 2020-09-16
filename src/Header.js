import React from 'react'
import './Header.css'
import logo from './amazon.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase.js';
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>

            <Link to="/"><img className='header_image' src={logo} alt='Amazon' /></Link>

            <div className='header_search'>
                <input className='header_search_input' type='text'></input>
                <SearchIcon className='header_search_icon'></SearchIcon>
            </div>
            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div className='header_option' onClick={handleAuthentication}>
                        <span className='header_option_line1'>Hello {!user ? 'Guest' : user?.email} </span>
                        <span className='header_option_line2'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div></Link>
                <div className='header_option'>
                    <span className='header_option_line1'>Returns</span>
                    <span className='header_option_line2'>& Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_option_line1'>Your</span>
                    <span className='header_option_line2'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header_basket'>
                        <ShoppingBasketIcon /><span className='header_option_line2 header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
