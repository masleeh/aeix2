"use client"

import React from 'react'
import { roles } from '@/assets/data/roles'
import Image from 'next/image'
import { TPersonaItem } from '../../Persona.types'

const PersonaItem = ({
    title,
    description,
    image
}: TPersonaItem) => {
    

    return (
        <div className='pers-act'>
            <Image src={image} alt="" className='pers-act-img'/>
            <h4 className="pers-act-title">{title}</h4>
            <p className='pers-act-desc'>{description}</p>
        </div>
    )
}

export default PersonaItem