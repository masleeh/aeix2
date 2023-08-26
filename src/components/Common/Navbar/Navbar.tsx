import { inter } from '@/app/fonts'
import Button from '@/components/UI/Button/Button'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-wrapper">
                <div className={`${inter.className} navbar-title`}>AEIX</div>

                <Button size="medium" variant="contained" color="white">Get Started</Button>
            </div>
        </nav>
    )
}

export default Navbar