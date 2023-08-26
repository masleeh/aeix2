import React from 'react'
import { useFAQ } from '../FAQ.utils'

const FAQElement = () => {
    const {showDesc, handleBoxClick} = useFAQ()

    return (
        <div className='faq-box' onClick={() => handleBoxClick()}>
            
        </div>
    )
}

export default FAQElement