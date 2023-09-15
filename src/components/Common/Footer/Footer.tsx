import React from 'react'
import { inter } from '@/app/fonts'
import Button from '@/components/UI/Button/Button'
import useOpenModal from '@/hooks/useOpenModal'

const Footer = () => {
    const {
        openAuthModal,
        openCTAModal
    } = useOpenModal()


    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-stack">
                    <div className={`${inter.className} navbar-title`}>AEIX</div>

                    <div className="footer-stack2">
                        <a href="#" className='footer-link'>Home</a>
                        <a href="#features" className='footer-link'>Features</a>
                        <a href="#faq" className='footer-link'>FAQ</a>
                    </div>

                    <div className="footer-stack2">
                        <Button variant='outlined' color="white" className='footer-btn' onClick={openAuthModal}>Log in</Button>
                        <Button variant="contained" color="white" className='footer-btn'onClick={openCTAModal}>Sign up</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer