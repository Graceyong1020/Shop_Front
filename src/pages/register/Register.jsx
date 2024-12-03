import React, { useEffect, useState } from "react";
import User from '../../model/User.js';
import { registerService } from '../../services/auth.service.js';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Register.css";

const Register = () => {
    const [user, setUser] = useState(new User('', '', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const currentUser = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser?.id) {
            navigate('/profile');
        }
    }, [currentUser, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setUser((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!user.username || !user.name || !user.password) {
            return;
        }
        setLoading(true);

        registerService(user).then((ok) => {
            navigate('/login');
        })
            .catch((error) => {
                console.log(error);
                if (error?.response?.status === 409) {
                    setErrorMessage('username already exists');
                } else {
                    setErrorMessage('registration failed');
                }
                setLoading(false);
            });
    }

    return (
        <div className='container mt-5'>
            <div className='card ms-auto me-auto p-3 shadow-lg custom-card'>
                <FontAwesomeIcon icon={faUserCircle} className='ms-auto me-auto user-icon' />
                {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}

                <form onSubmit={handleRegister} noValidate className={submitted ? 'was-validated' : ''}>

                    <div className='form-group mb-2'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' className='form-control' name='username' placeholder='username' value={user?.username} onChange={handleChange} required />
                        <div className='invalid-feedback'>Username is required</div>
                    </div>

                    <div className='form-group mb-2'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' className='form-control' name='name' placeholder='name' value={user?.name} onChange={handleChange} required />
                        <div className='invalid-feedback'>Name is required</div>
                    </div>

                    <div className='form-group mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' name='password' placeholder='password' value={user?.password} onChange={handleChange} required />
                        <div className='invalid-feedback'>Password is required</div>
                    </div>

                    <button className='btn btn-info text-white w-100 mt-3' disabled={loading}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;