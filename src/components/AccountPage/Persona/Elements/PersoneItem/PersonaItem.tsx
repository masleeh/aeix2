"use client"

import React from 'react'
import { roles } from '@/assets/data/roles'
import Image from 'next/image'

const PersonaItem = () => {
    

    return (
        <div className='pers-act'>
            {/* <Image src={} alt="" className='pers-act-img'/> */}
            <h4 className="pers-act-title">{}</h4>
            <p className='pers-act-desc'>{}</p>
        </div>
    )
}

export default PersonaItem