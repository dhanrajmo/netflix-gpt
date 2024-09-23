import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidateData} from '../utils/validate'
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage ,setErrorMessage] = useState('');
    const email = useRef(null)
    const password = useRef(null)
    const toggleSignInForm = () =>{
        setIsSignIn(!isSignIn);
    }
    const handleButtonClick = () => {
        setErrorMessage(checkValidateData(email.current.value,password.current.value)) 
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img  src = 'https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg'
            alt='BG'/>
        </div>
        <form onSubmit={(e) =>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'> {isSignIn ? 'Sign In' : 'Sign Up'}</h1>
            {isSignIn ? [] : <input  type = 'text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>}
            <input ref = {email} type='text' placeholder='Email or Phone Number' className='p-4 my-4 w-full bg-gray-700 rounded-lg'></input>
            <input ref = {password} type = 'password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'></input>
            {/* {isSignIn ? [] : <input type = 'number' placeholder='Mobile Number' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>} */}
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            <h3 className='text-red-500 font-bold text-lg'>{errorMessage}</h3>
            <p className='py-4' onClick={toggleSignInForm}>{isSignIn ? 'New to Netflix? Sign Up Now' : 'Already Member? Sign In'}</p>
        </form>
    </div>
  )
}

export default Login