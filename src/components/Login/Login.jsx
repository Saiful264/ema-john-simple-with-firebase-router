import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [show, setShow] = useState(false);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser);
            form.reset();
            navigate(from, {relative: true});
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
            form.reset();
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>LogIn</h2>
            <form onSubmit={handleLogin}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" required/>
                    <p onClick={()=> setShow(!show)}>{
                        show ? <span>Hide password</span> : <span>Show password</span>
                    }<small></small></p>
                </div>
                <input className='btn-submit' type="submit" value="LogIn" />
            </form>
            <p><small>New to Ema-john?<Link to="/singup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;