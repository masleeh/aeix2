"use client"

import React from 'react'
import { useFAQ } from '../FAQ.utils'
import { TFAQElement } from '../FAQ.types'
import vectorIcon from '@/assets/icons/Vector.svg'
import Image from 'next/image'

const FAQElement = ({
    title,
    description
}:TFAQElement) => {
    const {showDesc, handleBoxClick} = useFAQ()

    return (
        <div className='faq-box' onClick={() => handleBoxClick()}>
            <div className="faq-box-stack">
                <h4 className='faq-box-title'>{title}</h4>
                <div className={showDesc ? "faq-box-icon-cont faq-box-icon-cont-active" : "faq-box-icon-cont"}>
                    <Image src={vectorIcon} alt="" />
                </div>
            </div>
            <p className={showDesc ? 'faq-box-desc faq-box-desc-active' :'faq-box-desc'}>{description}</p>        
        </div>
    )
}

export default FAQElement