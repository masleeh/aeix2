import { roles } from '@/assets/data/roles'
import React from 'react'
import RoleCard from './Elements/RoleCard'
import Button from '@/components/UI/Button/Button'

const Roles = () => {
    return (
        <section className='roles container'>
            <h3 className="roles-title">Choose how the bot will interact with you</h3>

            <div className="roles-wrapper">
                {roles.map((item, index) => (
                    <RoleCard key={index} title={item.title} description={item.description} image={item.image} />
                ))}
            </div>

            <Button variant="contained" color="violet" size="large" className='roles-btn'>Get Started</Button>

        </section>
    )
}

export default Roles