import React from 'react'
import { TPlanElement } from '../Plan.types'
import checkmark from '@/assets/icons/Checkmark.svg'
import Image from 'next/image'

const PlanElement = ({
    title
}: TPlanElement) => {
    return (
        <div className='plan-box-stack'>
            <Image src={checkmark} alt=""/>
            <h4 className='plan-box-stack-title'>{title}</h4>
        </div>
    )
}

export default PlanElement