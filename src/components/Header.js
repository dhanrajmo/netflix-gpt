import React, { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { AVATAR, LOGO } from '../utils/constants'


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('')
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/')
    });
  }

  useEffect(
    () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is Sign in
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse');
                setDisplayName(displayName)
            } else {
                // User is signed out
                dispatch(removeUser)
                navigate('/')
            }
        })
        ///unsubscribed when component unmounts
        return () => unsubscribed();
    }
    , [])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between overflow-hidden'>
      <img className='w-44'
        alt='Header Logo'
        src= {LOGO} />
      {user && <div className='flex p-2 m-2'>
        <h3 className='text-red-500 font-bold text-lg mx-6'>Welcome {displayName}</h3>
        <img className='w-12 h-12' src={AVATAR} alt='icon' />
        <button onClick={handleSignOut} className='font-bold text-white px-4'>{'Sign Out'}</button>
      </div>}
    </div>

  )
}

export default Header