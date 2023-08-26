import React from 'react'
import { TFeatureCard } from '../Features.types'
import Image from 'next/image'

const FeatureCard = ({
    title,
    description,
    icon
}: TFeatureCard) => {
    return (
        <div className='feat-card'>
            <Image src={icon} alt="" className='feat-card-icon'/>
            <h4 className="feat-card-title">{title}</h4>
            <p className="feat-card-desc">{description}</p>
        </div>
    )
}

export default FeatureCard