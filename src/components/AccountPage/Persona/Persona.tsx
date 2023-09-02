"use client"

import Button from '@/components/UI/Button/Button'
import React from 'react'
import PersonaList from './Elements/PersonaList/PersonaList'
import PersonaItem from './Elements/PersoneItem/PersonaItem'
import usePersona from './Persona.utils'
import { TPersona } from './Persona.types'
import { roles } from '@/assets/data/roles'
import NewRoleModal from '@/components/IndexPage/Modals/NewRoleModal/NewRoleModal'

const Persona = ({userData, auth, getUserData}: TPersona) => {
    const {
        showRoles,
        listRoles,
        selectRoles,
        handleChangeRoleClick,
        loading,
        changeRole,
        showModal,
        handleCloseModal
    } = usePersona(auth, getUserData)

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
                        title={roles.find(item => item.id === userData.role_id)?.title!}
                        description={roles.find(item => item.id === userData.role_id)?.description!}
                        image={roles.find(item => item.id === userData.role_id)?.image!}
                    />
                )}
            </div>
            
            <div className="pers-wrapper">
                {showRoles && <Button loading={loading ? true : false} onClick={changeRole} variant="contained" color="white">Save</Button>}
                <Button variant="outlined" color="white" className='pers-btn' onClick={handleChangeRoleClick}>{showRoles ? "Cancel" : "Change Role"}</Button>
            </div>

            {showModal && <NewRoleModal handleCloseModal={handleCloseModal} data={roles.find(item => item.id === userData.role_id)}/>}
        </section>
    )
}

export default Persona