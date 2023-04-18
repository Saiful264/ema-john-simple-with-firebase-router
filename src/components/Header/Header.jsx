import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut().then(result => {
            // const logedOut = result.user;
            // console.log(logedOut);
        }).catch(error => {
            console.log(error);
        })
    }
    
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singup">SingUp</Link>
                {
                    user && <span>wellcome{user.email} <button onClick={handleLogOut}>LogOut</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;