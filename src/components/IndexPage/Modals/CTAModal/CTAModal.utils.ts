"use client"

import axios from "axios";
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

    const handleSendUserData = async () => {
        setError("")
        setLoading(true)
        if (!name || !phone || phone.length < 12) {
            setLoading(false)
            return setError("Please input both your name and phone number")
        }
        if (!agree) {
            setLoading(false)
            return setError("Please reach an agreement before making a purchase.")
        }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/create-checkout-session`, {
                user_name: name,
                user_phone: phone,
                user_email: ""
            })
            setLoading(false)
            window.location = response.data.url
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
            setLoading(false)
        }
    }

    const formatDate = (timestamp:any) => {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];
          
          const date = new Date(timestamp);
          const month = months[date.getMonth()];
          const day = date.getDate();
          const year = date.getFullYear();
        
          return `${month}, ${day.toString().padStart(2, '0')}, ${year}`;
    }

    return {
        name,
        handleChangeName,
        phone,
        handleChangePhone,
        agree,
        error,
        loading,
        handleChangeAgree,
        handleCloseForm,
        handleSendUserData,
        formatDate
    }
}

export default useCTAModal