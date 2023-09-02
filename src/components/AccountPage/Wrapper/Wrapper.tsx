"use client"

import React, { useContext } from 'react'
import Profile from '../Profile/Profile'
import Persona from '../Persona/Persona'
import { GlobalContext } from '@/context/GlobalContext'
import useWrapper from './Wrapper.utils'

const Wrapper = () => {
    const {
        auth,
        setAuth
    } = useContext(GlobalContext)

    const {
        userData,
        getUserData
    } = useWrapper(auth)

    return (
        <div className='wrapper container'>
            <Profile userData={userData} auth={auth} setAuth={setAuth}/>
            <Persona userData={userData} auth={auth} getUserData={getUserData}/>
        </div>
    )
}

export default Wrapper