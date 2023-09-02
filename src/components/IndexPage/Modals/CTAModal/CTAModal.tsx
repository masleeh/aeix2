import React from 'react'
import ModalWrapper from '../ModalWrapper'
import ModalInput from '@/components/UI/ModalInput/ModalInput'
import useCTAModal from './CTAModal.utils'
import { TCTAModal } from './CTAModal.types'
import Button from '@/components/UI/Button/Button'
import CTABox from './Elements/CTABox'
import Link from 'next/link'


const CTAModal = ({
    setIsCTAFormShow
}:TCTAModal) => {

    const {
        name,
        handleChangeName,
        phone,
        handleChangePhone,
        agree,
        handleChangeAgree,
        error,
        handleCloseForm,
        handleSendUserData,
        loading,
        formatDate
    } = useCTAModal(setIsCTAFormShow)

    return (
        <ModalWrapper onClose={handleCloseForm}>
            <div className="cta">
                <h2 className="cta-title">Your plan</h2>
                <p className="cta-desc">after payment you will be able to choose a role</p>
                <ModalInput
                    type="text" 
                    title="Your name"
                    placeholder='John Doe'
                    value={name}
                    handleChangeValue={handleChangeName}
                />
                <ModalInput
                    type="phone"
                    title="Enter your phone number"
                    placeholder='+1 123 456 7890'
                    value={phone}
                    handleChangeValue={handleChangePhone}
                />
                <CTABox formatDate={formatDate}/>

                <div className='cta-check-row'>
                    <input type="checkbox" id="cta_checkbox" className='cta-check' checked={agree ? true : false} onChange={handleChangeAgree}/>
                    <label htmlFor='cta_checkbox' className='cta-check-label'>I agree to the &nbsp; 
                        <Link href="user_agreement.pdf" locale='/public/user_agreement.pdf' target="_blank" className='cta-terms'>terms of privacy</Link></label>
                </div>

                {error && <p className="cta-error">{error}</p>}

                <Button 
                    variant="contained" 
                    color="white" 
                    size="large" 
                    onClick={handleSendUserData}
                    loading={loading}    
                    className='cta-btn'
                >Pay</Button>
            </div>
        </ModalWrapper>
    )
}

export default CTAModal