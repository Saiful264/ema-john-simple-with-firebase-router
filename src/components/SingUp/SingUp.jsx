import React, { useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';

const SingUp = () => {
    const [error, setError] = useState('')

    const handleSingUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if(password !== confirm){
            setError("Your password did not match");
            return;
        }
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSingUp}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">confirm Password</label>
                    <input type="password" name="confirm" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="LogIn" />
            </form>
            <p><small>Already have an account <Link to="/login">LogIn</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SingUp;