import React, { ReactNode } from 'react'
import xIcon from '@/assets/icons/x.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';

type TModalWrapper = {
    children: ReactNode,
    onClose: () => void;
}

const ModalWrapper = ({children, onClose}:TModalWrapper) => {
    return (
        <div className='modal'>
            <Image alt="" src={xIcon} className="modal-x" onClick={onClose}/>
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -300 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default ModalWrapper