import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice';
import { BGIMAGE } from '../utils/constants';
const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const fullName = useRef('');
    const email = useRef(null)
    const password = useRef(null)
    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }
    const handleButtonClick = () => {
        let message = checkValidateData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;

        if (!isSignIn) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!,
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(error.message)
                    });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '////' + errorMessage);
                    // ..
                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '////' + errorMessage)
                });
        }
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='md:w-screen h-screen object-cover' src= {BGIMAGE}
                    alt='BG' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'> {isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                {isSignIn ? [] : <input ref={fullName} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />}
                <input ref={email} type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700 rounded-lg'></input>
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'></input>
                {/* {isSignIn ? [] : <input type = 'number' placeholder='Mobile Number' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>} */}
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                <h3 className='text-red-500 font-bold text-lg'>{errorMessage}</h3>
                <p className='py-4' onClick={toggleSignInForm}>{isSignIn ? 'New to Netflix? Sign Up Now' : 'Already Member? Sign In'}</p>
            </form>
        </div>
    )
}

export default Login