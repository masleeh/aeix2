import React from 'react'
import { TProfInput } from './ProfInput.types'

const ProfInput = ({
    title,
    placeholder
}: TProfInput) => {
    return (
        <div className='prof-input-cont'>
            <h5 className='prof-input-title'>{title}:</h5>
            <input type="text" className='prof-input' placeholder={placeholder} />
        </div>
    )
}

export default ProfInput