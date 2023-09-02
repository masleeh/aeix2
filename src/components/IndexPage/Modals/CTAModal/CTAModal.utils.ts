"use client"

import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";


const useCTAModal = (setIsCTAFormShow: Dispatch<SetStateAction<boolean>>) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [agree, setAgree] = useState(false)

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)
    const handleChangePhone = (event: any) => setPhone(event)
    const handleChangeAgree = () => setAgree(!agree)

    const handleCloseForm = () => setIsCTAFormShow(false)

    const handleClickOutside = useCallback((event:Event) => {
        if (event.target === document.querySelector('.modal')) setIsCTAFormShow(false)
    }, [])

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        } 
    }, [])

    const handleSendUserData = () => {
        setLoading(true)
        console.log(phone)
        if (!name || !phone || !agree || name.length > 60 || phone.length < 12) return setError("Please, provide correct data")
    }

    return {
        name,
        handleChangeName,
        phone,
        handleChangePhone,
        agree,
        handleChangeAgree,
        handleCloseForm,
        handleSendUserData
    }
}

export default useCTAModal