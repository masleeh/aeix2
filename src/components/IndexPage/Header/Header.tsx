import Button from '@/components/UI/Button/Button'
import useOpenModal from '@/hooks/useOpenModal'
import React from 'react'

const Header = () => {

    const {
        openCTAModal
    } = useOpenModal()

    return (
        <header className='header'>
            <div className='container header-wrapper'>
                
                <h1 className='header-title'>Experience the power of AI</h1>
                <h2 className='header-subtitle'>with the Text to AI chat app AEIX!</h2>

                <Button onClick={openCTAModal} size="large" variant="contained" color="white" className='header-btn'>Get Started</Button>
            </div>
        </header>
    )
}

export default Header