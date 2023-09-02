import { roles } from "@/assets/data/roles"
import { useState } from "react"
import { TRolesList } from "./Persona.types"
import axios from "axios"

const usePersona = (auth: string, getUserData: any) => {
    const [showRoles, setShowRoles] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const [loading, setLoading] = useState(false)

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

    const changeRole = async () => {
        setLoading(true)
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/change_role`, {
                user_phone: auth,
                role_id: selectedRole
            })
            setLoading(false)
            getUserData()
            setShowRoles(false)
            setShowModal(true)
        } catch (error: any) {
            console.log(error)
            setLoading(false)
        }
    }


    const handleChangeRoleClick = () => {
        setShowRoles(!showRoles)
    }

    const handleCloseModal = () => setShowModal(false)

    return {
        showRoles,
        handleChangeRoleClick,
        listRoles,
        selectRoles,
        loading,
        changeRole,
        handleCloseModal,
        showModal
    }
}

export default usePersona