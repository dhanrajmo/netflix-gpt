import React, { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { AVATAR, LOGO } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('')
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser)
    }).catch((error) => {
      // An error happened.
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

    const handleGPTSeacrchClick = () => {
      dispatch(toggleGptSearchView())
    }
  return (
    <div className='absolute w-screen px-6 md:px-8 py-12 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
      <img className='w-44 mx-auto md:mx-0'
        alt='Header Logo'
        src= {LOGO} />
      {user ? <div className='flex p-2 justify-between'>
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg ' onClick={handleGPTSeacrchClick}>{showGptSearch ? 'Home' : 'Show GPT'}</button>
        <h3 className='text-red-500 font-bold text-lg mx-6'>Welcome {displayName}</h3>
        <img className='hidden md:block w-12 h-12' src={AVATAR} alt='icon' />
        <button onClick={handleSignOut} className='font-bold text-white px-4'>{'Sign Out'}</button>
      </div> : []}
    </div>

  )
}

export default Header