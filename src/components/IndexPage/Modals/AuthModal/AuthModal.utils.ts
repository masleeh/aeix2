import axios from "axios"
import { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from "react"
import Cookie from 'js-cookie'
import { useRouter } from "next/navigation"
import useKeyEnter from "@/hooks/useKeyEnter"

const useAuthModal = (setIsAuthFormShow: Dispatch<SetStateAction<boolean>>, setAuth: Dispatch<SetStateAction<string>>) => {
    
    const [phone, setPhone] = useState("")
    const [code, setCode] = useState("")
    const [respCode, setRespCode] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const router = useRouter()

    const [isShowCode, setIsShowCode] = useState(false)

    const handleChangePhone = (event: any) => setPhone(event)
    const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => setCode(event.target.value)

    const handleClickOutside = useCallback((event:Event) => {
        if (event.target === document.querySelector('.modal')) setIsAuthFormShow(false)
    }, [])

    useEffect(() => {
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        } 
    }, [])

    const sendNumber = async () => {
        setLoading(true)
        setError("")
        if (phone.length < 12) {
            setLoading(false)
            return setError("Please, provide correct number")            
        } 
        else {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth_sms`, {
                    user_phone: phone
                })
                setRespCode(response.data.sms_code)
                console.log(response.data.sms_code)
                setLoading(false)
                setIsShowCode(true)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error)
                }
                setError("Your account doesn't exist")
                setLoading(false)
            }
        }
    }

    const sendCode = async () => {
        setError("")
        try {
            if (respCode.toString() === code) {
                Cookie.set('aeix_phone', phone, { expires: 20} )
                setAuth(phone)
                router.push('/account')
            } else {
                setError("SMS code doesn't match")
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
            }
        }
    }
    
    const {handleKey} = useKeyEnter()

    const handleSendNumberOnEnter = (event: any) => handleKey(sendNumber, event)
    const handleSendCodeOnEnter = (event: any) => handleKey(sendCode, event)

    return {
        phone,
        handleChangePhone,
        code,
        handleChangeCode,
        loading,
        error,
        isShowCode,
        sendNumber,
        sendCode,
        handleSendNumberOnEnter,
        handleSendCodeOnEnter
    }
}

export default useAuthModal