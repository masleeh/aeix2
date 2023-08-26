import React from 'react'
import { TRoleCard } from '../Roles.types'
import Image from 'next/image'

const RoleCard = ({
    title,
    description,
    image
}: TRoleCard) => {
    return (
        <div className='roles-card'>
            <Image src={image} alt="" className='roles-card-img' />
            <h4 className="roles-card-title">{title}</h4>
            <p className="roles-card-description">{description}</p>
        </div>
    )
}

export default RoleCard