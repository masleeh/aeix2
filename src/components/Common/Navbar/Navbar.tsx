"use client"

import { inter } from '@/app/fonts'
import Button from '@/components/UI/Button/Button'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useNavBar from './Navbar.utils'
import useOpenModal from '@/hooks/useOpenModal'

const Navbar = () => {

    const {
        navTop,
        goToHome
    } = useNavBar()

    const {
        openAuthModal
    } = useOpenModal()

    return (
        <nav className='navbar'>
            <div className={navTop > 1 ? "navbar-wrapper navbar-wrapper-boxed" :"navbar-wrapper"}>
                <div className={`${inter.className} navbar-title`} onClick={goToHome}>AEIX</div>

                <Button size="medium" variant="contained" color="white">Get Started</Button>
            </div>
        </nav>
    )
}

export default Navbar