import React, { PropsWithChildren, ReactNode } from 'react'
import xIcon from '@/assets/icons/x.svg'
import Image from 'next/image'

type TModalWrapper = {
    children: ReactNode,
    onClose: () => void;
}

const ModalWrapper = ({children, onClose}:TModalWrapper) => {
    return (
        <div className='modal'>
            <Image alt="" src={xIcon} className="modal-x" onClick={onClose}/>
            {children}
        </div>
    )
}

export default ModalWrapper