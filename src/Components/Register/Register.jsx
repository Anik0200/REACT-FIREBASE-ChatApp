import React, { useState } from 'react'
import '../Common/LoginRegister.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function Register() {

    //Navigation
    const navigate = useNavigate();

    //State
    const [show, setShow] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');



    //Functions
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '') {
            setNameError('Name is required');
        }

        if (email === '') {
            setEmailError('Email is required');
        }

        if (password === '') {
            setPasswordError('Password is required');
        }

        if (name && email && password) {

        }

    }

    return (
        <>
            <section className='register'>

                <div className="register-left">

                    <h2 className='register-title font-poppins font-semibold text-[#FFFFFF]'>
                        Find 3D Objects, Mockups and
                        Illustrations here.
                    </h2>

                    <div className="register-left-bg">
                        <img src="../images/registerbg.png" alt="" />
                    </div>

                </div>

                <div className="register-right">

                    <div className="register-head text-center">
                        <h2 className='font-poppins font-bold text-[#000000]'>Create Account</h2>
                    </div>

                    <div className="btn flex flex-wrap justify-center">
                        <button className='font-poppins font-semibold text-[#000000]'>
                            <img src="../images/googleLogo.png" alt="" />
                            Sign up with Google
                        </button>

                        <button className='font-poppins font-semibold text-[#000000]'>
                            <img src="../images/googleLogo.png" alt="" />
                            Sign up with Facebook
                        </button>
                    </div>

                    <h2 className='OR font-medium font-poppins text-[#A6A6A6]'> - OR - </h2>

                    <form onSubmit={handleSubmit} className='register-form flex flex-col items-center gap-[42px]'>

                        <div className="input-group relative">
                            <input onChange={(e) => { setName(e.target.value), setNameError('') }} type="text" placeholder='Full name' />
                            <p className='error'>{nameError}</p>
                        </div>

                        <div className="input-group relative">
                            <input onChange={(e) => { setEmail(e.target.value), setEmailError('') }} type="text" placeholder='Email Address' />
                            <p className='error'>{emailError}</p>
                        </div>

                        <div className="input-group relative">
                            <input onChange={(e) => { setPassword(e.target.value), setPasswordError('') }} type={show ? "text" : "password"} placeholder='Password' />
                            <p className='error'>{passwordError}</p>

                            {
                                show ?
                                    <FaRegEye onClick={() => setShow(!show)} className='eye' />
                                    :
                                    <FaRegEyeSlash onClick={() => setShow(!show)} className='eye' />
                            }
                        </div>

                        <button type='submit' className='font-poppins font-bold text-[#FFFFFF]'>
                            Create Account
                        </button>

                        <h2 className='font-poppins font-medium text-[#A6A6A6]'>Already have an account?
                            <Link onClick={() => navigate('/login')} className='text-[#B0D8DA] ml-[1px]'>Login</Link>
                        </h2>

                    </form>

                </div>

            </section>
        </>
    )
}

export default Register
