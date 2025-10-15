'use client';

import { useState } from 'react';

import Link from 'next/link';

const Form = () => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className='w-[330px] sm:w-[500px] p-4 sm:px-20 sm:py-10 mx-auto rounded-md flex flex-col gap-y-4 login-form'>

            <h1 className='text-white text-2xl font-bold'>Login</h1>

            <form className='flex flex-col gap-y-4'>

                <div className='relative login-email-input-container'>

                    <input className='text-white w-full px-3 pt-5 pb-3 border-2 border-gray-300 rounded-md transition-colors  duration-300 ease-in-out placeholder:text-gray-300 focus:border-white login-email-input' type='email' placeholder=' ' />

                </div>

                <div className='relative login-password-input-container'>

                    <input className='text-white w-full px-3 pt-5 pb-3 border-2 border-gray-300 rounded-md transition-colors  duration-300 ease-in-out placeholder:text-gray-300 focus:border-white login-password-input' type='password' placeholder=' ' />
                
                </div>

                <button className='bg-main text-white font-bold py-2 rounded-md transition-opacity duration-300 ease-in-out hover:opacity-80' type='submit'>Login</button>

            </form>

            <span className='text-gray-300 text-center'>OR</span>

            <button className='sign-in-code text-white font-bold py-2 rounded-md transition-opacity duration-300 ease-in-out hover:opacity-80' type='button'>Use a Sign-in Code</button>

            <Link className='text-white font-bold text-center underline transition-colors duration-300 ease-in-out hover:text-gray-300' href=''>Forgot Password?</Link>
            
            <div className='flex items-center gap-x-2 relative remember-me-container'>

                <input className='w-5 h-5 border-2 border-gray-300 rounded-md cursor-pointer select-none appearance-none transition-colors duration-300 ease-in-out hover:border-white checked:hover:border-gray-300 checked:bg-white remember-me' type='checkbox' name='remember-me' id='remember-me' checked={rememberMe} onChange={handleRememberMeChange} />

                <label className='text-white' htmlFor='remember-me'>Remember me</label>

            </div>

            <p className='text-gray-300'>New to NETFLIX? <Link className='text-white font-bold hover:underline' href=''>Register now.</Link></p>

            <p className='text-gray-300 text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>

            <button className='text-blue-400 text-xs text-left underline' type='button'>Learn more.</button>

        </div>
    );
};

export default Form;