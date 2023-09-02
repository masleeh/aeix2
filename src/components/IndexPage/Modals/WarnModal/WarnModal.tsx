import React from 'react'
import ModalWrapper from '../ModalWrapper'
import Button from '@/components/UI/Button/Button'

const WarnModal = ({handleCloseModal}: {handleCloseModal: any}) => {
    return (
        <ModalWrapper onClose={handleCloseModal}>
            <div className="cta">
                <h2 className="cta-title">Done!</h2>
                <p className="cta-desc">Your subscription has been successfully cancelled</p>
                <Button variant='contained' size="medium" color="white" onClick={handleCloseModal}>Back to main page</Button>
            </div>
        </ModalWrapper>
    )
}

export default WarnModal