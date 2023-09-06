"use client"
import Button from '@/components/UI/Button/Button'
import React from 'react'
import useSuccessModal from './SucccessModal.utils'

const SuccessModal = () => {
    const {navToMain} = useSuccessModal()

    return (
        <div className="succ-wrapper">
            <div className='cta'>
                    <h2 className="cta-title">Thank you!</h2>
                    <p className="cta-desc">We are pleased to inform you that you can now receive AI answers via SMS. To access this service, simply send a message to the number from which you received the initial SMS.</p>
                    <p className="cta-desc">Please note that your access has been granted for one month, and your next payment will be due in one month's time. You can review and modify your subscription at any time by visiting the Account section of our website and clicking on the LOGIN button.</p>
                    <p className="cta-desc">We would like to remind you that our AI system will do its best to provide answers that fit within the SMS format. If you have any questions or concerns about the service, please do not hesitate to contact us. Thank you for choosing our service.</p>
                    <Button variant="contained" color='white' size="large" className='cta-btn' onClick={navToMain}>Great!</Button>
            </div>
        </div>
    )
}

export default SuccessModal