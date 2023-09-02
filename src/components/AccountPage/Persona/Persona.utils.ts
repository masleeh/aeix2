import { roles } from "@/assets/data/roles"
import { useState } from "react"
import { TRolesList } from "./Persona.types"

const usePersona = () => {
    const [showRoles, setShowRoles] = useState(false)

    const [selectedRole, setSelectedRole] = useState(1)
    const [listRoles, setListRoles] = useState<TRolesList[]>(roles.map(item => ({...item, isSelected: item.id === selectedRole ? true : false})))

    const selectRoles = (id: number) => {
        setSelectedRole(id)
        const newRoles = listRoles.map(item => {
            if (item.id === id) return {...item, isSelected: true}
            else return {...item, isSelected: false}
        })
        setListRoles(newRoles)
    }

    const handleChangeRoleClick = () => {
        setShowRoles(!showRoles)
    }

    return {
        showRoles,
        handleChangeRoleClick,
        listRoles,
        selectRoles
    }
}

export default usePersona