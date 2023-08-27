import React from 'react'
import { TProfText } from './ProfText.types'

const ProfText = ({
    title,
    text
}: TProfText) => {
    return (
        <div className='prof-input-cont'>
            <h5 className='prof-input-title'>{title}:</h5>
            <div className='prof-input'>{text}</div>
        </div>
    )
}

export default ProfText