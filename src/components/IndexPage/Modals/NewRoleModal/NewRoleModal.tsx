import React from 'react'
import ModalWrapper from '../ModalWrapper'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'

const NewRoleModal = ({handleCloseModal, data}: {handleCloseModal: any, data: any}) => {

    return (
        <ModalWrapper onClose={handleCloseModal}>
            <div className="cta">
                <h2 className="cta-title">New role model</h2>
                <div className="cta-warn">
                    <Image src={data.image} alt="" className='cta-warn-img'/>
                    <h4 className="pers-act-title">{data.title}</h4>
                    <p className='pers-act-desc'>{data.description}</p>
                </div>
                <Button className='cta-btn' variant='contained' size="medium" color="white" onClick={handleCloseModal}>Back to main page</Button>
            </div>
        </ModalWrapper>
    )
}

export default NewRoleModal