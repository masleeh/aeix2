"use client"

import { inter } from '@/app/fonts'
import Button from '@/components/UI/Button/Button'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import useNavBar from './Navbar.utils'
import useOpenModal from '@/hooks/useOpenModal'
import { GlobalContext } from '@/context/GlobalContext'

const Navbar = () => {

    const {auth, setAuth} = useContext(GlobalContext)

    const {
        navTop,
        goToHome,
        goToAccount,
        pathname,
        logOut
    } = useNavBar(setAuth)

    const {
        openAuthModal,
        openCTAModal
    } = useOpenModal()

    return (
        <nav className='navbar'>
            <div className={navTop > 1 ? "navbar-wrapper navbar-wrapper-boxed" :"navbar-wrapper"}>
                <div className={`${inter.className} navbar-title`} onClick={goToHome}>AEIX</div>

                {auth ? (
                    pathname === "/account" ? (
                        <Button onClick={logOut} size="medium" variant="outlined" color="white">Log out</Button>
                    ) : (
                        <Button onClick={goToAccount} size="medium" variant="contained" color="white">Account</Button>
                    )
                ) : (
                    <div className='navbar-row'>
                        <Button onClick={openAuthModal} size="medium" variant="outlined" color="white">Log in</Button>
                        <Button onClick={openCTAModal} size="medium" variant="contained" color="white">Sign up</Button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar