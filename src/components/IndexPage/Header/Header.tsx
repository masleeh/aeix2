import Button from '@/components/UI/Button/Button'
import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <div className='container header-wrapper'>
                
                <h1 className='header-title'>Experience the power of AI</h1>
                <h2 className='header-subtitle'>with the Text to AI chat app AEIX!</h2>

                <Button size="large" variant="contained" color="white" style={{marginTop: 40}}>Get Started</Button>
            </div>
        </header>
    )
}

export default Header