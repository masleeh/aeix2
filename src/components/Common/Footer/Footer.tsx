import React from 'react'
import { inter } from '@/app/fonts'
import Button from '@/components/UI/Button/Button'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-stack">
                    <div className={`${inter.className} navbar-title`}>AEIX</div>

                    <div className="footer-stack2">
                        <a href="#" className='footer-link'>Home</a>
                        <a href="#" className='footer-link'>Features</a>
                        <a href="#" className='footer-link'>FAQ</a>
                    </div>

                    <div className="footer-stack2">
                        <Button variant='outlined' color="white" className='footer-btn'>Login</Button>
                        <Button variant="contained" color="white" className='footer-btn'>Sign up</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer