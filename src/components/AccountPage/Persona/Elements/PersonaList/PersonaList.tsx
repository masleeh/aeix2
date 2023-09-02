"use client"

import React from "react"
import Image from "next/image"
import { TPersonaList } from "../../Persona.types"

const PersonaList = ({
    listRoles,
    selectRoles
}:TPersonaList) => {
    return (
        <React.Fragment>
            {listRoles.map((item, index) => (
                <div className={item.isSelected? "pers-list-item pers-list-item-selected" : "pers-list-item"} key={index} onClick={() => selectRoles(item.id)}>
                    <Image src={item.image} alt="" className="pers-list-item-img"/>
                    <h4 className="pers-list-item-title">{item.title}</h4>
                    {item.isSelected && <p className='pers-act-desc'>{item.description}</p>}
                </div>
            ))}
        </React.Fragment>
    )
}

export default PersonaList