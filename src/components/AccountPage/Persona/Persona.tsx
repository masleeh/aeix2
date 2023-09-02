"use client"

import Button from '@/components/UI/Button/Button'
import React from 'react'
import PersonaList from './Elements/PersonaList/PersonaList'
import PersonaItem from './Elements/PersoneItem/PersonaItem'
import usePersona from './Persona.utils'

const Persona = () => {
    const {
        showRoles,
        listRoles,
        selectRoles,
        handleChangeRoleClick
    } = usePersona()

    return (
        <section className='pers'>
            <h3 className="prof-title">Persona</h3>

            <div className="pers-box">
                {showRoles ? (
                    <PersonaList 
                        listRoles={listRoles}
                        selectRoles={selectRoles}
                    />
                ) : (
                    <PersonaItem 

                    />
                )}
            </div>
            
            <div className="pers-wrapper">
                {showRoles && <Button variant="contained" color="white">Save</Button>}
                <Button variant="outlined" color="white" className='pers-btn' onClick={handleChangeRoleClick}>{showRoles ? "Cancel" : "Change Role"}</Button>
            </div>
        </section>
    )
}

export default Persona